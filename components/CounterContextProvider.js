import React, { Component } from 'react'
import CounterContext from './CounterContext';

class CounterContextProvider extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = { 
      counter: 0
     };
  }

  increment() {
    let counter = this.state.counter;
    counter++;
    this.setState({ counter });
  }
  decrement() {
    let counter = this.state.counter;
    counter--;
    this.setState({ counter });
  }

  render() {
    return (
      <CounterContext.Provider value={{ counter: this.state.counter, increment: this.increment, decrement: this.decrement}}>
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

export default CounterContextProvider;