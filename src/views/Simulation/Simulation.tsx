import React from "react";
import Header from "../../components/Header/Header";

const Simulation: React.FC = () => {
  return (
    <>
      <Header links={[{ url: "/", displayName: "Home" }]} />
    </>
  );
};

export default Simulation;
