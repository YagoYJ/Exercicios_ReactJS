import React, { Component } from "react";
import Display from "./display";
import Passo from "./passo";
import Button from "./buttons";

export default class Contador extends Component {
  state = {
    passo: this.props.passo || 1,
    valor: this.props.valor || 0,
  };

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo,
    });
  };

  mudarPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <Display valor={this.state.valor} />
        <Passo passo={this.state.passo} change={this.mudarPasso} />
        <div>
          <Button label="+ Aumentar" funcao={this.inc} />
          <Button label="- Diminuir" funcao={this.dec} />
        </div>
      </div>
    );
  }
}
