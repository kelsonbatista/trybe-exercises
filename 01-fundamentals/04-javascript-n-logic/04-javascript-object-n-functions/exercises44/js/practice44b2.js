// funcao que recebe variavel vector como parametro
// buscar numeros pares e adicionar em um novo array


function arrayOfNumbers(numbers) {

  let even = [];

  for(let i of numbers) {
    let itemNumbers = i;
    for(let j of itemNumbers) {
      if(j%2 === 0) {
        even.push(j)
      }
    }
    // console.log(splitNumbers)
  }
  return even;
}

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]]
console.log(arrayOfNumbers(vector))