from fastapi import FastAPI, WebSocket

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"} 


@app.get("/app")
async def run():
    return {"message": "No World"} 


@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id": item_id}


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")