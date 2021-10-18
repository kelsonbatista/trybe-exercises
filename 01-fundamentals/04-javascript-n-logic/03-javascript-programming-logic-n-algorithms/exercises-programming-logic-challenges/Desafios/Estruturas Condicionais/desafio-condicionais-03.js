/*

03 - Mostre a classe do aventureiro

A Trybe tem um grupo de aventureiros. 

Quando o nome de algum é invocado, a classe a qual essa pessoa faz parte é apresentada.

Escreva um algoritmo que recebe o nome de um aventureiro e, de acordo com este nome, retorna o nome da sua classe conforme tabela baixo:

|  Aventureiro  |       Classe        |

|   Tunico      |  Mestre dos Magos   |
|   Cremoso     |  Cavaleiro Negro    |
|   Gordinho    |  Pirata             |
|   Lobo        |  Solitário Samurai  |
|   Ousado      |  Mago               |
|   Anjo        |  Loiro Clérigo      |

Caso o nome informado não faça parte do esquadrão, retorne:
----------------------------
"Aventureiro não encontrado"
----------------------------

 */

function findAdventurous(adventurous){
  // Desenvolva seu código nessa função

  let advName = adventurous.toLowerCase();

  switch(advName) {
    case 'tunico': return 'Mestre dos Magos';
    case 'cremoso': return 'Cavaleiro Negro';
    case 'gordinho': return 'Pirata';
    case 'lobo solitário': return 'Samurai';
    case 'ousado': return 'Mago';
    case 'anjo loiro': return 'Clérigo';
    default: return 'Aventureiro não encontrado';
  }

}
console.log(findAdventurous('Gordinho'));
module.exports = findAdventurous;
