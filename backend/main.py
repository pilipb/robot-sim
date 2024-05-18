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
    g: float

class CraneParams(BaseModel):
    kinematics: Kinematics

@app.post("/api/calculate-crane")
async def calculate_crane(crane_params: CraneParams):
    # Convert the kinematics data to a dictionary for calculation
    # full_crane_params = crane_params.kinematics.dict()
    # position = calculate_position(full_crane_params)
    # return {"position": position}
    # return the input to test
    return {"position": crane_params.kinematics.dict()}

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