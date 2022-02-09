// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some

// O método some() testa se ao menos um dos elementos no array passa no teste implementado
// pela função atribuída e retorna um valor true ou false.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// O método every() testa se todos os elementos do array passam pelo teste implementado
// pela função fornecida.

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de
// teste provida. Caso contrario, undefined é retornado.

// Verificar se alguma pessoa da lista abaixo não dirige

const pessoas = [
  { nome: 'Robert', sobreNome: 'De Niro', dirige: true },
  { nome: 'Michelle', sobreNome: 'Pfeiffer', dirige: true },
  { nome: 'Will', sobreNome: 'Smith', dirige: false },
  { nome: 'Mariah', sobreNome: 'Carey', dirige: true },
  { nome: 'Lady', sobreNome: 'Gaga', dirige: false },
  { nome: 'Justin', sobreNome: 'Bieber', dirige: true },
];

// Usando FOR OF
let temPessoaQueNaoDirige = false;
// for (pessoa of pessoas) {
//   if (pessoa.dirige === false) {
//     temPessoaQueNaoDirige = true;
//     break;
//   }
// }

// Usando o SOME
temPessoaQueNaoDirige = pessoas.some((pessoa) => {
  return pessoa.dirige === false;
});

let resposta = temPessoaQueNaoDirige
  ? 'Pelo menos uma das pessoas não sabe dirigir'
  : 'Todas as pessoas sabem dirigir';
console.log(resposta);

// Usando o EVERY
const todasAsPessoasSabemDirigir = pessoas.every((pessoa)=>{
 return pessoa.nome === 'Will';
});

console.log(todasAsPessoasSabemDirigir);
// Pegar as informações da primeira pessoa que não sabe dirigir
// Usando o FIND
const pessoaQueNaoSabeDirigir = pessoas.find((pessoa)=>{
  return pessoa.dirige === false;
});

console.log(pessoaQueNaoSabeDirigir);

