
import createCommons from '../Commons';
import createTypesCep from './types';

function createCep() {
  function get_cep(value) {
    const Commons = createCommons();
  
    const num = Commons.filterValue(value, 'only-number');
    const typeMask = Commons.getObjKeyForIndex(typesCep(), 0);
    const mask = Commons.formatMask(num, typesCep()[typeMask].mask);

    return mask;
  };

  function typesCep() {
    return createTypesCep().getTypesCep;
  };
  
  return {
    get_cep,
    typesCep
  }
}


export default createCep;
