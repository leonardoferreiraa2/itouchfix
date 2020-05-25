import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { TextInput } from 'react-native';
import { useField } from '@unform/core';

import { 
  typesValidations,
  valNumero,
  valLivre
} from './Validations'

function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const types = typesValidations()
  const [valueMask, setValueMask] = useState('');
  const [validar, setValidar] = useState(false);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        setValidar(false);
        ref.value = '';
        ref.clear();
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        inputRef.current.value = value;
      },
      getValue(ref) {
        return ref.value;
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    console.log('tentou')  
    if (validar === true && valueMask !== '') {
      setValidar(false)

      console.log(valueMask);

      inputRef.current.value = valueMask
      console.log('novo valor')  
    }
  }, [valueMask]);

  const setValidation = (valor) => {
    switch({...rest}.type){
      case types.int: return valNumero(valor)
      case types.liv: return valLivre(valor)
      default: return 'nada'
    }
  }

  return (
    <TextInput
      ref={inputRef}
      defaultValue={defaultValue}
      onChangeText={value => { 
        setValidar(true)
        setValueMask(setValidation(value))
      }}
      value={valueMask}
      {...rest}
    />
  );
};

export default Input;