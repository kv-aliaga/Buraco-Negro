import React from "react";
import Header from "../../components/Header/Header";
import Simulator from "../../components/Simulator/Simulator";

const SimulationView: React.FC = () => {
  return (
    <>
      <Header links={[{ url: "/", displayName: "Home" }]} />
      <Simulator />
    </>
  );
};

export default SimulationView;
