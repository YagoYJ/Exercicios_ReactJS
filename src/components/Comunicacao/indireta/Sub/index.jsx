import React from "react";

export default function Sub(props) {
  return (
    <>
      <div>
        <button
          onClick={() => {
            props.onClicar(Math.random(), "Algo");
          }}
        >
          Alterar
        </button>
      </div>
    </>
  );
}
