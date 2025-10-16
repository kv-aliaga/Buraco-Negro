import React from "react";

export type SimulatorProps = {
  radius: number;
  mass: number;
};

const Simulator: React.FC<SimulatorProps> = ({ radius, mass }) => {
  let schwarzschildR: number = 1.4852320538e-27 * mass;
  let isBlackHole: boolean = radius < schwarzschildR;

  return (
    <section id="simulator">
      <h2>Classificação:</h2>
      <p>{isBlackHole ? "Buraco Negro" : "Estrela"}</p>

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
