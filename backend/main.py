import json

from fastapi import FastAPI, WebSocket



app = FastAPI()

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