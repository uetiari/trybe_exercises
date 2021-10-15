import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
} 

const toDo = [ 'passear com dog', 'lavar carro', 'fazer almoço', 'fazer compras' ]

class App extends React.Component {
  render() {
    return (
      <ul>{ toDo.map(( item => Task(item) )) }</ul>
    );
  }
}

export default App;
