import React from 'react';
import logo from './logo.svg';
import './App.css';

// componente funcional
// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

// componente de classe
const Task = (value) => {
  return (
    <li key={value}>{value}</li>
    );
  }
  
  const tarefas = ['acordar cedo', 'tomar café', 'banho e higiene', 'trabalho', 'aula na trybe', 'reforço de conteúdo' ]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
        </header>
      </div>
    );
  }
}

export default App;
