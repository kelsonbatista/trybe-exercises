const getCharacter = require('../src/getCharacter');

describe('Requisito 9', () => {

it('Verifica se existe função', () => {
  expect(typeof getCharacter).toBe('function');
});

it('Verifica se a função não receber nenhum parâmetro retorna undefined', () => {
  expect(getCharacter()).not.toBeDefined();
});

it('Verifica se a função retorna um objeto', () => {
  expect(typeof getCharacter('Arya')).toEqual('object');
});

it('Verifica se ao receber o nome do personagem "Arya" retorna um array de objetos corretamente', () => {
  expect(getCharacter('Arya')).toEqual([
    {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.']
    }
  ]);
});

});
