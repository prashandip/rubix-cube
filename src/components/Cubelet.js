import React from "react";
import "./../styles/cube/cubelet.sass";
import "./../styles/cube/color-piece.sass";

const Cubelet = (props) => {
  return (
    <div className="cubelet" id={props.id} style={props.styles}>
      <div className="face blue">
        <div className="color-piece">
          <span style={{ color: "white" }}>{props.id}B</span>
        </div>
      </div>
      <div className="face green">
        <div className="color-piece">
          <span style={{ color: "white" }}>{props.id}G</span>
        </div>
      </div>
      <div className="face orange">
        <div className="color-piece">
          <span style={{ color: "darkslategray" }}>{props.id}O</span>
        </div>
      </div>
      <div className="face red">
        <div className="color-piece">
          <span style={{ color: "darkslategray" }}>{props.id}R</span>
        </div>
      </div>
      <div className="face yellow">
        <div className="color-piece">
          <span style={{ color: "darkslategray" }}>{props.id}Y</span>
        </div>
      </div>
      <div className="face white">
        <div className="color-piece">
          <span style={{ color: "darkslategray" }}>{props.id}W</span>
        </div>
      </div>
    </div>
  );
};

export default Cubelet;
