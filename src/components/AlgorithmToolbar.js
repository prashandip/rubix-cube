import React from "react";
import "./../styles/toolbars/algorithm-toolbar.sass";
import { useDispatch, useSelector } from "react-redux";
import {
  getNewRotationsF,
  getNewRotationsL,
  getNewRotationsR,
} from "../methods/rotation";
import {
  setOrientations,
  setPositions,
  setRotations,
} from "../store/cubeletSlice";
import {
  getNewPositionsF,
  getNewPositionsL,
  getNewPositionsR,
} from "../methods/position";
import {
  getNewOrientationsF,
  getNewOrientationsR,
} from "../methods/orientation";
import { rotateF, rotateR, rotateU } from "../methods/test";

const AlgorithmToolbar = () => {
  const dispatch = useDispatch();
  const positions = useSelector((state) => state.cubelet.positions);
  const rotations = useSelector((state) => state.cubelet.rotations);
  const orientations = useSelector((state) => state.cubelet.orientations);
  const performF = (isClockwise) => {
    // dispatch(
    //   setRotations(
    //     getNewRotationsF(positions, rotations, orientations, isClockwise)
    //   )
    // );
    // dispatch(
    //   setOrientations(getNewOrientationsF(positions, orientations, isClockwise))
    // );
    // dispatch(setPositions(getNewPositionsF(positions, isClockwise)));
    rotateF(rotations, isClockwise);
  };
  const performR = (isClockwise) => {
    dispatch(setRotations(getNewRotationsR(positions, rotations, isClockwise)));
    dispatch(setPositions(getNewPositionsR(positions, isClockwise)));
  };
  const performL = (isClockwise) => {
    dispatch(setRotations(getNewRotationsL(positions, rotations, isClockwise)));
    dispatch(setPositions(getNewPositionsL(positions, isClockwise)));
  };
  const performU = (isClockwise) => {
    rotateU(rotations, isClockwise);
  };
  return (
    <section className="algorithm-toolbar">
      <div className="algorithms clockwise">
        <button className="algo-btn" onClick={() => performF(true)}>
          <span>F</span>
        </button>
        <button className="algo-btn" onClick={() => performR(true)}>
          <span>R</span>
        </button>
        <button className="algo-btn" onClick={() => performL(true)}>
          <span>L</span>
        </button>
        <button className="algo-btn" onClick={() => performU(true)}>
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
        <button className="algo-btn" onClick={() => performR(false)}>
          <span>R'</span>
        </button>
        <button className="algo-btn" onClick={() => performL(false)}>
          <span>L'</span>
        </button>
        <button className="algo-btn" onClick={() => performU(false)}>
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
