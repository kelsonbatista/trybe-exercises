const average = require('../src/average');

describe('Requisito 1 - Projeto JS Unit Tests', () => {

  it('Verifica se existe a função', () => {
    expect(typeof average).toBe('function');
  });

  it('Verifica se a media dos valores [2, 4, 6, 2] retorna 4', () => {
    expect(average([2, 4, 6, 2])).toBe(4);
  });

  it('Verifica se a media dos valores [2, 4, 6, 3] retorna 4', () => {
    expect(average([2, 4, 6, 3])).toBe(4);
  });

  it('Verifica se a media dos valores [2, 4, 6, 1] retorna 3', () => {
    expect(average([2, 4, 6, 1])).toBe(3);
  });

});
