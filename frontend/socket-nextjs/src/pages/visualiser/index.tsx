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
  const [position, setPosition] = useState({ z:0, alpha:0, beta:0, gamma:0, g:0, x: 0, y: 0 });

  const updatePosition = async (newParams: CraneParams) => {
    // console.log("Sending to backend:", JSON.stringify(newParams));
    const response = await fetch('http://localhost:8000/api/calculate-crane', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newParams),
    });
    const data = await response.json();
    // console.log("Backend response:", data); // Check what the backend returns
    if (data.position) {
      setPosition({ ...data.position, x: data.position.x || 0, y: data.position.y || 0 });
    } else {
      // Handle the case where data.position is null or undefined
      setPosition({ z: 0, alpha: 0, beta: 0, gamma: 0, g: 0, x: 0, y: 0 });
    }
  };

  const debouncedUpdatePosition = debounce(updatePosition, 300); // 300 ms

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [key, subKey] = name.split('.');
    const newParams = {
      ...craneParams,
      [key]: {
        ...craneParams[key],
        [subKey]: parseFloat(value)
      }
    };
    setCraneParams(newParams);
    debouncedUpdatePosition(newParams);
  };

  return (
    <div className="full-page">
      <div className="input-container">
        <CraneVisualisation craneParams={craneParams} position={position} />

        {/* add a title for inputs */}
        <h2>Crane Parameters</h2>

        <label style={{ color: 'white' }}>Lift Height</label>
        <div className="sliders">
          <input
            type="range"
            name="kinematics.z"
            value={craneParams.kinematics.z}
            onChange={handleInputChange}
            placeholder="Lift Height"
            min="0" max="2" step="0.05"
            style={{ background: 'white' }}
          />
          <label style={{ color: 'white' }}>Swing Angle</label>
          <input
            type="range"
            name="kinematics.alpha"
            value={craneParams.kinematics.alpha}
            onChange={handleInputChange}
            placeholder="Swing Angle"
            min="0" max="6.2" step="0.1"
            style={{ background: 'blue' }}
          />
          <label style={{ color: 'white' }}>Elbow Angle</label>
          <input
            type="range"
            name="kinematics.beta"
            value={craneParams.kinematics.beta}
            onChange={handleInputChange}
            placeholder="Elbow Angle"
            min="0" max="6.2" step="0.1"
            style={{ background: 'white' }}
          />
          <label style={{ color: 'white' }}>Wrist Angle</label>
          <input
            type="range"
            name="kinematics.gamma"
            value={craneParams.kinematics.gamma}
            onChange={handleInputChange}
            placeholder="Wrist Angle"
            min="0" max="6.2" step="0.1"
            style={{ background: 'white' }}
          />
          <label style={{ color: 'white' }}>Gripper Width</label>
          <input
            type="range"
            name="kinematics.g"
            value={craneParams.kinematics.g}
            onChange={handleInputChange}
            placeholder="Gripper Width"
            min="0" max="0.2" step="0.01"
            style={{ background: 'white' }}
          />
          </div>
      </div>
    </div>
  );
};

