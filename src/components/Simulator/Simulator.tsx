import React from "react";
import "./Simulator.css";

export type SimulatorProps = {
  radius: number;
  mass: number;
};

const Simulator: React.FC<SimulatorProps> = ({ radius, mass }) => {
  let schwarzschildR: number = 1.4852320538e-27 * mass;
  let isBlackHole: boolean = radius < schwarzschildR;

  return (
    <section id="simulator">
      <h3 style={{ fontSize: "2rem", marginTop: 0 }}>
        Classificação: {isBlackHole ? "Buraco Negro" : "Estrela"}
      </h3>

      <div id="simulation-area">
        <svg>
          <circle
            cx="50%"
            cy="50%"
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
