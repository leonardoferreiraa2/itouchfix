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
    validar duração
  
  FEITOS:
    cep
    phone
    phone-ddd
    ramal
    plaque
    cnpj    validar cnpj
    cpf     validar cpf
    date
    string
    number
    validar data
    validar hora
*/

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="hora" type="hh:mm" label="Hora" />
      <Input name="data" type="dd/mm/yyyy" label="Data" />
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
