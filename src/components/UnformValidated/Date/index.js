
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

    const typeMask = Commons.getObjKeyForIndex(typesDate(), indexMask);
    const func = typesDate()[typeMask].func;
    const num = getDigitos(Commons.filterValue(value, 'only-number'), func);
    const mask = Commons.formatMask(num, typesDate()[typeMask].mask);

    return mask;
  };

  function duracaoFormat(value, func) {
    if (!func.includes('dur_')) { return value; };
    
    let mask = '';
    
    if (func.length === 9) {
        let len = value.substr(0, value.length - 2).length;
        mask = value.length <= 4 ? '00:00' : '0'.repeat(len) + ':00';
    } else if (func.length === 12) {
        let len = value.substr(0, value.length - 4).length;
        mask = value.length <= 6 ? '00:00:00' : '0'.repeat(len) + ':00:00';
    };

    return mask;
  }

  function getDigitos(value, func) {
    if (value === '') { return '' };
    if (Object.keys(getDigitosHoras).indexOf(func) === -1) { return value };

    let numStr = String(parseInt(value));
    let newStr = '';

    func = func.replace('dur_', '');
    const getDig = getDigitosHoras[func];
    const dig = getDig(numStr);

    if (value.substr(0, 2) === '00') { 
      const len = dig.length === 2 ? 4 : 6;
      return value.substr(0, len);
    };

    for (let i = 0; i < dig.length; i++) {
      if (i === 0) {
        dig[i] = dig[i].length < 2 && value !== '0' ? 
          '0'.repeat(2 - dig[i].length) + dig[i] : dig[i]; 
      };
 
      newStr += dig[i];
    }

    return newStr;
  };

  const getDigitosHoras = {
    hh_mm(value) { 
      let dig = [1];
      if (value.length <= 3) {
        dig[0] = value.substr(0, 1);
        dig[1] = value.substr(1, 2);
      } else if (value.length > 3) {
        dig[0] = value.substr(0, 2);
        dig[1] = value.substr(2, 2);
      };

      return dig;
    },                
    hh_mm_ss(value) { 
      let dig = [2];
      if (value.length <= 5) {
        dig[0] = value.substr(0, 1);
        dig[1] = value.substr(1, 2);
        dig[2] = value.substr(3, 2);
      } else if (value.length > 5) {
        dig[0] = value.substr(0, 2);
        dig[1] = value.substr(2, 2);
        dig[2] = value.substr(4, 2);
      };

      return dig;
    },                          
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
