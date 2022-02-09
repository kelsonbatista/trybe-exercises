 /*
 
15 - Pedra, papel e tesoura

Escreva um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e retorne o resultado no seguinte formato:
---------------------------------------------
"Player 1 won" ou "A Ties" ou "Player 2 won". 
---------------------------------------------

*/

function rockPaperScissors(signPerson1, signPerson2){
  // Desenvolva seu código nessa função

  let message = '';
  if((signPerson1 === 'rock' && signPerson2 === 'scissors') || (signPerson1 === 'scissors' && signPerson2 === 'paper') || (signPerson1 === 'paper' && signPerson2 === 'rock')) {
    message = 'Player 1 won';
  } else if((signPerson2 === 'rock' && signPerson1 === 'scissors') || (signPerson2 === 'scissors' && signPerson1 === 'paper') || (signPerson2 === 'paper' && signPerson1 === 'rock')) {
    message = 'Player 2 won';
  } else {
    message = 'A Ties';
  }
  return message;
}
console.log(rockPaperScissors('rock','paper'))
module.exports = rockPaperScissors;
