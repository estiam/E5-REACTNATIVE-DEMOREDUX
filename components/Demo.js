import React, { Component } from 'react'
import {Button, Text, View} from 'react-native';
import Increment from './Increment';
import Decrement from './Decrement';
import { incrementCounter, decrementCounter } from '../redux/counter/actions';
import { connect } from 'react-redux';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = {
      counter: 0,
    }
  }

  increment() {
    let counter = this.state.counter;
    counter++;
    console.log("called");
    this.setState({ counter: counter});
  }
  
  decrement() {
    let counter = this.state.counter;
    counter--;
    console.log("called");
    this.setState({ counter: counter});
  }
  render() {
    console.log("rendering", this.props.counter);
    return (
      <View>
        <Text>{this.props.counter}</Text>
        <Increment action={this.props.increment}/>
        <Decrement action={this.props.decrement}/>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    increment: () => {
      dispatch(incrementCounter())
    },
    decrement: () => {
      dispatch(decrementCounter())
    }
});

const mapStateToProps = state => {
  return { counter: state.counter }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);