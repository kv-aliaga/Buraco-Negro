import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Simulator from "../../components/Simulator/Simulator";

const Simulation: React.FC = () => {
  const [radius, setRadius] = useState(696_340);
  const [mass, setMass] = useState(1.989e30);
  let volume: number = (4 / 3) * Math.PI * Math.pow(radius, 3);
  let density: number = mass / volume / 1e12; // in Tt (tera-tons)

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
    <>
      <Header links={[{ url: "/", displayName: "Home" }]} />
      <Simulator radius={radius} mass={mass} />

      <section id="controller-area">
        <div>
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
          <span> = {formatted(mass / 1e27)} Zt</span>
        </div>

        <div>
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
          <span> = {formatted(radius)} km</span>
        </div>

        <p>
          Densidade: {formatted(density)} Tt/km<sup>3</sup>
        </p>
      </section>

      <section id="explanation-area">
        <h3>Explicação</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus commodi ducimus nemo nesciunt reprehenderit nulla a
          fuga doloremque eligendi adipisci recusandae modi dolorem, accusantium
          itaque ipsam corporis animi dicta suscipit? Corporis veritatis
          suscipit, cumque iure quaerat ex, dolorum placeat dolore quis ullam
          quo. Aliquam praesentium, facere assumenda voluptatum sed, debitis
          aperiam similique rem sapiente fuga voluptatibus excepturi maxime,
          eveniet illo?
        </p>
      </section>
    </>
  );
};

export default Simulation;
