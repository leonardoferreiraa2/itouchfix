import createCommons from '../Commons';


function createTypesPhone() {
  const Commons = createCommons();
  const mask_phone = '9999-9999';
  const mask_phone_ddd = '(99) 9999-9999';

  const getTypesPhone = {
    'PHONE': {
      func: 'phone',
      mask: mask_phone,
      configInput: { 
        ...Commons.lblOrientacao, 
        maxLength: mask_phone.maxLength,
        keyboardType: 'numeric',
        placeholder: '99999-9999',
      },
    }, 
    'PHONE-DDD': {
      func: 'phone_dd',
      mask: mask_phone_ddd,
      configInput: { 
        ...Commons.lblOrientacao, 
        maxLength: mask_phone_ddd.maxLength,
        keyboardType: 'numeric',
        placeholder: '(99) 99999-9999',
      }
    }
  };

  return {
    getTypesPhone
  }
}


export default createTypesPhone;