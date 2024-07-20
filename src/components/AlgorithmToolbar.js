import React from "react";
import "./../styles/toolbars/algorithm-toolbar.sass";

const AlgorithmToolbar = () => {
  return (
    <section className="algorithm-toolbar">
      <div className="algorithms clockwise">
        <button className="algo-btn">
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
        <button className="algo-btn">
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
