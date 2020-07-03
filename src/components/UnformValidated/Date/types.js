
import createCommons from '../Commons';


function createTypesDate() {
  const Commons = createCommons();
  const mask_hh_mm = '00:00';
  const mask_hh_mm_ss = '00:00:00';
  const mask_dd_mm_yy = '00/00/0000';
  const mask_dd_mm_yy_hh_mm = '00/00/0000 00:00';
  const mask_dd_mm_yy_hh_mm_ss = '00/00/0000 00:00:00';

  const getTypesDate = {
    'HH:MM': {
      func: 'hh_mm',
      mask: mask_hh_mm,
      configInput: { 
        ...Commons.lblOrientacao, 
        maxLength: mask_hh_mm.length + 1,
        keyboardType: 'numeric',
        placeholder: 'hh:mm',
      },
    },
    'HH:MM:SS': {
      func: 'hh_mm_ss',
      mask: mask_hh_mm_ss,
      configInput: { 
        ...Commons.lblOrientacao, 
        maxLength: mask_hh_mm_ss.length + 1,
        keyboardType: 'numeric',
        placeholder: 'hh:mm:ss', 
      },
    }, 
    '[HH]:MM': {
      func: 'dur_hh_mm',
      mask: mask_hh_mm,
      configInput: { 
        ...Commons.lblOrientacao, 
        maxLength: mask_hh_mm.length + 1,
        keyboardType: 'numeric',
        placeholder: '[hh]:mm', 
      },
    },         
    '[HH]:MM:SS': {
      func: 'dur_hh_mm_ss',
      mask: mask_hh_mm_ss,
      configInput: { 
        ...Commons.lblOrientacao, 
        maxLength: mask_hh_mm_ss.length + 1,
        keyboardType: 'numeric',
        placeholder: '[hh]:mm:ss',
      },
    },             
    'DD/MM/YYYY': {
      func: 'dd_mm_yy',
      mask: mask_dd_mm_yy,
      configInput: { 
        ...Commons.lblOrientacao,
        maxLength: mask_dd_mm_yy.length,
        keyboardType: 'numeric',
        placeholder: 'dd/mm/yyyy',
      },
    },
    'DD/MM/YYYY HH:MM': {
      func: 'dd_mm_yy_hh_mm',
      mask: mask_dd_mm_yy_hh_mm,
      configInput: { 
        ...Commons.lblOrientacao,
        maxLength: mask_dd_mm_yy_hh_mm.length,
        keyboardType: 'numeric',
        placeholder: 'dd/mm/yyyy hh:mm',
      },
    },
    'DD/MM/YYYY HH:MM:SS': {
      func: 'dd_mm_yy_hh_mm_ss',
      mask: mask_dd_mm_yy_hh_mm_ss,
      configInput: { 
        ...Commons.lblOrientacao,
        maxLength: mask_dd_mm_yy_hh_mm_ss.length,
        keyboardType: 'numeric',
        placeholder: 'dd/mm/yyyy hh:mm:ss',
      }
    }  
  };

  return {
    getTypesDate
  }
}


export default createTypesDate;
