
document.querySelector('header').style.backgroundColor = 'green';

document.querySelector('.emergency-tasks').style.backgroundColor = 'pink';

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'lightyellow';


let emergency = document.querySelector('.emergency-tasks');
for (let i = 0; i < emergency.length; i += 1) {
  emergency[i].style.backgroundColor = 'purple';
}
