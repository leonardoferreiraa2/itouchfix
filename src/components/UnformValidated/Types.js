
import createCep from './Cep';
import createCNPJ from './CNPJ';
import createCPF from './CPF';
import createDate from './Date';
import createNumber from './Number';
import createPhone from './Phone';
import createPlaque from './Plaque';
import createRamal from './Ramal';
import createString from './String';


function createTypes() {
  const types = {
    ...createCep().typesCep(),
    ...createCNPJ().typesCNPJ(),
    ...createCPF().typesCPF(),
    ...createDate().typesDate(),
    ...createNumber().typesNumber(),
    ...createPhone().typesPhone(),
    ...createPlaque().typesPlaque(),
    ...createRamal().typesRamal(),
    ...createString().typesString()
  }

  return {
    types
  }
}


export default createTypes;
