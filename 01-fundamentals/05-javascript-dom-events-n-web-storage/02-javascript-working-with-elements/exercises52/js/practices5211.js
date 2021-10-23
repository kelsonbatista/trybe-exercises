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

let img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.className = 'small-image';
document.querySelector('.left-content').appendChild(img);

let numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let ul = document.createElement('ul');

for(let i = 0; i < numbers.length; i += 1) {
  let li = document.createElement('li');
  li.innerText = numbers[i];
  document.querySelector('.right-content').appendChild(li);
}

for (let i = 1; i <= 3; i += 1) {
  let h3 = document.createElement('h3');  
  h3.innerText = 'Elemento h3 - ' + i;
  document.querySelector('.main-content').appendChild(h3);
}

h1.className = 'title';

let h3All = document.querySelectorAll('h3');
h3All.className = 'description';

let sectionLeft = document.getElementsByClassName('left-content');
let mainElement = document.querySelector('.main-content');
// let mainChildren = mainElement.childNodes;
mainElement.removeChild(sectionLeft[0]);

let sectionRight = document.getElementsByClassName('right-content');
sectionRight[0].style.marginRight = 'auto';

let firstSection = document.getElementsByClassName('center-content');
firstSection[0].parentNode.style.backgroundColor = 'green';