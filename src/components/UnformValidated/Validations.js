
import React from 'react';
import createFunctions from './Functions';
import createTypes from './Types';

function createValidations() {
  function getMaskValue(prop) {
    const Fun = createFunctions();
    const type = prop.type !== undefined ? prop.type.toUpperCase() : '';
    const value = prop.value;

    if (value === '' || Object.keys(types).indexOf(type) === -1) return value;

    const func = types[type].func;
    const getFuncMask = Fun.getMaskValueFunc[func];
    return getFuncMask(value);
  };

  const types = createTypes().types

  return {
    getMaskValue,
    types
  };
};

export default createValidations;
