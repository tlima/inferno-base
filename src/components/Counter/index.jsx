/* eslint-disable react/prefer-stateless-function */
import { Component } from 'inferno-component';

class Counter extends Component {
  render() {
    const { store } = this.context;
    const state = store.getState();

    return (
      <div>
        <div>Home counter: {state.counters.home}</div>
        <div>One counter: {state.counters.one}</div>
        <div>Two counter: {state.counters.two}</div>
      </div>
    );
  }
}

export default Counter;
