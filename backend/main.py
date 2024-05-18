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

class CraneParams(BaseModel):
    origin: dict = {"x": float, "y": float, "z": float}
    column: dict = {"diameter": float, "height": float}
    arm1: dict = {"length": float, "width": float, "height": float}
    arm2: dict = {"length": float, "width": float, "height": float}
    arm3: dict = {"length": float, "width": float, "height": float}
    gripper: dict = {"length": float, "width": float, "height": float}
    kinematics: dict = {"z": float, "alpha": float, "beta": float, "gamma": float}

@app.post("/api/calculate-crane")
async def calculate_crane(crane_params: CraneParams):
    # Assuming crane_params includes necessary parameters like 'angle', 'length', etc.
    position = calculate_position(crane_params)
    return {"position": position}  # Return the calculated position

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