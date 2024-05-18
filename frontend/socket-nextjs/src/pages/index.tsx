import { useEffect, useState, FormEvent } from "react";
import io, { Socket } from "socket.io-client";

interface Message {
  name: string;
  message: string;
}

let socket: Socket;

export default function Home() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    initialize();

    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  async function initialize() {
    await fetch("/api/socket");
    socket = io();

    socket.on("receive-message", (data: Message) => {
      setMessages((messages) => [...messages, data]);
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (socket) {
      socket.emit("send-message", { name, message });
    }
    setMessage("");
  }

  return (
    <div>
      <h1>NEXT SOCKET.IO</h1>
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
        {
          messages.map((msg, i) => (
            <li key={i}>
              <strong>{msg.name}</strong> : {msg.message}
            </li>
          ))
        }
      </ul>
    </div>
  );
};
