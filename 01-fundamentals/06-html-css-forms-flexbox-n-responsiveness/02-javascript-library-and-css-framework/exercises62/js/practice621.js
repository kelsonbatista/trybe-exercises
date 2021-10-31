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

// DATA PICKER
// document.addEventListener('DOMContentLoaded', function () {
let picker = new Pikaday({ 
  field: document.getElementById('form__start-date'),
  format: 'DD-MM-YYYY',
});
// });

// JUST VALIDATE
new window.JustValidate('.form', {
  rules: {
    name: {
      required: true,
      maxLength: 40,
      minLength: 5,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50,
      minLength: 5,
      remote: {
          url: 'https://just-validate-api.herokuapp.com/check-correct',
          sendParam: 'email',
          successAnswer: 'OK',
          method: 'GET'
      }
    },
    cpf: {
      required: true,
      maxLength: 11,
    },
    address: {
      required: true,
      maxLength: 200,
      minLength: 5,
    },
    city: {
      required: true,
      maxLength: 28,
      minLength: 2,
    },
    state: {
      required: true,
    },
    type: {
      required: true,
    },
    summary: {
      required: true,
      maxLength: 1000,
      minLength: 50,
    },
    role: {
      required: true,
      maxLength: 40,
      minLength: 5,
    },
    roleDescription: {
      required: true,
      maxLength: 500,
      minLength: 5,
    },
    startDate: {
      required: true,
    },
  },

  messages: {
    name: {
      required: 'Digite seu nome',
      maxLength: 'Limite excedido',
      minLength: 'Nome muito curto',
    },
    email: {
      required: 'Digite seu email',
      remote: 'Email já existe!',
      email: 'Digite um email válido',
    },
    cpf: {
      required: 'Digite seu CPF',
      maxLenght: 'Máximo de 11 caracteres'
    },
    address: {
      required: 'Digite seu endereço',
      maxLength: 'Limite excedido',
      minLength: 'Necessário um mínimo de caracteres muito curto',
    },
    city: {
      required: 'Digite sua cidade',
      maxLength: 'Limite excedido',
      minLength: 'Necessário um mínimo de caracteres muito curto',
    },
    state: {
      required: 'Digite seu estado',
    },
    type: {
      required: 'Selecione com o tipo'
    },
    summary: {
      required: 'Digite seu resumo profissional',
      maxLength: 'Limite excedido',
      minLength: 'Necessário um mínimo de caracteres muito curto',
    },
    role: {
      required: 'Digite seu cargo',
      maxLength: 'Limite excedido',
      minLength: 'Necessário um mínimo de caracteres muito curto',
    },
    roleDescription: {
      required: 'Digite a descrição do cargo',
      maxLength: 'Limite excedido',
      minLength: 'Necessário um mínimo de caracteres muito curto',
    },
    startDate: {
      required: 'Digite a data de início',
    },
  },

  // tooltip: {
  //   fadeOutTime: 4000, // default value - 5000 
  //   fadeOutClass: '.hide', // default value - 
  //   selectorWrap: '.tooltip-wrapper', // default value - just-validate-tooltip-containerjust-validate-tooltip-hide
  // },

  colorWrong: 'red',
  focusWrongField: true,

  submitHandler: function (form, values, ajax) {
      ajax({
          url: 'https://just-validate-api.herokuapp.com/submit',
          method: 'POST',
          data: values,
          async: true,
          callback: function (response) {
              alert('AJAX submit successful! \nResponse from server:' + response)
          },
          error: function (response) {
              alert('AJAX submit error! \nResponse from server:' + response)
          }
      });
    },
        
  invalidFormCallback: function (errors) {
      console.log(errors);
  },
});

// BUTTON CLICK
function sendForm(event) {
  event.preventDefault();
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

  const formPersonal = document.querySelector('.personal');
  formPersonal.style.display = 'none';
  const formJob = document.querySelector('.job');
  formJob.style.display = 'none';
  const formAnswer = document.querySelector('.answer');
  formAnswer.style.display = 'block';

  // newAnswer.style.backgroundColor = 'yellow';
  // newAnswer.innerText = `asdasdasdsads`;
}

const btnSend = document.querySelector('#form__send');
btnSend.addEventListener('click', sendForm);

function clearForm(event) {
  event.preventDefault();
  const formAnswer = document.querySelector('.answer');
  formAnswer.style.display = 'none';
  const formPersonal = document.querySelector('.personal');
  formPersonal.style.display = 'block';
  const formJob = document.querySelector('.job');
  formJob.style.display = 'block';
}

const btnClear = document.querySelector('#form__clear');
btnClear.addEventListener('click', clearForm);
