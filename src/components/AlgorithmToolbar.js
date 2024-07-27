import React from "react";
import "./../styles/toolbars/algorithm-toolbar.sass";
import { useDispatch, useSelector } from "react-redux";
import { getNewRotations } from "../methods/rotation";
import { setPositions, setRotations } from "../store/cubeletSlice";
import { getNewPositions } from "../methods/position";

const AlgorithmToolbar = () => {
  const dispatch = useDispatch();
  const positions = useSelector((state) => state.cubelet.positions);
  const rotations = useSelector((state) => state.cubelet.rotations);
  // const performF = (isClockwise) => {
  //   dispatch(setRotations(getNewRotationsF(positions, rotations, isClockwise)));
  //   dispatch(setPositions(getNewPositionsF(positions, isClockwise)));
  // };
  // const performR = (isClockwise) => {
  //   dispatch(setRotations(getNewRotationsR(positions, rotations, isClockwise)));
  //   dispatch(setPositions(getNewPositionsR(positions, isClockwise)));
  // };
  // const performL = (isClockwise) => {
  //   dispatch(setRotations(getNewRotationsL(positions, rotations, isClockwise)));
  //   dispatch(setPositions(getNewPositionsL(positions, isClockwise)));
  // };
  // const performU = (isClockwise) => {
  //   dispatch(setRotations(getNewRotationsU(positions, rotations, isClockwise)));
  //   dispatch(setPositions(getNewPositionsU(positions, isClockwise)));
  // };
  // const performD = (isClockwise) => {
  //   dispatch(setRotations(getNewRotationsD(positions, rotations, isClockwise)));
  //   dispatch(setPositions(getNewPositionsD(positions, isClockwise)));
  // };
  const performAlgorithm = (algorithmName, isClockwise) => {
    dispatch(
      setRotations(
        getNewRotations(algorithmName, positions, rotations, isClockwise)
      )
    );
    dispatch(
      setPositions(getNewPositions(algorithmName, positions, isClockwise))
    );
  };
  return (
    <section className="algorithm-toolbar">
      <div className="algorithms clockwise">
        <button
          className="algo-btn"
          onClick={() => performAlgorithm("F", true)}
        >
          <span>F</span>
        </button>
        <button
          className="algo-btn"
          onClick={() => performAlgorithm("R", true)}
        >
          <span>R</span>
        </button>
        <button
          className="algo-btn"
          onClick={() => performAlgorithm("L", true)}
        >
          <span>L</span>
        </button>
        <button
          className="algo-btn"
          onClick={() => performAlgorithm("U", true)}
        >
          <span>U</span>
        </button>
        <button
          className="algo-btn"
          onClick={() => performAlgorithm("D", true)}
        >
          <span>D</span>
        </button>
      </div>
      <div className="algorithms anti-clockwise">
        <button
          className="algo-btn"
          onClick={() => performAlgorithm("F", false)}
        >
          <span>F'</span>
        </button>
        <button
          className="algo-btn"
          onClick={() => performAlgorithm("R", false)}
        >
          <span>R'</span>
        </button>
        <button
          className="algo-btn"
          onClick={() => performAlgorithm("L", false)}
        >
          <span>L'</span>
        </button>
        <button
          className="algo-btn"
          onClick={() => performAlgorithm("U", false)}
        >
          <span>U'</span>
        </button>
        <button
          className="algo-btn"
          onClick={() => performAlgorithm("D", false)}
        >
          <span>D'</span>
        </button>
      </div>
    </section>
  );
};

export default AlgorithmToolbar;
