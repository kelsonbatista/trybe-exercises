const createMenu = require('../src/restaurant');

describe('Requisito 10', () => {

it('Verifica se existe função', () => {
  expect(typeof createMenu).toBe('function');
});

it('Verifica se a função não receber nenhum parâmetro retorna undefined', () => {
  expect(createMenu()).not.toBeDefined();
});

it('Verifica se a função retorna um objeto', () => {
  expect(typeof createMenu('Arya')).toEqual('object');
});

it('Verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu', () => {
  expect(createMenu('Arya')).toEqual([
    {
      fetchMenu: 'Arya Stark',
      phrases: ['Not today', 'A girl has no name.']
    }
  ]);
});

it('Verificase "objetoRetornado.fetchMenu()" retorna um objeto cujas chaves são somente food e drink', () => {
  expect(createMenu('Arya')).toEqual([
    {
      food: 'Arya Stark',
      drink: ['Not today', 'A girl has no name.']
    }
  ]);
});

it('Verifica se "objetoRetornado.consumption", após a criação do menu, retorna um array vazio.', () => {
  expect(createMenu()).toEqual('object');
});

});
