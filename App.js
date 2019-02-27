import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Demo from './components/Demo';
import CounterContextProvider from './components/CounterContextProvider';

export default class App extends React.Component {
  render() {
    return (
      <CounterContextProvider>
        <View style={styles.container}>
          <Demo />
          <Demo />
        </View>
      </CounterContextProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
