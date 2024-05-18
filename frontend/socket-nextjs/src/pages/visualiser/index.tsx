import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import io, { Socket } from "socket.io-client";
import CraneVisualisation from "../../components/CraneVisualisation";

interface CraneParams {
  origin: { x: number; y: number; z: number };
  column: { diameter: number; height: number };
  arm1: { length: number; width: number; height: number };
  arm2: { length: number; width: number; height: number };
  arm3: { length: number; width: number; height: number };
  gripper: { length: number; width: number; height: number };
  kinematics: { z: number; alpha: number; beta: number; gamma: number };
}

let socket: Socket;

export default function Home() {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [craneParams, setCraneParams] = useState<CraneParams>({
    origin: { x: 0, y: 0, z: 0 },
    column: { diameter: 0.1, height: 2 },
    arm1: { length: 0.5, width: 0.1, height: 0.1 },
    arm2: { length: 1, width: 0.1, height: 0.1 },
    arm3: { length: 0.4, width: 0.05, height: 0.05 },
    gripper: { length: 0.1, width: 0.02, height: 0.02 },
    kinematics: { z: 0, alpha: 0, beta: 0, gamma: 0 }
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [section, key] = name.split('.');
    setCraneParams(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: parseFloat(value)
      }
    }));
  };

  useEffect(() => {
    initialize();

    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  async function initialize() {
    await fetch("/api/socket");
    socket = io();

    socket.on("receive-message", (data: string) => {
      setMessages((messages) => [...messages, data]);
    });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    socket.emit("send-message", { name, message });
    setMessage("");
  }

  return (
    <div>
      <div className="input-container">
        <CraneVisualisation craneParams={craneParams} />
        <input
          type="number"
          name="column.height"
          value={craneParams.column.height}
          onChange={handleInputChange}
          placeholder="Column Height"
        />
        <input
          type="number"
          name="arm1.length"
          value={craneParams.arm1.length}
          onChange={handleInputChange}
          placeholder="Arm 1 Length"
        />
        <input
          type="number"
          name="arm2.length"
          value={craneParams.arm2.length}
          onChange={handleInputChange}
          placeholder="Arm 2 Length"
        />
        <input
          type="number"
          name="arm3.length"
          value={craneParams.arm3.length}
          onChange={handleInputChange}
          placeholder="Arm 3 Length"
        />
        <input
          type="number"
          name="gripper.length"
          value={craneParams.gripper.length}
          onChange={handleInputChange}
          placeholder="Gripper Length"
        />
        <input
          type="number"
          name="kinematics.z"
          value={craneParams.kinematics.z}
          onChange={handleInputChange}
          placeholder="Kinematics Z"
        />
        <input
          type="number"
          name="kinematics.alpha"
          value={craneParams.kinematics.alpha}
          onChange={handleInputChange}
          placeholder="Kinematics Alpha"
        />
        <input
          type="number"
          name="kinematics.beta"
          value={craneParams.kinematics.beta}
          onChange={handleInputChange}
          placeholder="Kinematics Beta"
        />
        <input
          type="number"
          name="kinematics.gamma"
          value={craneParams.kinematics.gamma}
          onChange={handleInputChange}
          placeholder="Kinematics Gamma"
        />

      </div>
      
      <hr />

      <h2>Dimensions</h2>
      <ul>
        <li>Column Height: {craneParams.column.height}</li>
        <li>Arm 1 Length: {craneParams.arm1.length}</li>
        <li>Arm 2 Length: {craneParams.arm2.length}</li>
        <li>Arm 3 Length: {craneParams.arm3.length}</li>
        <li>Gripper Length: {craneParams.gripper.length}</li>
        <li>Kinematics Z: {craneParams.kinematics.z}</li>
        <li>Kinematics Alpha: {craneParams.kinematics.alpha}</li>
        <li>Kinematics Beta: {craneParams.kinematics.beta}</li>
        <li>Kinematics Gamma: {craneParams.kinematics.gamma}</li>
      </ul>
    </div>
  );
};
