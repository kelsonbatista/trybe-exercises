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
