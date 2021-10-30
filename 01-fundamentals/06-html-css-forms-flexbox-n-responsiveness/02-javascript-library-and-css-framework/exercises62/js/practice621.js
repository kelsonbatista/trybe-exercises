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
document.addEventListener('DOMContentLoaded', function () {
  let picker = new Pikaday({ 
    field: document.getElementById('form__start-date'),
    format: 'DD-MM-YYYY',
  });
});

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

  tooltip: {
    fadeOutTime: 4000, // default value - 5000 
    fadeOutClass: '.hide', // default value - 
    selectorWrap: '.tooltip-wrapper', // default value - just-validate-tooltip-containerjust-validate-tooltip-hide
  },

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
function formSend(event) {
  // event.preventDefault();
}

let btnSend = document.querySelector('#form__send');
btnSend.addEventListener('click', formSend);
