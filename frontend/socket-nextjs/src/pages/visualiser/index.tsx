import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import io, { Socket } from "socket.io-client";
import CraneVisualisation from "../../components/CraneVisualisation";
import { debounce } from 'lodash';

interface CraneParams {
  kinematics: { z: number; alpha: number; beta: number; gamma: number, g:0 };
}

let socket: Socket;

export default function Home() {
  const [craneParams, setCraneParams] = useState<CraneParams>({
    kinematics: { z: 0, alpha: 0, beta: 0, gamma: 0 , g: 0}
  });
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  const updatePosition = async (newParams: CraneParams) => {
    const response = await fetch('http://localhost:8000/api/calculate-crane', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newParams),
    });
    const data = await response.json();
    setPosition(data.position); // Assuming the backend returns an object with a 'position' key
  };

  const debouncedUpdatePosition = debounce(updatePosition, 300); // 300 ms

  const handleInputChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newParams = {
      ...craneParams,
      [name]: parseFloat(value)
    };
    setCraneParams(newParams);
    debouncedUpdatePosition(newParams);
  };

  return (
    <div>
      <div className="input-container">
        <CraneVisualisation craneParams={craneParams} position={position} />
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
        <input
          type="number"
          name="kinematics.g"
          value={craneParams.kinematics.g}
          onChange={handleInputChange}
            placeholder="Kinematics G"
        />
      </div>
    </div>
  );
};

