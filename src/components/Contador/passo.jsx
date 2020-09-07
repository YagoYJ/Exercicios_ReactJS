import React from "react";

export default function Passo(props) {
  return (
    <>
      <h4>Passo: {props.passo}</h4>

      <input
        type="number"
        placeholder="Valor do passo"
        value={props.passo}
        onChange={(e) => props.change(+e.target.value)}
      />
    </>
  );
}
