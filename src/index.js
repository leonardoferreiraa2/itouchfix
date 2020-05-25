import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import Signin from './pages/Signin'

export default function App() {
  return (
    <Signin />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#54d'
  },
  texto: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff'
  }
})
