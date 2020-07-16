import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    }
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleIncrement(){
    this.setState({ number: this.state.number + 1})
  }

  handleDecrement(){
    this.setState({ number: this.state.number - 1})
  }
  
  render() {
    const { number } = this.state;
    const { handleIncrement, handleDecrement } = this;
    return (
      <div style={{ "text-align": "center"}}>
        <h2>React Version</h2>
        <h1>{number}</h1>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    );
  }
}

export default App;