
import createCommons from '../Commons';
import createTypesCNPJ from './types';


function createCNPJ() {
  function get_cnpj(value) {
    const Commons = createCommons();
  
    const num = Commons.filterValue(value, 'only-number');
    const typeMask = Commons.getObjKeyForIndex(typesCNPJ(), 0);
    const mask = Commons.formatMask(num, typesCNPJ()[typeMask].mask);

    return mask;
  };

  function typesCNPJ() {
    return createTypesCNPJ().getTypesCNPJ;
  };
  
  return {
    get_cnpj,
    typesCNPJ
  }
}


export default createCNPJ;
