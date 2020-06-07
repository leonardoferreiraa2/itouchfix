
import createCommons from '../Commons';
import createTypesPhone from './types';


function createPhone() {
  function get_phone(value) {
    const Commons = createCommons();
  
    const num = Commons.filterValue(value, 'only-number');
    let mask = '';

    if (num.length === 9) {
      mask = Commons.formatMask(num, '99999-9999');
    } else {
      const typeMask = Commons.getObjKeyForIndex(typesPhone(), 0);
      mask = Commons.formatMask(num, typesPhone()[typeMask].mask);
    };
    
    return mask;
  };
  
  function get_phone_ddd(value) {
    const Commons = createCommons();
  
    const num = Commons.filterValue(value, 'only-number');
    let mask = '';

    if (num.length === 11) {
      mask = Commons.formatMask(num, '(99) 99999-9999');
    } else {
      const typeMask = Commons.getObjKeyForIndex(typesPhone(), 1);
      mask = Commons.formatMask(num, typesPhone()[typeMask].mask);
    };
    
    return mask;
  };
  
  function typesPhone() {
    return createTypesPhone().getTypesPhone;
  };

  return {
    get_phone,
    get_phone_ddd,
    typesPhone
  }
}


export default createPhone;
