// SELECT STATE FIELD
const state = [{name: 'São Paulo', abbr: 'SP'}, {name: 'Rio de Janeiro', abbr: 'RJ'}, {name: 'Minas Gerais', abbr: 'MG'}, {name: 'Rio Grande do Sul', abbr: 'RS'}, {name: 'Bahia', abbr: 'BA'}]
const stateField = document.querySelector('#form__state');
const emptyText = '<option disabled selected>Selecione o Estado</option>';
stateField.innerHTML = emptyText;
for (let i = 0; i < state.length; i += 1) {
  const stateOption = document.createElement('option');
  stateOption.value = state[i].abbr;
  stateOption.innerText = state[i].name;
  stateField.appendChild(stateOption);
}

function sendForm(event) {
  event.preventDefault();
  // console.log('passou');

  const divAnswer = document.querySelector('.form__answer');
  const newDivOpen = '<div class="form__answer-item">';
  const newDivClose = '</div>';

  const formName = document.querySelector('#form__name');
  const answerName = `Nome: ${formName.value}`;
  const newAnswer1 = document.createElement('p');
  newAnswer1.className = 'answer__fields';
  newAnswer1.innerHTML = `${newDivOpen} ${answerName} ${newDivClose}`;
  divAnswer.appendChild(newAnswer1);
  formName.value = '';

  const formEmail = document.querySelector('#form__email');
  const answerEmail = `Email: ${formEmail.value}`;
  const newAnswer2 = document.createElement('p');
  newAnswer2.className = 'answer__fields';
  newAnswer2.innerHTML = `${newDivOpen} ${answerEmail} ${newDivClose}`;
  divAnswer.appendChild(newAnswer2);
  formEmail.value = '';

  const formCpf = document.querySelector('#form__cpf');
  const answerCpf = `CPF: ${formCpf.value}`;
  const newAnswer3 = document.createElement('p');
  newAnswer3.className = 'answer__fields';
  newAnswer3.innerHTML = `${newDivOpen} ${answerCpf} ${newDivClose}`;
  divAnswer.appendChild(newAnswer3);
  formCpf.value = '';

  const formAddress = document.querySelector('#form__address');
  const answerAddress = `Endereço: ${formAddress.value}`;
  const newAnswer4 = document.createElement('p');
  newAnswer4.className = 'answer__fields';
  newAnswer4.innerHTML = `${newDivOpen} ${answerAddress} ${newDivClose}`;
  divAnswer.appendChild(newAnswer4);
  formAddress.value = '';

  const formCity = document.querySelector('#form__city');
  const answerCity = `Cidade: ${formCity.value}`;
  const newAnswer5 = document.createElement('p');
  newAnswer5.className = 'answer__fields';
  newAnswer5.innerHTML = `${newDivOpen} ${answerCity} ${newDivClose}`;
  divAnswer.appendChild(newAnswer5);
  formCity.value = '';

  const formState = document.querySelector('#form__state');
  const answerState = `Estado: ${formState.value}`;
  const newAnswer6 = document.createElement('p');
  newAnswer6.className = 'answer__fields';
  newAnswer6.innerHTML = `${newDivOpen} ${answerState} ${newDivClose}`;
  divAnswer.appendChild(newAnswer6);
  formState.value = '';

  const formRadio = document.querySelector('.form__radio[name=type]:checked');
  const answerRadio = `Tipo: ${formRadio.value}`;
  const newAnswer7 = document.createElement('p');
  newAnswer7.className = 'answer__fields';
  newAnswer7.innerHTML = `${newDivOpen} ${answerRadio} ${newDivClose}`;
  divAnswer.appendChild(newAnswer7);
  formRadio.value = '';

  const formSummary = document.querySelector('#form__summary');
  const answerSummary = `Resumo profissional: ${formSummary.value}`;
  const newAnswer8 = document.createElement('p');
  newAnswer8.className = 'answer__fields';
  newAnswer8.innerHTML = `${newDivOpen} ${answerSummary} ${newDivClose}`;
  divAnswer.appendChild(newAnswer8);
  formSummary.value = '';

  const formRole = document.querySelector('#form__role');
  const answerRole= `Cargo: ${formRole.value}`;
  const newAnswer9 = document.createElement('p');
  newAnswer9.className = 'answer__fields';
  newAnswer9.innerHTML = `${newDivOpen} ${answerRole} ${newDivClose}`;
  divAnswer.appendChild(newAnswer9);
  formRole.value = '';

  const formRDescription = document.querySelector('#form__role-description');
  const answerRDescription = `Descrição: ${formRDescription.value}`;
  const newAnswer10 = document.createElement('p');
  newAnswer10.className = 'answer__fields';
  newAnswer10.innerHTML = `${newDivOpen} ${answerRDescription} ${newDivClose}`;
  divAnswer.appendChild(newAnswer10);
  formRDescription.value = '';

  const formSDate = document.querySelector('#form__start-date');
  const answerSDate = `Data de início: ${formSDate.value}`;
  const newAnswer11 = document.createElement('p');
  newAnswer11.className = 'answer__fields';
  newAnswer11.innerHTML = `${newDivOpen} ${answerSDate} ${newDivClose}`;
  divAnswer.appendChild(newAnswer11);
  formSDate.value = '';

  const formPersonal = document.querySelector('.form.personal');
  formPersonal.style.display = 'none';
  const formJob = document.querySelector('.form.job');
  formJob.style.display = 'none';
  const formAnswer = document.querySelector('.form.answer');
  formAnswer.style.display = 'block';

  // newAnswer.style.backgroundColor = 'yellow';
  // newAnswer.innerText = `asdasdasdsads`;
}

const btnSend = document.querySelector('#form__send');
btnSend.addEventListener('click', sendForm);

function clearForm(event) {
  event.preventDefault();
  const formAnswer = document.querySelector('.form.answer');
  formAnswer.style.display = 'none';
  const formPersonal = document.querySelector('.form.personal');
  formPersonal.style.display = 'block';
  const formJob = document.querySelector('.form.job');
  formJob.style.display = 'block';
}

const btnClear = document.querySelector('#form__clear');
btnClear.addEventListener('click', clearForm);
