import json

from fastapi import FastAPI, WebSocket
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from functions.crane_kinematics import CraneController
import asyncio

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust to match the frontend host
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Kinematics(BaseModel):
    z: float
    alpha: float
    beta: float
    gamma: float
    g: float

    def __eq__(self, other):
        if not isinstance(other, Kinematics):
            return NotImplemented
        return (self.z == other.z and self.alpha == other.alpha and
                self.beta == other.beta and self.gamma == other.gamma and
                self.g == other.g)

class CraneParams(BaseModel):
    kinematics: Kinematics

@app.websocket("/ws/crane")
async def crane_websocket(websocket: WebSocket):
    await websocket.accept()
    crane_controller = CraneController()
    try:
        while True:
            try:
                data = await websocket.receive_json()
                crane_params = CraneParams(**data)
                desired_state = crane_params.kinematics
                updated_state = crane_controller.update_state(desired_state.dict())
                await websocket.send_json({'position': updated_state.__dict__})
                await asyncio.sleep(0.01)  
            except asyncio.TimeoutError:
                await websocket.ping()  
            except json.JSONDecodeError:
                continue  
    except Exception as e:
        print(e)
        await websocket.close()

