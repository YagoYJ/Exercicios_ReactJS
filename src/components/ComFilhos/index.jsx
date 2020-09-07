import React from "react";

function ComFilhos(props) {
  return (
    <div>
      <h2>Com Filhos</h2>
      <div>{props.children}</div>
    </div>
  );
}

export default ComFilhos;
