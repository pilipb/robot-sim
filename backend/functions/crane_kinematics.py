
'''
With the 4 degrees of freedom:

All the angles are measured from the x-axis in clockwise direction.

1. h: height of the crane
2. alpha: angle of the first arm
3. beta: angle of the second arm
4. gamma: angle of the third arm

arm length:
arm1
arm2
arm3



The following equations are used to calculate the position of the end effector:
z = h
x = sin(alpha) * arm1 + sin(beta) * arm2 + sin(gamma) * arm3
y = cos(alpha) * arm1 + cos(beta) * arm2 + cos(gamma) * arm3

'''

import math

# calculate the position of the end effector
def calculate_position(arm1, arm2, h, alpha, beta, gamma):
    z = h
    x = math.sin(math.radians(alpha)) * arm1 + math.sin(math.radians(beta)) * arm2 + math.sin(math.radians(gamma)) * arm3
    y = math.cos(math.radians(alpha)) * arm1 + math.cos(math.radians(beta)) * arm2 + math.cos(math.radians(gamma)) * arm3
    return x, y, z