const circle = require('../src/circle');

describe('Requisito 4', () => {

  it('Verifica se existe função', () => {
    expect(typeof circle).toBe('function');
  });

  // it('Verifica se a função está definida para retorno', () => {
  //   expect(circle()).toBeDefined();
  // });

  it('Verifica se o valor radio 10 retorna {10, 314, 62.80}', () => {
    expect(circle(10)).toBe('{10, 314, 62.80}');
  });

  it('Verifica se não for especificado o raio retorna undefined', () => {
    expect(circle()).toBeUndefined();
  });

  it('Verifica se o raio não for do tipo número retorna undefined', () => {
    expect(circle('10')).toBeUndefined();
  });


});