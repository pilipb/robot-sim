'''
This will implement the reverse kinematic model for the crane.



'''

import math
import time

import asyncio
import websockets
import json

class State:
    def __init__(self, height=0, alpha=0, beta=0, gamma=0, gripper=0):
        self.z = height
        self.alpha = alpha
        self.beta = beta
        self.gamma = gamma
        self.g = gripper

class CraneController:
    def __init__(self):
        self.actuator_limits = {
            'z': {'max_speed': 0.1, 'max': 2},
            'alpha': {'max_speed': 0.1, 'max': 2*math.pi},
            'beta': {'max_speed': 1, 'max': 2*math.pi},
            'gamma': {'max_speed': 1, 'max': 2*math.pi},
            'g': {'max_speed': 1, 'max': 2},
        }
        self.p = 10
        self.i = 0.1
        self.d = 0.01

        self.current_state = State()
        self.last_update_time = time.time()

    def update_state(self, desired_state):
        current_time = time.time()
        elapsed_time = current_time - self.last_update_time

        for actuator, target_value in desired_state.items():
            current_value = getattr(self.current_state, actuator)
            error = target_value - current_value

            # PID calculations
            if not hasattr(self, 'last_error'):
                self.last_error = {key: 0 for key in desired_state}
            if not hasattr(self, 'integral'):
                self.integral = {key: 0 for key in desired_state}

            self.integral[actuator] += error * elapsed_time
            derivative = (error - self.last_error[actuator]) / elapsed_time

            # PID output
            output = (self.p * error) + (self.i * self.integral[actuator]) + (self.d * derivative)
            self.last_error[actuator] = error

            # Apply the PID output to the actuator, respecting maximum speed limits
            max_delta = self.actuator_limits[actuator]['max_speed'] * elapsed_time
            delta = output
            if abs(delta) > max_delta:
                delta = max_delta if delta > 0 else -max_delta

            new_value = current_value + delta
            new_value = min(new_value, self.actuator_limits[actuator]['max'])
            new_value = max(new_value, 0)
            setattr(self.current_state, actuator, new_value)

        self.last_update_time = current_time

        return self.current_state

