import React, { useRef } from 'react';
import { Button, TouchableOpacity, Text } from 'react-native';
import { Form } from '@unform/mobile';
import Input from './Input';

import { Scope } from '@unform/core';

const initialData = {
  email: 'gustavo.ferreiraa2@gmail.com',
  endereco: {
    cidade: 'Vila Velha'
  }
}

export default function Signin() {
  const formRef = useRef(null);

  function handleSubmit(data, { reset }) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
    reset();
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Text>Nome</Text>
      <Input name="nome" type="livre" />
      <Text>Email</Text>
      <Input name="email" />
      <Text>Número</Text>
      <Input name="numero" keyboardType="numeric" type="inteiro" /> 
      <Scope path="endereco">
        <Text>UF</Text>
        <Input name="uf" />
        <Text>Cidade</Text>
        <Input name="cidade" />
      </Scope>

      <TouchableOpacity onPress={() => formRef.current.submitForm()}>
        <Text>Send</Text>
      </TouchableOpacity>
    </Form>
  );
}