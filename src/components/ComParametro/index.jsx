import React from "react";

export default (props) => {
  // props é somente leitura
  // props.titulo = "Outro titulo";

  return (
    <>
      <h1>{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
    </>
  );
};
