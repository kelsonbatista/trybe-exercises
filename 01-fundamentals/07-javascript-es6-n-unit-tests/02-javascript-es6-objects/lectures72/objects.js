const person = {
  name: 'Henrique',
  lastName: 'Jensen',
};
// console.log(person);
// console.log(person.name);
// console.log(`Olá, ${person.name} ${person['lastname']}`);
// console.log(typeof person)

// Como pegar as chaves?
const keysOfPerson = Object.keys(person);
// console.log(keysOfPerson); // retorna um array de keys

// Como pegar os valores?
const valuesOfPerson = Object.values(person);
// console.log(valuesOfPerson); // retorna um array de values

// Como pegar as entradas?
// [
//   [ 'key 1', 'value 1' ],
//   [ 'key 2', 'value 2' ]
// ] -> retorna uma matriz
const entriesOfPerson = Object.entries(person);
// console.log(entriesOfPerson);
// console.log(entriesOfPerson[0][1]);

// E se eu quiser criar uma nova chave e valor agora?
// criando um o ponto
person.age = 90;
console.log(person);

// criando com colchetes
person['canPlayPiano'] = false;
console.log(person);

// e se usar a mesma chave?
person.age = 20;
console.log(person); // altera a chave existente
