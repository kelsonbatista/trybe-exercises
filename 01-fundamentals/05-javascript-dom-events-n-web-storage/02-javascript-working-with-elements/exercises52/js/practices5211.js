//1- tag h1 como filho da tag body
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - Javascript DOM';
document.body.appendChild(h1);

let main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

let section = document.createElement('section');
section.className = 'center-content';
document.querySelector('.main-content').appendChild(section);



