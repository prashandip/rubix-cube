import React from "react";
import "./../styles/cube/cubelet.sass";
import "./../styles/cube/color-piece.sass";

const Cubelet = () => {
  return (
    <div className="cubelet" id="c0">
      <div className="face front">
        <div className="color-piece">
          <span style={{ color: "white" }}>B</span>
        </div>
      </div>
      <div className="face back">
        <div className="color-piece">
          <span style={{ color: "white" }}>G</span>
        </div>
      </div>
      <div className="face left">
        <div className="color-piece">
          <span style={{ color: "darkslategray" }}>O</span>
        </div>
      </div>
      <div className="face right">
        <div className="color-piece">
          <span style={{ color: "darkslategray" }}>R</span>
        </div>
      </div>
      <div className="face top">
        <div className="color-piece">
          <span style={{ color: "darkslategray" }}>Y</span>
        </div>
      </div>
      <div className="face bottom">
        <div className="color-piece">
          <span style={{ color: "darkslategray" }}>W</span>
        </div>
      </div>
    </div>
  );
};

export default Cubelet;
