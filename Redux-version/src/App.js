import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from './store/Reducer/counter';

class App extends Component {    
  render() {
    return (
      <div style={{ "text-align": "center"}}>
        <h2>React Version</h2>
        <h1>{this.props.number}</h1>
        <button onClick={this.props.handleIncrement}>+</button>
        <button onClick={this.props.handleDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps=(state) => ({
  number: state.counter.number
});

const mapDispatchToProps = (dispatch) => ({
  handleIncrement: () => dispatch(actionCreator.increment()),
  handleDecrement: () => dispatch(actionCreator.decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);