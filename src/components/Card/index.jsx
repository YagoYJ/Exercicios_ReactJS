import React from "react";

import "./styles.css";

export default (props) => (
  <div className="card" style={{ borderColor: props.color || "#000000" }}>
    <div className="conteudo">{props.children}</div>
    <div
      className="footer"
      style={{ backgroundColor: props.color || "#000000" }}
    >
      {props.titulo}
    </div>
  </div>
);
