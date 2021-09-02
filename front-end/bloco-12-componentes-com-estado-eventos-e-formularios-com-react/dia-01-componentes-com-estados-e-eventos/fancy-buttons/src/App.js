import React from 'react'; // importa o React
import './App.css'; // importa o estilo

class App extends React.Component { // tranforma a função em uma classe
  constructor() { // chama constructor para colocar as coisas que irão compor o App
    super() // sobreescreve o padrão do React e não perder características do Pai
    this.state = { // define um estado padrão
      clickNumbers: 0 // começa com zero clicks
    }
    this.handleClick = this.handleClick.bind(this); // bind vai fazer com que o .this tenha o mesmo valor do .this da classe
  }
  
  handleClick = () => {
    this.setState((stateBefore, _props) => ({ // primeiro valor é estado anterior, e segundo são as props que com "_" não é necessário no momento
      clickNumbers: stateBefore.clickNumbers + 1
    })) // chamando a callback no setStage dá pra ver a atualização dos clickNumbers
  }
  // caso não queria usar estado anterior pode ser passado um obj
  
  render() {
    return <button onClick={ this.handleClick }>{ this.state.clickNumbers }</button>
  }
}

export default App;
