import React from "react";
import Header from "../../components/Header/Header";

const SimulationView: React.FC = () => {
  return (
    <>
      <Header links={[{ url: "/", displayName: "Home" }]} />
    </>
  );
};

export default SimulationView;
