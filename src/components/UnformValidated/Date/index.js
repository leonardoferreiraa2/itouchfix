
import createCommons from '../Commons';
import createTypesDate from './types';


function createDate() {
  function get_hh_mm(value) { return getValueDate(value, 0); };
  function get_hh_mm_ss(value) { return getValueDate(value, 1); };
  function get_dur_hh_mm(value) { return duracaoFormat(value, 2); };
  function get_dur_hh_mm_ss(value) { return duracaoFormat(value, 3); };
  function get_dd_mm_yy(value) { return getValueDate(value, 4); };
  function get_dd_mm_yy_hh_mm(value) { return getValueDate(value, 5); };
  function get_dd_mm_yy_hh_mm_ss(value) { return getValueDate(value, 6); };

  function typesDate() { 
    return createTypesDate().getTypesDate; 
  };

  function getValueDate(value, indexMask) {
    const Commons = createCommons();

    const num = getDigitos(Commons.filterValue(value, 'only-number'), 2);
    // const num = Commons.filterValue(value, 'only-number');
    const typeMask = Commons.getObjKeyForIndex(typesDate(), indexMask);
    const mask = Commons.formatMask(num, typesDate()[typeMask].mask);

    return mask;
  };

  function duracaoFormat(value, indexMask) {
    const Commons = createCommons();
    let num = Commons.filterValue(value, 'only-number');

    // está apagando - se digitar 0, num e value vai ser 0, logo, segue
    if (num === '00' || num === '' || (num === '0' && value !== '0')) { 
      return '';
    };

    // essa conversão em inteiro é para tirar os zeros a esquerda
    num = String(parseInt(num));

    // o primeiro formato é quando tem até 3 caracteres
    const numPass = num.length < 3 
      ? '0'.repeat(3 - num.length) + String(num)
      : String(num);
    
    // redimensiona de forma dinâmica a mask (ex: 124252 = 1242.52)
    const typeMask = numPass.length === 3 
      ? '0.00' 
      : '0'.repeat(numPass.length - 2) + '.00'; 

    return Commons.formatMask(numPass, typeMask);
  }

  function getDigitos(value) {
    if (value === '') { return };

    let dig1, dig2;
    let numInt = String(parseInt(value));
    let newValue = value === '000' || value === '0000' ? 
      value : numInt;

    if (newValue.length <= 3) {
      dig1 = newValue.substr(0, 1);
      dig2 = newValue.substr(1, 2);
    } else if (newValue.length > 3) {
      dig1 = newValue.substr(0, 2);
      dig2 = newValue.substr(2, 2);
    };

    dig1 = dig1.length < 2 && value !== '0' ? 
      '0'.repeat(2 - dig1.length) + dig1 : dig1; 
    
    newValue = dig1 + dig2;

    return newValue;
  };

  function validarData(date) {
    if (date.length < 10) return false;

    const d = parseInt(date.substr(0, 2));
    const m = parseInt(date.substr(3, 2));
    const y = parseInt(date.substr(6, 4));

    const realDate = new Date(y, m - 1, d);
    const initialDate = new Date(y, m - 1, 1);
    const lastDate = new Date(y, m, 0);
    
    if (realDate < initialDate || realDate > lastDate) {
        return false;
    } else {
        return true;
    };
  };

  function validarHora(hour) {
    if (hour.length !== 5 && hour.length !== 8) return false;

    const h = parseInt(hour.substr(0, 2));
    const m = parseInt(hour.substr(3, 2));
    const s = parseInt(hour.substr(6, 4)) || 0;
    
    if ( (h < 0 || h > 23) || (m < 0 || m > 59) || (s < 0 || s > 59) ) {
      return false;
    } else {
      return true;
    };
  };

  return {
    get_hh_mm,
    get_hh_mm_ss,
    get_dur_hh_mm,
    get_dur_hh_mm_ss,
    get_dd_mm_yy,
    get_dd_mm_yy_hh_mm,
    get_dd_mm_yy_hh_mm_ss,
    typesDate
  }
}


export default createDate;
