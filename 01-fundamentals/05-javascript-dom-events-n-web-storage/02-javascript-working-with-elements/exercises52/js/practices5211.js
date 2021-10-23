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

let p = document.createElement('p');
p.innerHTML = 'Esse é um parágrafo';
document.querySelector('.center-content').appendChild(p);

let section2 = document.createElement('section');
section2.className = 'left-content';
document.querySelector('.main-content').appendChild(section2);

let section3 = document.createElement('section');
section3.className = 'right-content';
document.querySelector('.main-content').appendChild(section3);


