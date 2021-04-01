import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodoAction, addTodoAction2 } from './store/actions';
import { Forward, Reverse } from './store/actions2';
import counterActions from './store/counter/counter-action';

class App extends Component {



  render() {
    const { todo, One, Two, some, Forward, Reverse, counter, Increment, Decrement } = this.props;
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>{todo}</p>
        <button type='button' onClick={One}>One</button>
        <button type='button' onClick={Two}>Two</button>
        <p>{some}</p>
        <button type='button' onClick={() => Reverse(1)}>Revers</button>
        <button type='button' onClick={() => Forward(1)}>Forward</button>
        <h2>{counter}</h2>
        <button type='button' onClick={() => Decrement(1)}>Revers</button>
        <button type='button' onClick={() => Increment(1)}>Forward</button>
      </div>
    );
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todo,
    some: state.some,
    counter: state.counter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    One: () => dispatch(addTodoAction),
    Two: () => dispatch(addTodoAction2),
    Forward: num => dispatch(Forward(num)),
    Reverse: num => dispatch(Reverse(num)),
    Increment: val => dispatch(counterActions.Increment(val)),
    Decrement: val => dispatch(counterActions.Decrement(val)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
