
function changeText() {

  document.getElementsByTagName('p')[0].innerHTML = 'Daqui a 2 anos vou estar trabalhando como dev profissional em uma grande empresa!';

  // document.getElementsByTagName('p')[1].remove();
  // document.getElementsByTagName('p')[1].remove();

}

function changeMainColor() {

  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';

}

function changeSectionColor() {

  document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';

}

function changeTitle() {

  document.getElementsByTagName('h1')[0].innerHTML = 'Exercício 5.1 - Javascript';

}

function textUpperCase() {

  document.getElementsByTagName('p')[0].style.textTransform = 'uppercase';

}

function printPonConsole() {

  let tagsP = document.getElementsByTagName('p');
  for (let i of tagsP) {
    console.log(i.innerText);
  }

}


changeText();
changeMainColor();
changeSectionColor();
changeTitle();
textUpperCase();
printPonConsole();