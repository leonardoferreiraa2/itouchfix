
import createCommons from '../Commons';
import createTypesPlaque from './types';


function createPlaque() {
  function get_plaque(value) {
    const Commons = createCommons();
    
    value = value.replace('-', '');
    const part1 = Commons.filterValue(value, 'only-letter', 0, 3);
    const part2 = Commons.filterValue(value, 'only-number', 3, 1);
    const part3 = getDigPlaque(value);
    const part4 = Commons.filterValue(value, 'only-number', 5, 2);
    const montage = part1 + part2 + part3 + part4;

    const typeMask = Commons.getObjKeyForIndex(typesPlaque(), 0);
    const mask = Commons.formatMask(montage, typesPlaque()[typeMask].mask);
    
    return mask.toUpperCase();
  };

  function typesPlaque() {
    return createTypesPlaque().getTypesPlaque;
  };

  function getDigPlaque(value) {
    if (value.length <= 4) { return ''; };

    const Commons = createCommons();

    const dig_letter = Commons.filterValue(value, 'only-letter', 4, 1);
    const dig_number = Commons.filterValue(value, 'only-number', 4, 1);
    const dig = dig_letter || dig_number;

    return dig;
  };

  return {
    get_plaque,
    typesPlaque
  }
}


export default createPlaque;
