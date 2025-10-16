import React from "react";
import Header from "../../components/Header/Header";
import Simulator from "../../components/Simulator/Simulator";

const Simulation: React.FC = () => {
  return (
    <>
      <Header links={[{ url: "/", displayName: "Home" }]} />
      <Simulator />
    </>
  );
};

export default Simulation;
