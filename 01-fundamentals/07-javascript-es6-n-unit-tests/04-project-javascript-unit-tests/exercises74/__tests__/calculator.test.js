const {calculator, arrayGenerator} = require('../src/calculator');

describe('Requisito 7', () => {

  it('Verifica se existe função', () => {
    expect(typeof calculator).toBe('function');
    expect(typeof arrayGenerator).toBe('function');
  });

  it('Verifica se a função está definida para retorno', () => {
    expect(calculator()).toBeDefined();
    expect(arrayGenerator()).toBeDefined();
  });

  it('Verifica se a função calculator com valores (1, 2) retorna o objeto { sum: 3, mult: 2, div: 0, sub: -1 }', () => {
    expect(calculator(1, 2)).toEqual('{ sum: 3, mult: 2, div: 0, sub: -1 }');
  });

  it("Verifica se a função arrayGenerator com o tipo 'keys' e obj { sum: 3, mult: 2, div: 0, sub: -1 } retorna o objeto com as chaves", () => {
    expect(arrayGenerator('keys', { sum: 3, mult: 2, div: 0, sub: -1 })).toEqual([ 'sum', 'mult', 'div', 'sub' ]);
  });

  it("Verifica se a função arrayGenerator com o tipo 'values' e obj { sum: 3, mult: 2, div: 0, sub: -1 } retorna o objeto com os valores", () => {
    expect(arrayGenerator('values', { sum: 3, mult: 2, div: 0, sub: -1 })).toEqual([ 3, 2, 0, -1 ]);
  });

  it("Verifica se a função arrayGenerator com o tipo 'entries' e obj { sum: 3, mult: 2, div: 0, sub: -1 } retorna o objeto com as entradas", () => {
    expect(arrayGenerator('entries', { sum: 3, mult: 2, div: 0, sub: -1 })).toEqual([ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 0 ], [ 'sub', -1 ] ]);
  });

});
