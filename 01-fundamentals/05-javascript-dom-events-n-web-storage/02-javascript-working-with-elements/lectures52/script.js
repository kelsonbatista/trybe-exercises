// // 1 - criar o elemento
// let mySquare = document.createElement('div');

// // 2 - adicionar atributos ao elemento criado
// mySquare.id = 'square';
// mySquare.className = 'red small square';

// // 3 - selecionar o elemento pai no DOM
// let myContainerFirst = document.querySelector('#first');

// // 4 - adicionar o elemento criado ao elemento pai no DOM
// myContainerFirst.appendChild(mySquare);

// //// Criando um circulo
// let myCircle = document.createElement('div');
// myCircle.id = 'circle';
// myCircle.className = 'green small circle';
// myContainerFirst.appendChild(myCircle);

// // Remocao de um elemento do DOM
// let yellowCircle = document.querySelector('.yellow.small.circle');
// myContainerFirst.removeChild(yellowCircle);

// // Removendo todas as caixas
// let boxes = document.querySelectorAll('.main-box');
// let main = document.querySelector('main');
// for (let box of boxes) {
//   main.removeChild(box)
// }

function createDivFabric(id, classes, container) {
  let myDiv = document.createElement('div');
  myDiv.id = id;
  myDiv.className = classes;
  container.appendChild(myDiv);
}

let myContainerFirst = document.querySelector('#first');
let myShapes = [
  'green small circle',
  'red small square',
];

for (let i=0; i<myShapes.length; i += 1) {
  let shape = myShapes[i];
  createDivFabric(i, shape, myContainerFirst);
}


// parentElement
document.querySelector('.red.small.square').parentElement;

// children
document.querySelector('#first').children;

// firstElementChild
document.querySelector('#first').firstElementChild;

// lastElementChild
document.querySelector('#first').lastElementChild;

// nextElementSibling
document.querySelector('#first').firstElementChild.nextElementSibling;

// previousElementSibling
document.querySelector('#first').lastElementChild.previousElementSibling;
