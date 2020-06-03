import React, { useEffect, useState }from 'react';
import { View, Text, TextInput } from 'react-native';


export default function Input(){

  const [valor, setValor] = useState('');

  const changeValor = value => {
    let valor = value.toUpperCase();
    setValor(valor);
  }

  return (
    <View>
      <Text>Login</Text>
      <TextInput 
        autoCapitalize="characters"
        // onChangeText={value => {
        //   changeValor(value);
        // }}
        //value={valor}
      />
    </View>
  )
}