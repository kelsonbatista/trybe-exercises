/*

08 - Descubra a idade mínima

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
---------------------------------------------------

*/

function findYoungerPerson(marinaAge, silviaAge, izaAge){
  // Desenvolva seu código nessa função

  let m = marinaAge;
  let s = silviaAge;
  let i = izaAge
  let message = '';

  if((m < s) && (m < i)) {
    message = `Marina é a mais jovem e possui ${marinaAge} anos de idade.`;
  } else if((s < m) && (s < i)) {
    message = `Silvia é a mais jovem e possui ${silviaAge} anos de idade.`;
  } else {
    message = `Iza é a mais jovem e possui ${izaAge} anos de idade.`;
  }
  return message;

}
console.log(findYoungerPerson(20, 18, 19))
module.exports = findYoungerPerson;
