
import createCommons from '../Commons';
import createTypesRamal from './types';


function createRamal() {
  function get_ramal(value) {
    const Commons = createCommons();
  
    const num = Commons.filterValue(value, 'only-number');
    const typeMask = Commons.getObjKeyForIndex(typesRamal(), 0);
    const mask = Commons.formatMask(num, typesRamal()[typeMask].mask);

    return mask;
  };

  function typesRamal() {
    return createTypesRamal().getTypesRamal;
  };

  return {
    get_ramal,
    typesRamal
  }
}


export default createRamal;
