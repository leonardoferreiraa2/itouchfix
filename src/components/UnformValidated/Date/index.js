
import createCommons from '../Commons';
import createTypesDate from './types';


function createDate() {
  function get_hh_mm(value) { return getValueDate(value, 0); };
  function get_hh_mm_ss(value) { return getValueDate(value, 1); };
  function get_dur_hh_mm(value) { return getValueDate(value, 2); };
  function get_dur_hh_mm_ss(value) { return getValueDate(value, 3); };
  function get_dd_mm_yy(value) { return getValueDate(value, 4); };
  function get_dd_mm_yy_hh_mm(value) { return getValueDate(value, 5); };
  function get_dd_mm_yy_hh_mm_ss(value) { return getValueDate(value, 6); };

  function typesDate() { 
    return createTypesDate().getTypesDate; 
  };

  function getValueDate(value, indexMask) {
    const Commons = createCommons();

    const num = Commons.filterValue(value, 'only-number');
    const typeMask = Commons.getObjKeyForIndex(typesDate(), indexMask);
    const mask = Commons.formatMask(num, typesDate()[typeMask].mask);

    return mask;
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
