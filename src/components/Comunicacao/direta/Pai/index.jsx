import React from "react";
import Filho from "../Filho";

export default function Pai(props) {
  return (
    <>
      <Filho {...props}>João</Filho>
      <Filho sobrenome="Sousa">José</Filho>
      <Filho sobrenome="Sousa">Maria</Filho>
    </>
  );
}
