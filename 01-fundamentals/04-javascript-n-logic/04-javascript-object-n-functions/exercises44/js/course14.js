// criar objeto player contento as variaveis abaixo

let player = {
  name: 'Marta',
  lastname: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  },
}


player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// let frase = 'A jogadora ' + player.name + ' ' + player.lastname + ' tem ' + player.age + ' anos de idade.';
let frase = 'A jogadora ' + player.name + ' ' + player.lastname + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.';
console.log(frase);

