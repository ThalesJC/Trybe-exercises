import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

  // entender melhor essa logica
  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
      </>
      );
  }
}

export default App;
