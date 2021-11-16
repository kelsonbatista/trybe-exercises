const myCounter = require('../src/myCounter');

describe('Requisito 8', () => {

it('Verifica se existe função', () => {
  expect(typeof myCounter).toBe('function');
});

it('Verifica se a função está definida para retorno', () => {
  expect(myCounter()).toBeDefined();
});

});
