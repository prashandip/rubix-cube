import React from "react";
import Cubelet from "./Cubelet";
import { useSelector } from "react-redux";

const Cube = () => {
  const cubeRotateX = useSelector((state) => state.cube.cubeRotateX);
  const cubeRotateY = useSelector((state) => state.cube.cubeRotateY);
  const ids = [];
  for (let i = 0; i < 27; i++) ids.push("c" + i);
  return (
    <section
      className="cube"
      style={{
        transform: `rotateX(${cubeRotateX}deg) rotateY(${cubeRotateY}deg)`,
      }}
    >
      {ids.map((id, i) => (
        <Cubelet key={i} id={id} />
      ))}
    </section>
  );
};

export default Cube;
