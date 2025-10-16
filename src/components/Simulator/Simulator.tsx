import React, { useState } from "react";

const Simulator: React.FC = () => {
  // TODO: criar os elementos da página de simulação
  const [radius, setRadius] = useState(696_340);
  const [mass, setMass] = useState(1.989e30);
  let volume: number = (4 / 3) * Math.PI * Math.pow(radius, 3);
  let density: number = mass / volume / 1e12; // in Tt (tera-tons)
  let schwarzschildR: number = 1.4852320538e-27 * mass;
  let isBlackHole: boolean = radius < schwarzschildR;

  const updateState = (
    target: HTMLInputElement,
    setState: (arg0: number) => void
  ): void => {
    const value: number = Number(target.value);
    setState(value);
  };

  const formatted = (n: number): string => {
    return n.toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section id="simulator">
      <div id="simulator-input-area">
        <label htmlFor="mass-input">Massa: </label>
        <input
          type="range"
          id="mass-input"
          value={mass}
          min={1e30}
          max={1e33}
          step={1e29}
          onChange={(t) => updateState(t.target, setMass)}
        />

        <label htmlFor="radius-input">Raio: </label>
        <input
          type="range"
          id="radius-input"
          value={radius}
          min={4e4}
          max={1e6}
          step={1e3}
          onChange={(t) => updateState(t.target, setRadius)}
        />
      </div>

      <div id="info-display-area">
        <p>Raio: {formatted(radius)} km</p>
        <p>Massa: {formatted(mass / 1e27)} Zt</p>
        <p>
          Densidade: {formatted(density)} Tt/km<sup>3</sup>
        </p>
      </div>

      <div id="simulation-area">
        <svg width="100%" height="100%">
          <circle
            cx="200"
            cy="200"
            r={radius / Math.pow(10, 3.8)}
            fill={isBlackHole ? "black" : "yellow"}
            stroke={isBlackHole ? "orange" : "none"}
            strokeWidth={1}
            strokeOpacity={0.6}
          />
        </svg>
      </div>
    </section>
  );
};

export default Simulator;
