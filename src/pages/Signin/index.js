import React, {useRef} from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { Form } from '@unform/mobile';
import Input from '../../components/UnformValidated';

import {Scope} from '@unform/core';

// const initialData = {
//   email: 'gustavo.ferreiraa2@gmail.com',
//   endereco: {
//     cidade: 'Vila Velha',
//   },
// };

export default function Signin() {
  const formRef = useRef(null);

  function handleSubmit(data, {reset}) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
    reset();
  }

/* 
  PLACEHOLDER
  configurações inputs
  criar label
  retornar email como ***
  validar email

  FALTAM: 
    cnpj
    cpf
    date
    number
    string
  
  FEITOS:
    plaque
    cep
    phone
    phone-ddd
    ramal
*/

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Text>Nome</Text>
      <Input name="nome" type="phone-ddd" />
      <Text>Email</Text>
      <Input name="email" type="string-low" />
      <Text>Número</Text>
      <Input name="numero" type="general" />
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
