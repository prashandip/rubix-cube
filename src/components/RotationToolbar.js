import React from "react";
import "./../styles/toolbars/rotation-toolbar.sass";
import { setCubeRotateX, setCubeRotateY } from "../store/cubeSlice";
import ArrowIcon from "../icons/ArrowIcon";
import { useDispatch, useSelector } from "react-redux";

const RotationToolbar = () => {
  const dispatch = useDispatch();
  const cubeRotateX = useSelector((state) => state.cube.cubeRotateX);
  const cubeRotateY = useSelector((state) => state.cube.cubeRotateY);
  return (
    <section className="rotation-toolbar">
      <button
        className="arrow up"
        onClick={() => dispatch(setCubeRotateX(cubeRotateX + 10))}
      >
        <ArrowIcon />
      </button>
      <button
        className="arrow down"
        onClick={() => dispatch(setCubeRotateX(cubeRotateX - 10))}
      >
        <ArrowIcon />
      </button>
      <button
        className="arrow left"
        onClick={() => dispatch(setCubeRotateY(cubeRotateY - 10))}
      >
        <ArrowIcon />
      </button>
      <button
        className="arrow right"
        onClick={() => dispatch(setCubeRotateY(cubeRotateY + 10))}
      >
        <ArrowIcon />
      </button>
    </section>
  );
};

export default RotationToolbar;
