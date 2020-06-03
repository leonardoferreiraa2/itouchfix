/*
  string-low = letras minísculas
  string-up = letras maiúsculas
  password = password
  email = email

  retornar password como ***
  validar email

*/

import createCommons from './Commons';


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


export default {
  get_string_up,
  get_string_low,
  get_password,
  get_email,
}
