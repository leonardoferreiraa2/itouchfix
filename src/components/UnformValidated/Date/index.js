/* 
  HH:MM
  HH:MM:SS
  
  [HH]:MM
  [HH]:MM:SS

  dd/mm/yyyy

  dd/mm/yyyy hh:mm
  dd/mm/yyyy hh:mm:ss
*/

import createCommons from '../Commons';


function createDate() {
  function typesDate() {
    const Commons = createCommons();
    return {
      'HH:MM': {
        func: 'hh_mm',
        configInput: { ...Commons.lblOrientacao, ...Commons.num_with_five },
      },
      'HH:MM:SS': {
        func: 'hh_mm_ss',
        configInput: { ...Commons.lblOrientacao, ...Commons.num_with_eigth },
      }, 
      '[HH]:MM': {
        func: 'dur_hh_mm',
        configInput: { ...Commons.lblOrientacao, ...Commons.num_with_five },
      },         
      '[HH]:MM:SS': {
        func: 'dur_hh_mm_ss',
        configInput: { ...Commons.lblOrientacao, ...Commons.num_with_eigth },
      },             
      'DD/MM/YYYY': {
        func: 'dd_mm_yy',
        configInput: { 
          ...Commons.lblOrientacao,
          maxLength: 10,
          keyboardType: 'numeric',
          placeholder: 'dd/mm/yyyy',
        },
      },
      'DD/MM/YYYY HH:MM': {
        func: 'dd_mm_yy_hh_mm',
        configInput: { 
          ...Commons.lblOrientacao,
          maxLength: 16,
          keyboardType: 'numeric',
          placeholder: 'dd/mm/yyyy hh:mm',
        },
      },
      'DD/MM/YYYY HH:MM:SS': {
        func: 'dd_mm_yy_hh_mm_ss',
        configInput: { 
          ...Commons.lblOrientacao,
          maxLength: 19,
          keyboardType: 'numeric',
          placeholder: 'dd/mm/yyyy hh:mm:ss',
        }
      }  
    }
  };

  function get_hh_mm(value) {
    return value;
  };
  
  function get_hh_mm_ss(value) {
    return value;
  };
  
  function get_dur_hh_mm(value) {
    return value;
  };
  
  function get_dur_hh_mm_ss(value) {
    return value;
  };
  
  function get_dd_mm_yy(value) {
    return value;
  };
  
  function get_dd_mm_yy_hh_mm(value) {
    return value;
  };
  
  function get_dd_mm_yy_hh_mm_ss(value) {
    return value;
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
