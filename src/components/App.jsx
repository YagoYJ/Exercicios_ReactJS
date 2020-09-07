import React from "react";

import Card from "./Card";
import Primeiro from "./Primeiro";
import ComParametro from "./ComParametro";
import Repeticao from "./Repeticao";
import Condicao from "./Condicional";
import Pai from "./Comunicacao/direta/Pai";
import Super from "./Comunicacao/indireta/Super";
import Input from "./form/Input";
import Contador from "./Contador";
import Mega from "./mega";

export default function App() {
  return (
    <div className="cards">
      <Card titulo="Primeiro Componente" color="#fa6900">
        <Primeiro />
      </Card>
      <Card titulo="Segundo Parametro" color="#e94c6f">
        <ComParametro
          titulo="Parametro titulo"
          subtitulo="Parametro sub titulo"
        />
      </Card>
      <Card titulo="Repetição" color="#fa6900">
        <Repeticao />
      </Card>
      <Card titulo="Condição v1" color="#fa6900">
        <Condicao numero={3} />
      </Card>
      <Card titulo="Condição v2" color="#fa6900">
        <Condicao numero={2} />
      </Card>
      <Card titulo="Comunicação direta" color="#fa6900">
        <Pai sobrenome="Shar"></Pai>
      </Card>
      <Card titulo="Comunicação Indireta" color="#fa6900">
        <Super></Super>
      </Card>
      <Card titulo="Input" color="#fa6900">
        <Input></Input>
      </Card>
      <Card titulo="Contador" color="#e94c6f">
        <Contador></Contador>
      </Card>
      <Card titulo="Mega" color="#e94c6f">
        <Mega quantidadeNumeros={8}></Mega>
      </Card>
    </div>
  );
}
