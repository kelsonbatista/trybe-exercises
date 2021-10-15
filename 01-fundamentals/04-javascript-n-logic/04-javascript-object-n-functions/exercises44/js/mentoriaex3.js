/**
 * 
 *  Crie uma função que receba uma string word e outra string ending. 
 * Verifique se a string ending é o final da string word . Considere que a string ending 
 * sempre será menor que a string word. 
 * 
 * Valor de teste: 'trybe' e 'be'.
 * Valor esperado no retorno da função: true
 * 
 * verificaFimPalavra('trybe', 'be');
 * Retorno esperado: true
 * 
 * verificaFimPalavra('joaofernando', 'fernan');
 * Retorno esperado: false
 * 
 * 
 * USAR O SPLIT: 
*/

function testePalavra(string, ending) {

  let teste = false;

  if(ending.length < string.length) {
    for(let i of string){
      teste = true;
    }
  }
  
}

console.log(testePalavra('tiago','go'))