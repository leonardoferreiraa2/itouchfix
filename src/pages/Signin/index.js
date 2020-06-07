import React, { useRef } from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { Form } from '@unform/mobile';
import Input from '../../components/UnformValidated';

import { Scope } from '@unform/core';

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
    reset();
  }

/*  
  melhorar teclados para cada tipo de input
  len mínimo, duplicidade, duplicidade combinada, requerido
  validações nos detalhes: framework formulários access
  styles icones e label
  ver re-renders
  melhorar criação de label

  FALTAM: 
    number
    string
    validar cpf
    validar cnpj
    validar data
    validar hora
  
  FEITOS:
    cep
    phone
    phone-ddd
    ramal
    plaque
    cnpj
    cpf
    date
*/

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="data" type="[hh]:mm:ss" label="Data" />
      <Input name="email" type="email" label="Email" />
      <Input name="numero" type="general" label="Número" />
      <Scope path="endereco">
        <Input name="cep" type="cep" label="CEP" />
        <Input name="cidade" label="Cidade" />
      </Scope>

      <TouchableOpacity onPress={() => formRef.current.submitForm()}>
        <Text>Send</Text>
      </TouchableOpacity>
    </Form>
  );
}
