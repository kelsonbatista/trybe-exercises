
document.querySelector('header').style.backgroundColor = 'green';

document.querySelector('.emergency-tasks').style.backgroundColor = 'pink';

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'lightyellow';


let emg = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < emg.length; i += 1) {
  emg[i].style.backgroundColor = 'purple';
}

let noemg = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < noemg.length; i += 1) {
  noemg[i].style.backgroundColor = 'black';
}

document.querySelector('#footer-container').style.backgroundColor = 'darkgreen';