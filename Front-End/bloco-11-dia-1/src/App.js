import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('Clicou no botão!')
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick}>Meu botão</button>
      </>
      );
  }
}

export default App;
