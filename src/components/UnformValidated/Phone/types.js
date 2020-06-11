import createCommons from '../Commons';


function createTypesPhone() {
  const Commons = createCommons();
  const mask_phone = '0000-0000';
  const mask_phone_ddd = '(00) 0000-0000';

  const getTypesPhone = {
    'PHONE': {
      func: 'phone',
      mask: mask_phone,
      configInput: { 
        ...Commons.lblOrientacao, 
        maxLength: mask_phone.maxLength,
        keyboardType: 'numeric',
        placeholder: '00000-0000',
      },
    }, 
    'PHONE-DDD': {
      func: 'phone_dd',
      mask: mask_phone_ddd,
      configInput: { 
        ...Commons.lblOrientacao, 
        maxLength: mask_phone_ddd.maxLength,
        keyboardType: 'numeric',
        placeholder: '(00) 00000-0000',
      }
    }
  };

  return {
    getTypesPhone
  }
}


export default createTypesPhone;