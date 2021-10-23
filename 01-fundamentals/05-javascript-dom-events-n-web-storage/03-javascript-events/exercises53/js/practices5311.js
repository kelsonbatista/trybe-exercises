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
function createDays() {
  
  let ulDays = document.querySelector('#days');
  let dezDaysList = [29, 30];

  for (let i = 1; i <= 31; i += 1) {
    dezDaysList.push(i);
  }

  for(let i = 1; i < dezDaysList.length-1; i += 1) {
    let li = document.createElement('li');
    
    if (i === 24 || i === 31) {
      li.className = 'holiday';
    } else if (i === 4 || i === 11 || i === 18) {
      li.className = 'day friday';
    } else if (i === 25) {
      li.className = 'day friday holiday';
    } else {
      li.className = 'day';
    }
    li.innerText = i;
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


