const createMenu = require('../src/createMenu');

describe('Requisito 9', () => {

it('Verifica se existe função', () => {
  expect(typeof createMenu).toBe('function');
});

it('Verifica se a função não receber nenhum parâmetro retorna undefined', () => {
  expect(createMenu()).not.toBeDefined();
});

it('Verifica se a função retorna um objeto', () => {
  expect(typeof createMenu('Arya')).toEqual('object');
});

it('Verifica se ao receber o nome do personagem "Arya" retorna um array de objetos corretamente', () => {
  expect(createMenu('Arya')).toEqual([
    {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.']
    }
  ]);
});

});
