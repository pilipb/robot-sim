import json

from fastapi import FastAPI, WebSocket
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from functions.crane_kinematics import calculate_position

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

class CraneParams(BaseModel):
    kinematics: Kinematics

# Fixed dimensions for the crane
fixed_dimensions = {
    "origin": {"x": 0, "y": 0, "z": 0},
    "column": {"diameter": 0.1, "height": 2},
    "arm1": {"length": 0.5, "width": 0.1, "height": 0.1},
    "arm2": {"length": 1, "width": 0.1, "height": 0.1},
    "arm3": {"length": 0.4, "width": 0.05, "height": 0.05},
    "gripper": {"length": 0.1, "width": 0.02, "height": 0.02}
}

@app.post("/api/calculate-crane")
async def calculate_crane(crane_params: CraneParams):
    # Combine fixed dimensions with kinematics for calculation
    full_crane_params = {**fixed_dimensions, "kinematics": crane_params.kinematics.model_dump()}
    position = calculate_position(full_crane_params)
    return {"position": position}

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()

        data = json.loads(data)

        
        eventType = data['eventType']

        # if eventType == 'move':
        #     new_data = move(data['movement'])
        #     await websocket.send_text(f"Movement was: {new_data}")
        # elif eventType == 'stop':
        #     process_events(data['data'])
        

        # await websocket.send_text(f"Message text was: {new_data}")
        # await websocket.send_text(f"Message text was: {new_data}")
        # await websocket.send_text(f"Message text was: {new_data}")
        # await websocket.send_text(f"Message text was: {new_data}")
        # await websocket.send_text(f"Message text was: {new_data}")
        # await websocket.send_text(f"Message text was: {new_data}")
        # await websocket.send_text(f"Message text was: {new_data}")
        # await websocket.send_text(f"Message text was: {new_data}")