import React from "react";
import "./../styles/cube/cubelet.sass";
import "./../styles/cube/color-piece.sass";

const Cubelet = () => {
  return (
    <div
      className="cubelet"
      id="c0"
      style={{ transform: `rotateX(-10deg) rotateY(-10deg)` }}
    >
      <div className="face front">
        <div className="color-piece">F</div>
      </div>
      <div className="face back">
        <div className="color-piece">B</div>
      </div>
      <div className="face left">
        <div className="color-piece">L</div>
      </div>
      <div className="face right">
        <div className="color-piece">R</div>
      </div>
      <div className="face top">
        <div className="color-piece">T</div>
      </div>
      <div className="face bottom">
        <div className="color-piece">B</div>
      </div>
    </div>
  );
};

export default Cubelet;
