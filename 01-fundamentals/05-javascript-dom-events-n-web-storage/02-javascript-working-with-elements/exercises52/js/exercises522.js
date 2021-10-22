
let elementoOnde = document.querySelector('#elementoOndeVoceEsta');
// acessando o pai de outro elemento e trocando a cor
elementoOnde.parentNode.style.backgroundColor = 'yellow';

// alterando texto do primeiro filho do filho
elementoOnde.firstElementChild.innerHTML = 'Alterando o texto do Segundo filho - filho 1';

//acessando o primeiro filho do pai
document.querySelector('#pai').firstElementChild.style.backgroundColor = 'orange';

//acessando primeiro filho do elementoOnde
elementoOnde.firstElementChild.style.backgroundColor = 'green';

// acessando o texto Atencao do elemento Onde
elementoOnde.nextSibling;

// acessando o terceiro filho a partir de Onde
elementoOnde.nextElementSibling.style.backgroundColor = 'pink';

//acessando o terceiro filho do pai
document.querySelector('#pai').lastElementChild.previousElementSibling.innerHTML = 'Texto acessado e alterado pelo pai';

//criando irmao para Onde
let novoIrmao = document.createElement('section');
novoIrmao.innerHTML = '<strong>Irmao criado a partir do onde</strong>'
novoIrmao.id = 'irmaoOnde';
elementoOnde.append(novoIrmao);

//criando um filho para Onde
let novoFilho = document.createElement('section');
novoFilho.innerHTML = '<strong>Esse é o filho do Onde</strong>';
novoFilho.id = "novoFilhoOnde";
elementoOnde.appendChild(novoFilho);

// criando um filho do filho de Onde
let netoOnde = document.createElement('section');
netoOnde.innerHTML = '<strong>Esse é o filho do filho do Onde</strong>';
netoOnde.id = "filhoDoFilhoOnde";
elementoOnde.firstElementChild.appendChild(netoOnde);

// acessando terceiro filho do neto
document.querySelector('#filhoDoFilhoOnde').parentElement.parentElement.nextElementSibling.textContent += ' Texto inserido a partir do Neto do Onde';

//remover todos os elementos do pai, exceto o pai/ onde e primeiro filho do filho
let elementoPai = document.querySelector('#pai');
// elementoPai.firstElementChild.remove();
let children = elementoPai.childNodes;

for (let i = 0; i < children.length; i += 1) {
  children[i].id.remove();
}
