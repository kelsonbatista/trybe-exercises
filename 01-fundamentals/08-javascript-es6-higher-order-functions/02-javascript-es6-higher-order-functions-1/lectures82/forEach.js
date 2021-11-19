// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// O método forEach() executa uma dada função em cada elemento de um array.

// Fazer o log de cada numero do array abaixo multiplicado por 3

const numeros = [12, 3, 5, 7, 123, 55, 90, 0, 13, 1];

// Com for of
// for (numero of numeros) {
//   console.log(numero * 3);
// }

// Com o forEach
// numeros.forEach((numero)=>console.log(numero * 3));

// Fazer o log de todos os estados do array abaixo no formato
// 1 - Acre
// 2 - Alagoas

const estados = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goías',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraíma',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];

// Com FOR tradicional
console.log('Lista de estados brasileiros');
// for (index = 0; index < estados.length; index += 1) {
//   console.log(`${index + 1} - ${estados[index]}`);
// }

// Com forEach
// estados.forEach((estado, posicao) => {
//   console.log(`${posicao + 1} - ${estado}`);
// });

// Usando uma CALLBACK externa
function caixaAlta(elemento, posicao){
  console.log(elemento.toUpperCase() + '-' + posicao);
}

estados.forEach(caixaAlta);

// Apresentar o nome e a nota final de todas as pessoas estudantes que tiverem média final das notas
// das avaliações (avaliação, projeto e trabalho em grupo) maior ou igual a 7
// mediaFinal = (avaliacao + projeto + trabalhoGrupo) / 3

const pessoasEstudantes = [
  { nome: 'Alexandre', avaliacao: 7, projeto: 5.5, trabalhoGrupo: 8 },
  { nome: 'Marcondes', avaliacao: 6, projeto: 7.5, trabalhoGrupo: 5 },
  { nome: 'Rodrigo', avaliacao: 8.5, projeto: 9, trabalhoGrupo: 7 },
  { nome: 'Marcella', avaliacao: 8, projeto: 7, trabalhoGrupo: 4 },
  { nome: 'Adriana', avaliacao: 9, projeto: 7, trabalhoGrupo: 7 },
  { nome: 'Marlene', avaliacao: 7.5, projeto: 8, trabalhoGrupo: 7 },
];

// Com forEach
pessoasEstudantes.forEach((pessoa)=>{
  let mediaFinal = (pessoa.avaliacao + pessoa.projeto + pessoa.trabalhoGrupo) / 3
  if (mediaFinal >= 7) {
    console.log(`O estudante ${pessoa.nome} passou com média final ${mediaFinal.toFixed(1)}`);
  }
})