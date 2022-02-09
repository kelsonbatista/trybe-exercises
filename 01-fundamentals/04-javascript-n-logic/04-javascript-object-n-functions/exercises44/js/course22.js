//imprimir com as chaves e valores do objeto

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020,
}

for(let i in car) {
  console.log(i, car[i]);
}