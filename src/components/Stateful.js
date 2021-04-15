import React from "react";

// Componente stateful (ou de classe)

class Stateful extends React.Component {
  // State é o estado atual da aplicação
  // Não precisa do this para definir atributos fora de métodos (o constructor é um método)
  // O state obrigatoriamente precisa ser um objeto literal
  state = {
    count: 0,
  };

  handleIncrement = () => {
    console.log(this.state);
    // this.state.count++; // Isso viola as regras do React, nunca atualizar o state dessa forma
    // O setState sempre recebe um objeto literal como parâmetro. Esse objeto deve conter quais propriedades do state queremos atualizar e com qual valor

    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      // this.state.count--; // Isso viola as regras do React, nunca atualizar o state dessa forma
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleDecrement}>
          -
        </button>
        <h1>{this.state.count}</h1>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          +
        </button>
      </div>
    );
  }
}

export default Stateful;
