
import createCommons from '../Commons';
import createTypesString from './types';


function createString() {
  function get_string_up(value) {
    return value.toUpperCase();
  };
  
  function get_string_low(value) {
    return value.toLowerCase();
  };
  
  function get_password(value) {
    return value;
  };
  
  function get_email(value) {
    return value;
  };

  function typesString() {
    return createTypesString().getTypesString;
  };

  return {
    get_string_up,
    get_string_low,
    get_password,
    get_email,
    typesString
  }
}


export default createString;
