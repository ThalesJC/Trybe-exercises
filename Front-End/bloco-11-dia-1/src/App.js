import React from "react";

const handleClick =() => {
  console.log('Clicou no botão!')
}

const otherHandleClick = () => {
  console.log('clicou outro botao')
}

const otherHandleClickAgain = () => {
  console.log('clicou o outro outro botao')
}

class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={handleClick}>Meu botão</button>
        <button onClick={otherHandleClick}>Meu botão</button>
        <button onClick={otherHandleClickAgain}>Meu botão</button>
      </>
      );
  }
}

export default App;
