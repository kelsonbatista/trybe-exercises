const numbers = require('../src/numbers');

describe('Requisito 2', () => {

  it('Verifica se existe função', () => {
    expect(typeof numbers).toBe('function');
  });

  it('Verifica se a função está definida', () => {
    expect(numbers()).toBeDefined();
  });

  it('Verifica se o array [2, 4, 6, 3] retorna true', () => {
    expect(numbers([2, 4, 6, 3])).toBe(true);
  });

  it('Verifica se o array [2, 4, "6", 3] retorna false', () => {
    expect(numbers([2, 4, '6', 3])).toBe(false);
  });

});