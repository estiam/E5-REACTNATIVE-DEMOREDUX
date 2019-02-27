import React, { Component } from 'react'
import { Button, Text, View } from 'react-native';
import Increment from './Increment';
import Decrement from './Decrement';
import CounterContext from './CounterContext';

class Demo extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log("rendering", this.props.counter);
    return (
      <CounterContext.Consumer>
        {(context) => {
          return (<View>
            <Text>{context.counter}</Text>
            <Increment action={context.increment} />
            <Decrement action={context.decrement} />
          </View>)
        }}
      </CounterContext.Consumer>
    );
  }
}



export default Demo;