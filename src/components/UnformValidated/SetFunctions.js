
import Cep from './Cep';
import CNPJ from './CNPJ';
import CPF from './CPF';
import Date from './Date';
import Number from './Number';
import Phone from './Phone';
import Plaque from './Plaque';
import Ramal from './Ramal';
import String from './String';


export const getMaskValueFunc = {
  cep(value) { return Cep.get_cep(value) },                
  cnpj(value) { return CNPJ.get_cnpj(value) },               
  cpf(value) { return CPF.get_cpf(value) },                
  hh_mm(value) { return Date.get_hh_mm(value) },              
  hh_mm_ss(value) { return Date.get_hh_mm_ss(value) },           
  dur_hh_mm(value) { return Date.get_dur_hh_mm(value) },          
  dur_hh_mm_ss(value) { return Date.get_dur_hh_mm_ss(value) },       
  dd_mm_yy(value) { return Date.get_dd_mm_yy(value) },           
  dd_mm_yy_hh_mm(value) { return Date.get_dd_mm_yy_hh_mm(value) },     
  dd_mm_yy_hh_mm_ss(value) { return Date.get_dd_mm_yy_hh_mm_ss(value) },  
  general(value) { return Number.get_general(value) },            
  decimal(value) { return Number.get_decimal(value) },            
  currency(value) { return Number.get_currency(value) },           
  percent(value) { return Number.get_percent(value) },            
  card(value) { return Number.get_card(value) },               
  phone(value) { return Phone.get_phone(value) },              
  phone_dd(value) { return Phone.get_phone_ddd(value) },           
  plaque(value) { return Plaque.get_plaque(value) },             
  ramal(value) { return Ramal.get_ramal(value) },              
  string_low(value) { return String.get_string_low(value) },         
  string_up(value) { return String.get_string_up(value) },          
  password(value) { return String.get_password(value) },           
  email(value) { return String.get_email(value) },              
};

export default {
  getMaskValueFunc,
};
