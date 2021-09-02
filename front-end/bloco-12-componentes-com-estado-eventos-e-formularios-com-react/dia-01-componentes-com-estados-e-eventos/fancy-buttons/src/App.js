import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log('Clicou, miserávi!')
  }
  
  render(){
    return (
      <section className="buttons">
        <button onClick={ this.handleClick }>Aperte aqui!</button>
      </section>
    );
  }
}

export default App;
