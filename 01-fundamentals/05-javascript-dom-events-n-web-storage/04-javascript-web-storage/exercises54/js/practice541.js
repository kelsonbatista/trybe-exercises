
window.onload = function() {

let inputBg = document.querySelector('#config__input-bg');
let inputTc = document.querySelector('#config__input-tc');
let inputFs = document.querySelector('#config__input-fs');
let inputLs = document.querySelector('#config__input-ls');
let inputFf = document.querySelector('#config__input-ff');
let btnSet = document.querySelector('#config__btnset');
let btnRst = document.querySelector('#config__btnrst');
let txt = document.querySelectorAll('.mytext__text');

btnSet.addEventListener('click', () => {
  if (inputBg.value !== '') {
    localStorage.bgcolor = inputBg.value;
  }
  
  if (inputTc.value !== '') {
    localStorage.textcolor = inputTc.value;
  }
  
  if (inputFs.value !== '') {
    localStorage.fontsize = inputFs.value;
  }
  
  if (inputLs.value !== '') {
    localStorage.linespace = inputLs.value;
  }
  
  if (inputFf.value !== '') {
    localStorage.fontfamily = inputFf.value;
  }
  
  window.location.reload();
});

btnRst.addEventListener('click', () => {
  let removeKey = ['bgcolor', 'textcolor', 'fontsize', 'linespace', 'fontfamily'];
  for(let i = 0; i < removeKey.length; i += 1) {
    if (removeKey !== null) localStorage.removeItem(removeKey[i]);
  }
  window.location.reload();
});

document.body.style.backgroundColor = localStorage.bgcolor;
for(let i = 0; i < txt.length; i += 1) {
  txt[i].style.color = localStorage.textcolor;
  txt[i].style.fontSize = localStorage.fontsize;
  txt[i].style.lineHeight = localStorage.linespace;
  txt[i].style.fontFamily = localStorage.fontfamily;
}

} // fim window onload