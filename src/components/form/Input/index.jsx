import React, { useState } from "react";

export default function Input() {
  const [nome, setNome] = useState("Yago");

  return (
    <>
      <h3>{nome}</h3>
      <input
        type="text"
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
      />
    </>
  );
}
