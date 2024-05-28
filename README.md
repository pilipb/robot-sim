### This repo corresponds to a take home assignment, developing a model of a robotic crane

### The work here uses both a backend and frontend that communicate over a WebSocket to render a basic visualisation of a crane, and allow the crane to be controlled from the frontend

To run the visualiser:

1. Clone the repo
2. Open a terminal for the frontend `cd frontend/socket-nextjs` and run `npm install` then `npm run dev`
3. Open a terminal for the backend `cd backend` and run `uvicorn main:app --reload`

The frontend should now be running on `http://localhost:3000` and the backend on `http://localhost:8000`

Ensure that all the dependencies are installed.

The frontend is built using Next.js and the backend is built using FastAPI.

The frontend is a simple visualisation of a crane that can be controlled using the buttons on the page. The frontend communicates with the backend over a WebSocket connection.