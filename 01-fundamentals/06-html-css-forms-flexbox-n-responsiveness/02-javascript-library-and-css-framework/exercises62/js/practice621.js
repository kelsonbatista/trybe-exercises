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
new window.JustValidate('.js-form', {
  rules: {
    email: {
      required: true,
      email: true,
      remote: {
          url: 'https://just-validate-api.herokuapp.com/check-correct',
          sendParam: 'email',
          successAnswer: 'OK',
          method: 'GET'
      }
    },
    name: {
      required: true,
      maxLength: 30,
      minLength: 4,
    },
  },

  messages: {
    email: {
      remote: 'Email already exist',
      email: 'Email not valid!'
    },
    name: {
      required: 'Digite seu nome',
      maxLength: 'Limite excedido!',
      minLength: 'Nome muito curto!',
    },
  },

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