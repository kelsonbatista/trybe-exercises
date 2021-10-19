/*

04 - Verifique se todos os dados de uma lista são do mesmo tipo

Escreva uma algoritmo que recebe um array de dados quaisquer e verifique se todos são do mesmo tipo.

Se todos forem retorne:
------
true
------

Caso contrário:
-------
false
-------

Obs: Os retornos tem que ser dados do tipo boolean.

*/

function dataType(types){
  // Desenvolva seu código aqui.
  let firstItem = types[0];
  for (let i = 0; i < types.length-1; i++) {
    if (typeof types[i+1] == typeof types[i]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(dataType(['texto', 'true', '10']))
module.exports = dataType;
