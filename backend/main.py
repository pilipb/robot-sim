import json

from fastapi import FastAPI, WebSocket

from functions.crane_kinematics import move, process_events

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()

        data = json.loads(data)

        
        eventType = data['type']

        if eventType == 'move':
            move(data['movement'])
        elif eventType == 'stop':
            process_events(data['data'])
        

        await websocket.send_text(f"Message text was: {data}")