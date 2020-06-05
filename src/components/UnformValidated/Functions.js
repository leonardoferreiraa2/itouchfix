
import createCep from './Cep';
import createCNPJ from './CNPJ';
import createCPF from './CPF';
import createDate from './Date';
import createNumber from './Number';
import createPhone from './Phone';
import createPlaque from './Plaque';
import createRamal from './Ramal';
import createString from './String';

function createSetFunctions() {
  const getMaskValueFunc = {
    cep(value) { return createCep().get_cep(value) },                
    cnpj(value) { return createCNPJ().get_cnpj(value) },               
    cpf(value) { return createCPF().get_cpf(value) },                
    hh_mm(value) { return createDate().get_hh_mm(value) },              
    hh_mm_ss(value) { return createDate().get_hh_mm_ss(value) },           
    dur_hh_mm(value) { return createDate().get_dur_hh_mm(value) },          
    dur_hh_mm_ss(value) { return createDate().get_dur_hh_mm_ss(value) },       
    dd_mm_yy(value) { return createDate().get_dd_mm_yy(value) },           
    dd_mm_yy_hh_mm(value) { return createDate().get_dd_mm_yy_hh_mm(value) },     
    dd_mm_yy_hh_mm_ss(value) { return createDate().get_dd_mm_yy_hh_mm_ss(value) },  
    general(value) { return createNumber().get_general(value) },            
    decimal(value) { return createNumber().get_decimal(value) },            
    currency(value) { return createNumber().get_currency(value) },           
    percent(value) { return createNumber().get_percent(value) },            
    card(value) { return createNumber().get_card(value) },               
    phone(value) { return createPhone().get_phone(value) },              
    phone_dd(value) { return createPhone().get_phone_ddd(value) },           
    plaque(value) { return createPlaque().get_plaque(value) },             
    ramal(value) { return createRamal().get_ramal(value) },              
    string_low(value) { return createString().get_string_low(value) },         
    string_up(value) { return createString().get_string_up(value) },          
    password(value) { return createString().get_password(value) },           
    email(value) { return createString().get_email(value) },              
  };

  return {
    getMaskValueFunc
  };
};

export default createSetFunctions;
