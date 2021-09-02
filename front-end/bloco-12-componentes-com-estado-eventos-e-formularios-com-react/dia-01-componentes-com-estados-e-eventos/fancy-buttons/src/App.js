import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      clickNumbers: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = () => {
    this.setState((stateBefore, _props) => ({
      clickNumbers: stateBefore.clickNumbers + 1
    }))
  }
  
  render() {
    return <button onClick={ this.handleClick }>{ this.state.clickNumbers }</button>
  }
}

export default App;
