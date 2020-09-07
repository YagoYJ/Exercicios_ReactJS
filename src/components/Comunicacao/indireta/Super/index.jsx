import React, { useState } from "react";
import Sub from "../Sub";

export default function Super(props) {
  const [num, setNum] = useState(0);
  const [texto, setTexto] = useState("Valor");

  function quandoClicar(valor, texto) {
    setNum(valor);
    setTexto(texto);
  }
  return (
    <>
      <h4>
        {texto}: {num}
      </h4>
      <Sub onClicar={quandoClicar}></Sub>
    </>
  );
}
