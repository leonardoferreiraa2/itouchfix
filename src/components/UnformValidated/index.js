import React, { useEffect, useRef, useState } from 'react';

import { View, Text, TextInput } from 'react-native';
import { useField } from '@unform/core';

import createValidations from './Validations';

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

  function getValidation(value) {
    const Fun = createValidations();

    const props = {
      type: {...rest}.type,
      value: value,
    };

    return Fun.getMaskValue(props);
  };

  function getConfig(refConfig, nameConfig) {
    if (refConfig.nameConfig) return

    const Fun = createValidations();
    const types = Fun.types;
    const type = refConfig.type !== undefined ? 
      refConfig.type.toUpperCase() : '';
  
    if (Object.keys(types).indexOf(type) === -1) return null;

    const configs = types[type].configInput;
    const config = configs[nameConfig];

    Object.assign(refConfig, { [nameConfig]: config })
  };

  const refConfig = {...rest};
  
  getConfig(refConfig, 'secureTextEntry');
  getConfig(refConfig, 'keyboardType');
  getConfig(refConfig, 'autoCapitalize');
  getConfig(refConfig, 'maxLength');
  getConfig(refConfig, 'placeholder');

  return (
    <View>
      <Text>{ {...rest}.label }</Text>
      <TextInput
        ref={inputRef}
        defaultValue={defaultValue}
        onChangeText={value => {
          setMaskValue(getValidation(value));
        }}
        value={maskValue}
        {...refConfig}
      />
    </View>
  );
}


export default Input;
