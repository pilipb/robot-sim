import { useEffect, useState } from "react";
import io from "socket.io-client";
import CraneVisualisation from "../../components/CraneVisualisation";
let socket;

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [craneParams, setCraneParams] = useState({
      origin: { x: 0, y: 0, z: 0 },
      column: {diameter: 0.1, height: 2},
      arm1: {length: 0.5, width: 0.1, height: 0.1},
      arm2: {length: 1, width: 0.1, height: 0.1},
      arm3: {length: 0.4, width: 0.05, height: 0.05},
      gripper: {length: 0.1, width: 0.02, height: 0.02},
      kinematics: {z:0,alpha:0, beta:0, gamma:0}

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCraneParams(prev => ({
      ...prev,
      [name]: parseFloat(value)
    }));
  };

  useEffect(() => {
    initialize();

    return () => {
      socket.disconnect();
    }
  }, []);

  async function initialize() {
    await fetch("/api/socket");
    socket = io();

    socket.on("receive-message", (data) => {
      setMessages((messages) => [...messages, data]);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    socket.emit("send-message", { name, message });
    setMessage("");
  }

  return (
    <div>
      <div className="container">
        <CraneVisualisation craneParams={craneParams} />
        <input
          type="number"
          name="column.height"
          value={craneParams.column.height}
          onChange={handleInputChange}
          placeholder="Column Height"
        />
        {/* Add other inputs as needed */}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <br />
        <button type="submit">Send</button>
      </form>
      <hr />

      <h2>Messages</h2>
      <ul>
        {messages.map((msg, i) => (
          <li key={i}>
            <strong>{msg.name}</strong> : {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
};
