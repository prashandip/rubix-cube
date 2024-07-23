import React from "react";
import Cubelet from "./Cubelet";
import { useSelector } from "react-redux";

const Cube = () => {
  const cubeRotateX = useSelector((state) => state.cube.cubeRotateX);
  const cubeRotateY = useSelector((state) => state.cube.cubeRotateY);
  const rotations = useSelector((state) => state.cubelet.rotations);
  return (
    <section
      className="cube"
      style={{
        transform: `rotateX(${cubeRotateX}deg) rotateY(${cubeRotateY}deg)`,
      }}
    >
      {rotations.map((rotation) => (
        <Cubelet
          key={rotation.id}
          id={"c" + rotation.id}
          styles={{
            transform: `rotateX(${rotation.rotation.x}deg) rotateY(${rotation.rotation.y}deg) rotateZ(${rotation.rotation.z}deg)`,
          }}
        />
      ))}
    </section>
  );
};

export default Cube;
