import createCommons from '../Commons';


function createTypesString() {
  const Commons = createCommons();
  
  const getTypesString = {
    'STRING-LOW': {
      func: 'string_low',
      configInput: { 
        ...Commons.lblOrientacao, 
        ...Commons.configTextCase 
      },
    }, 
    'STRING-UP': {
      func: 'string_up',
      configInput: { 
        ...Commons.lblOrientacao, 
        ...Commons.configTextCase 
      },
    }, 
    'PASSWORD': {
      func: 'password',
      configInput: { 
        ...Commons.lblOrientacao, 
        secureTextEntry: true,
        placeholder: '******',
      },
    },             
    'EMAIL': {
      func: 'email',
      configInput: { 
        ...Commons.lblOrientacao, 
        keyboardType: 'email-address',
        autoCapitalize: 'none',
        placeholder: 'Email',
      }
    }
  };

  return {
    getTypesString
  }
}


export default createTypesString;