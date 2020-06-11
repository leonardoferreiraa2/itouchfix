
import createCommons from '../Commons';
import createTypesCPF from './types';

function createCPF() {
  function get_cpf(value) {
    const Commons = createCommons();
  
    const num = Commons.filterValue(value, 'only-number');
    const typeMask = Commons.getObjKeyForIndex(typesCPF(), 0);
    const mask = Commons.formatMask(num, typesCPF()[typeMask].mask);

    return mask;
  };

  function typesCPF() {
    return createTypesCPF().getTypesCPF;
  };

  function validarCPF(cpf) {
    let numeros, digitos, soma, i, resultado, digitos_iguais;
    
    digitos_iguais = 1;
    if (cpf.length < 11) { return false; }

    for (i = 0; i < cpf.length - 1; i++) {
      if (cpf.charAt(i) != cpf.charAt(i + 1)){
        digitos_iguais = 0;
        break;
      }
    }
    
    if (digitos_iguais) { return false; }

    numeros = cpf.substring(0,9);
    digitos = cpf.substring(9);

    soma = 0;
    for (i = 10; i > 1; i--) {
      soma += numeros.charAt(10 - i) * i;
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    };
      
    if (resultado != digitos.charAt(0)) { return false; }
    
    numeros = cpf.substring(0,10);

    soma = 0;
    for (i = 11; i > 1; i--) {
      soma += numeros.charAt(11 - i) * i;
    };

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) { return false; }

    return true;
  };

  return {
    get_cpf,
    typesCPF
  }
}


export default createCPF;
