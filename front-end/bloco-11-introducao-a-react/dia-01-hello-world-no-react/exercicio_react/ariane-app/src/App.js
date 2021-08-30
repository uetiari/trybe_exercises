import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  ); 
}

const toDoList = ['Acordar', 'Escovar dente', 'Pentear cabelo', 'Fazer café'];

class App extends React.Component {
  render() {
    return (
    <ul>
      { toDoList.map( todo => Task(todo)) }
    </ul> );
  }
}

export default App;
