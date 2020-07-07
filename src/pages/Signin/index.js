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
    validar duração
*/

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      {/* <Input name="cep" type="cep" label="Cep" />
      <Input name="cnpj" type="cnpj" label="CNPJ" />
      <Input name="cpf" type="cpf" label="CPF" /> */}

      {/* <Input name="hora" type="hh:mm" label="Hora" />
      <Input name="horSeg" type="hh:mm:ss" label="Hora/Segundo" />
      <Input name="dur" type="[hh]:mm" label="Duração" />
      <Input name="durSegundo" type="[hh]:mm:ss" label="Duração/Segundo" />
      <Input name="datHor" type="dd/mm/yyyy hh:mm" label="Data e Hora" />
      <Input name="datHorSeg" type="dd/mm/yyyy hh:mm:ss" label="Data e Hora/Seg" /> */}

      {/* <Input name="general" type="general" label="Inteiro" />
      <Input name="decimal" type="decimal" label="Decimal" />
      <Input name="currency" type="currency" label="Moeda" />
      <Input name="percent" type="percent" label="Porcentagem" />
      <Input name="card" type="card" label="Cartão de Crédito" /> */}

      {/* <Input name="phone" type="phone" label="Tel" />
      <Input name="phone-ddd" type="phone-ddd" label="Tel DDD" />
      <Input name="plaque" type="plaque" label="Placa Veículo" />
      <Input name="ramal" type="ramal" label="Ramal" /> */}

      <Scope path="string">
        <Input name="string-low" type="string-low" label="Texto Low" />
        <Input name="string-up" type="string-up" label="Texto Up" />
        <Input name="password" type="password" label="Senha" />
        <Input name="email" type="email" label="Email" />
      </Scope>

      <TouchableOpacity onPress={() => formRef.current.submitForm()}>
        <Text>Send</Text>
      </TouchableOpacity>
    </Form>
  );
}
