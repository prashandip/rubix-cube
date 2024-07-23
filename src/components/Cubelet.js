import React from "react";
import "./../styles/cube/cubelet.sass";
import "./../styles/cube/color-piece.sass";

const Cubelet = (props) => {
  return (
    <div className="cubelet" id={props.id}>
      <div className="face blue">
        <div className="color-piece">
          {/* <span style={{ color: "white" }}>B</span> */}
        </div>
      </div>
      <div className="face green">
        <div className="color-piece">
          {/* <span style={{ color: "white" }}>G</span> */}
        </div>
      </div>
      <div className="face orange">
        <div className="color-piece">
          {/* <span style={{ color: "darkslategray" }}>O</span> */}
        </div>
      </div>
      <div className="face red">
        <div className="color-piece">
          {/* <span style={{ color: "darkslategray" }}>R</span> */}
        </div>
      </div>
      <div className="face yellow">
        <div className="color-piece">
          {/* <span style={{ color: "darkslategray" }}>Y</span> */}
        </div>
      </div>
      <div className="face white">
        <div className="color-piece">
          {/* <span style={{ color: "darkslategray" }}>W</span> */}
        </div>
      </div>
    </div>
  );
};

export default Cubelet;
