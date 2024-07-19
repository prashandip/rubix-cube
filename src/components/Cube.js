import React from "react";
import Cubelet from "./Cubelet";
import { useSelector } from "react-redux";

const Cube = () => {
  const cubeRotateX = useSelector((state) => state.cube.cubeRotateX);
  const cubeRotateY = useSelector((state) => state.cube.cubeRotateY);
  return (
    <section
      className="cube"
      style={{
        transform: `rotateX(${cubeRotateX}deg) rotateY(${cubeRotateY}deg)`,
      }}
    >
      <Cubelet />
    </section>
  );
};

export default Cube;
