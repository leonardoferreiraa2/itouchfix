
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

  return {
    get_cpf,
    typesCPF
  }
}


export default createCPF;
