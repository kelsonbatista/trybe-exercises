/*

16 - Imprima a idade em ordem crescente

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne uma string com as idades em ordem crescente.

Por exemplo:
-------------
Entrada:
21, 20, 19

Saída:
"19, 20, 21"
-------------

*/

function sortAgeAsc(mariaAge, silviaAge, izaAge){
  // Desenvolva seu código nessa função

  pos1 = 0;
  pos2 = 0;
  pos3 = 0;

  if((mariaAge < silviaAge) && (mariaAge < izaAge)) {
    pos1 = mariaAge;
    if ((silviaAge < izaAge)) {
      pos2 = silviaAge;
      pos3 = izaAge;
    } else {
      pos2 = izaAge;
      pos3 = silviaAge;
    }
  } else if ((silviaAge < mariaAge) && (silviaAge < izaAge)) {
    pos1 = silviaAge;
    if((mariaAge < izaAge)) {
      pos2 = mariaAge;
      pos3 = izaAge;
    } else {
      pos2 = izaAge;
      pos3 = mariaAge;
    }
  } else {
    pos1 = izaAge;
    if((mariaAge < silviaAge)) {
      pos2 = mariaAge;
      pos3 = silviaAge;
    } else {
      pos2 = silviaAge;
      pos3 = mariaAge;
    }
  }

  return(pos1 + ', ' + pos2 + ', ' + pos3)
}
console.log(sortAgeAsc(25, 28, 22))
module.exports = sortAgeAsc;
