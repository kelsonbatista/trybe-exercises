//--------------------- Primeira parte do código -------------------
// Objeto pessoa com as propriedades nome, sobreNome e saudacao que retorna
// uma saudação simples!

// const pessoa = {
//   nome: 'Matheus',
//   sobreNome: 'Jesus',

//   saudacao: () => {
//     return `Olá`
//   }
// }

// console.log(pessoa.saudacao());

//--------------------- Segunda parte do código -------------------
// Objeto pessoa com as propriedades nome, sobreNome e saudacao que retorna
// uma saudação dinamica através de uma callback!

// Função com uma saudação formal
const saudacaoFormal = (nomePessoa) => {
  return `Olá ${nomePessoa}, tudo bem com você?`;
};

// Função com uma saudação amorosa
const saudacaoAmorosa = (nomePessoa) => {
  return `Olá ${nomePessoa} tudo bem com você, meu amor?`;
};

const saudacaoSeca = () => {
  return `Oi!`;
};

const pessoa = {
  nome: 'Matheus',
  sobreNome: 'Jesus',

  saudacao: function (funcao, nomePessoa) {
    return funcao(nomePessoa);
  },
};

console.log(pessoa.saudacao(saudacaoAmorosa, 'Marcia Maria'));
console.log(pessoa.saudacao(saudacaoSeca, ''));

// Função com uma saudação mau humorada

// Resultado das chamadas das funções de saudação pelo objeto pessoa
// console.log(); Saudação formal
// console.log(); Saudação amorosa

//--------------------- Terceira parte do código -------------------
// Objeto pessoa com as propriedades nome, sobreNome e saudacao que retorna
// uma saudação dinamica através de uma callback e com o nome da pessoa que se
// deseja saudar!

// Resultado das chamadas das funções de saudação pelo objeto pessoa.
// Pessoa que se desejar saudar: Kevin Costner usar saudação formal.
// console.log();

// Pessoa que se desejar saudar: Márcia Maria usar saudação amorosa,
// console.log();

// Pessoa que se desejar saudar: desconhecida usar saudação mal humorada.
// console.log();

//--------------------- Conteúdo adicional -------------------

// Crie uma função que retorne um objeto no formato { nomeCompleto, email }
// representando uma nova pessoa contratada. Passe sua função como parâmetro
// da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.
// A sua função deve receber como parâmetro o nome completo da pessoa funcionária
// e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const dadosEmployee = (nomeCompleto) => {
  const email = `${nomeCompleto.replace(' ', '_').toLowerCase()}@trybe.com`;
  return { nome: nomeCompleto, email: email };
};

// console.log(dadosEmployee('Felipe Castanheira'));

console.log(newEmployees(dadosEmployee));


// Exemplo usando um Array com os nomes dos empregados e gerando ID de forma dinamica
const listaEmpregados = ['Mariana Souza','Ana Maria','Marcelo Alves', 'Pedro Dutra', 'Rodolpho Lima', 'Marcela Prado']

const novosEmpregados = (callback, arrayEmpregados) => {
  // Inicia o objeto vazio
  const empregados = {}
  // Um for para percorrer todos os dados do array
    for(let index = 0; index < arrayEmpregados.length; index +=1){
      //Gera o ID de forma dinamica usando o INDEX do FOR
      let id = `id${index + 1}`;
      // Inclui cada objeto gerado pela função callback no objeto empregados
      empregados[id] = callback(arrayEmpregados[index]);
    }
  return empregados;
};

// Fazendo a chamada da função 'pai' novosEmpregados, passando como parametros
// a função de callback, no caso é a função dadosEmployee e o array com as 
// informações dos empregados que queremos colocar no objeto principal empregados
console.log(novosEmpregados(dadosEmployee, listaEmpregados));