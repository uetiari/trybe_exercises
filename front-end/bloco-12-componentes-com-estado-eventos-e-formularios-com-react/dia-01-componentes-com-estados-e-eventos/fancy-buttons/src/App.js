import React from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou, miserávi!')
}

function handleClick2() {
  console.log('Clicou!')
}

function handleClick3() {
  console.log('Clicou 3!')
}

class App extends React.Component {
  render(){
    return (
      <section className="buttons">
        <button onClick={handleClick}>Aperte aqui!</button>
        <button onClick={handleClick2}>Aperte aqui!</button>
        <button onClick={handleClick3}>Aperte aqui!</button>
      </section>
    );
  }
}

export default App;
