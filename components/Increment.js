import React, { Component } from 'react'
import { Button } from 'react-native'

const Increment = ({ action }) => {
  return <Button title='Increment' onPress={action}>Increment</Button>
}

export default Increment;