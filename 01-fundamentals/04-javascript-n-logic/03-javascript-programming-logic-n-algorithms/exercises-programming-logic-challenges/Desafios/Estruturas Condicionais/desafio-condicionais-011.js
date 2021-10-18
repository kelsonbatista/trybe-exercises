 /*
 
 11 - Triplica vogais

 Escreva um algoritmo que recebe uma string (frase ou palavra) e retorne uma outra string com as vogais "triplicadas".
 
 Por exemplo:
 ------------
 Entrada:
 "Camelo"

 Saída:
 "Caaameeelooo"
 --------------
 
 */

function triVowels(word){
  // Desenvolva seu código nessa função
  let splitWord = word.split('');
  let letter = '';

  for (let i = 0; i < splitWord.length; i++) {
    if((splitWord[i] === 'a' || splitWord[i] === 'e' || splitWord[i] === 'i' || splitWord[i] === 'o' || splitWord[i] === 'u')) {
      for(let triple = 1; triple <= 3; triple++) {
        letter += splitWord[i];
      }
      splitWord[i] = letter;
      letter = '';
    }
  }
  splitWord = splitWord.join('');
  return splitWord;
}
console.log(triVowels('Camelo'))
module.exports = triVowels;
