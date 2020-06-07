
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
