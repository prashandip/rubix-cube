import React from "react";
import "./../styles/toolbars/algorithm-toolbar.sass";
import { useDispatch, useSelector } from "react-redux";
import { getNewRotationsF } from "../methods/rotation";
import { setRotations } from "../store/cubeletSlice";

const AlgorithmToolbar = () => {
  const dispatch = useDispatch();
  const positions = useSelector((state) => state.cubelet.positions);
  const rotations = useSelector((state) => state.cubelet.rotations);
  const orientations = useSelector((state) => state.cubelet.orientations);
  const performF = (isClockwise) => {
    dispatch(
      setRotations(
        getNewRotationsF(positions, rotations, orientations, isClockwise)
      )
    );
  };
  return (
    <section className="algorithm-toolbar">
      <div className="algorithms clockwise">
        <button className="algo-btn" onClick={() => performF(true)}>
          <span>F</span>
        </button>
        <button className="algo-btn">
          <span>R</span>
        </button>
        <button className="algo-btn">
          <span>L</span>
        </button>
        <button className="algo-btn">
          <span>U</span>
        </button>
        <button className="algo-btn">
          <span>D</span>
        </button>
      </div>
      <div className="algorithms anti-clockwise">
        <button className="algo-btn" onClick={() => performF(false)}>
          <span>F'</span>
        </button>
        <button className="algo-btn">
          <span>R'</span>
        </button>
        <button className="algo-btn">
          <span>L'</span>
        </button>
        <button className="algo-btn">
          <span>U'</span>
        </button>
        <button className="algo-btn">
          <span>D'</span>
        </button>
      </div>
    </section>
  );
};

export default AlgorithmToolbar;
