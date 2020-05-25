const valNumero = valor => {
  let val = 'int' + valor
  return val
}

const valLivre = valor => {
  let val = 'liv' + valor
  return val
}

const typesValidations = () => {
  return ({
      int: 'inteiro',
      liv: 'livre',
  })
}

export {
  typesValidations,
  valNumero,
  valLivre,
}
