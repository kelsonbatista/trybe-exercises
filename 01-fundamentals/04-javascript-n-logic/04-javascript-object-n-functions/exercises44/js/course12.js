// criar objeto player contento as variaveis abaixo

let player = {
  name: 'Marta',
  lastname: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}

let frase = 'A jogadora ' + player.name + ' ' + player.lastname + ' tem ' + player.age + ' anos de idade.';
console.log(frase);