// Crie uma função q// Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer
// essa função deve receber dois parâmetros: base e altura
// e retornar um objeto no formato: 
// { area: 0, perimetro: 0 }
// perimetro = (2*base) + (2*altura)
// area = base * alturaue calcule a área e o perímetro de um quadrilátero qualquer
// essa função deve receber dois parâmetros: base e altura
// e retornar um objeto no formato: 
// { area: 0, perimetro: 0 }
// perimetro = (2*base) + (2*altura)
// area = base * altura



function calcularQuad(base, altura) {

let resultArea = base * altura;
let resultPerimetro = (2 * base) + (2 * altura);

//retornar um objeto
let resultado = {
  area: resultArea,
  perimetro: resultPerimetro,
}
return resultado;

}

console.log(calcularQuad(4,4));


