function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let year = document.querySelector('#year');
year.innerText = '2021';


// EXERCICIO 1

let dezDaysList = [29, 30];

  for (let i = 1; i <= 31; i += 1) {
    dezDaysList.push(i);
  }
function createDays() {
  
  let ulDays = document.querySelector('#days');
  
  for(let i = 0; i < dezDaysList.length; i += 1) {
    let li = document.createElement('li');
    let day = dezDaysList[i];
    if (day === 24 || day === 31) {
      li.className = 'holiday';
    } else if (day === 4 || day === 11 || day === 18) {
      li.className = 'day friday';
    } else if (day === 25) {
      li.className = 'day friday holiday';
    } else {
      li.className = 'day';
    }
    li.innerText = day;
    ulDays.appendChild(li);
  }
  // console.log(ulDays);
}

createDays();
  
// EXERCICIO 2
function btnFeriados(feriados) {

  let btnFe = document.createElement('button');
  btnFe.id = 'btn-holiday'
  btnFe.innerText = 'Feriados';
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(btnFe);

}

btnFeriados();

// EXERCICIO 3 
function isHoliday(){

    let btnHoliday = document.querySelector('#btn-holiday');
    let listHoliday = document.querySelectorAll('.holiday');

    btnHoliday.addEventListener('click', function () {
      for (let i = 0; i < listHoliday.length; i += 1) {
        if (listHoliday[i].style.backgroundColor === 'yellow') {
          listHoliday[i].style.backgroundColor = 'rgb(238,238,238)';
        } else {
          listHoliday[i].style.backgroundColor = 'yellow';
        }
      }
    });

}

isHoliday();

// EXERCICIO 4
function btnFriday(sextaFeira) {
  let btnFriday = document.createElement('button');
  btnFriday.id = 'btn-friday';
  btnFriday.innerText = 'Friday';
  let buttonsContainer = document.querySelector('.buttons-container');
  buttonsContainer.appendChild(btnFriday);
}

btnFriday();

// EXERCICIO 5

function isFriday() {
  let daysFriday = [4, 11, 18, 25];
  let btnFriday = document.querySelector('#btn-friday');
  let listFriday = document.querySelectorAll('.friday');
  btnFriday.addEventListener('click', function () {
    for(let i = 0; i < listFriday.length; i += 1) {
      // let listFridayText = listFriday[i].textContent;
      if(listFriday[i].textContent !== 'Sextou!') {
        listFriday[i].innerText = 'Sextou!';
      } else {
        listFriday[i].innerText = daysFriday[i];
      }
    }
  });

}

isFriday();


// EXERCICIO 6
function zoomNumber() {

  let dayNumber = document.querySelectorAll('.day');

  for (let i = 0; i < dayNumber.length; i += 1) {
    dayNumber[i].addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '1.7em';
      event.target.style.fontWeight = '700';
    });

    dayNumber[i].addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '1.3em';
      event.target.style.fontWeight = '500';
    });
  }
  
}

zoomNumber();

// EXERCICIO 7
function addTasks(tarefa){
  let listTasks = document.querySelector('.my-tasks');
  let theTask = document.createElement('span');
  theTask.innerText = tarefa;
  listTasks.appendChild(theTask);
}

addTasks('cozinhar');


