import React, { useEffect, useRef, useState } from 'react';

import { TextInput } from 'react-native';
import { useField } from '@unform/core';

import Func from './Validations';

function Input({name, ...rest}) {
  const inputRef = useRef(null);
  const {fieldName, registerField, defaultValue, error} = useField(name);

  const [maskValue, setMaskValue] = useState('');

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        setMaskValue('');
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
    if (maskValue !== '' && maskValue !== inputRef.current.value) {
      inputRef.current.value = maskValue;
    }
  }, [maskValue]);

  const getValidation = value => {
    const props = {
      type: {...rest}.type,
      value: value,
    };

    value = Func.getMaskValue(props)
    return value;
  };

  return (
    <TextInput
      ref={inputRef}
      defaultValue={defaultValue}
      onChangeText={value => {
        setMaskValue(getValidation(value));
      }}
      value={maskValue}
      {...rest}
    />
  );
}

export default Input;
