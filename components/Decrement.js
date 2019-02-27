import React, { Component } from 'react'
import { Button } from 'react-native'

const Decrement = ({ action }) => {
  return <Button title='Decrement' onPress={action}>Decrement</Button>
}

export default Decrement;