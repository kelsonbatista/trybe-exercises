const sum = require('./practice731.js');

describe('Teste Practice 7.3-1', () => {

  it('Requisito 1 - Verifica se sum(4, 5) retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Requisito 2 - Verifica se sum(0, 0) retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Requisito 3 - Verifica se sum(4, "5") retorna um erro', () => {
    expect(() => {sum(4, '5')}).toThrow('parameters must be numbers');
  });
});
