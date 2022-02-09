// Link com as funções do arquivo script.js, só é possivel devido ao
// uso do module.exports naquele arquivo.
const { soma, summationOf } = require('./script');

describe('Testes relativos a funcao soma', () => {
  it('Verificar se 1 + 2 retorna 3', () => {
    expect(soma(1, 2)).toBe(3);
  });

  it('Verificar se 0 + 0 retorna 0', () => {
    expect(soma(0, 0)).toBe(0);
  });

  it('Verificar se -5 + (-39) retorna -44', () => {
    expect(soma(-5, -39)).toBe(-44);
  });

  it('Verificar se 5.1 + 6.55 retorna 11.65', () => {
    const retorno = soma(5.1, 6.55);
    expect(Number(retorno.toFixed(2))).toBe(11.65);
  });
});

describe('Testes relativos a funcao summationOf', () => {
  test('Verificar se a função summationOf existe', () => {
    expect(typeof summationOf).toBe('function');
  });

  test('Verificar se a função summationOf retorna 1 para o parametro 1', () => {
    expect(summationOf(1)).toBe(1);
  });

  test('Verificar se a função summationOf retorna 6 para o parametro 3', () => {
    expect(summationOf(3)).toBe(6);
  });

  test('Verificar se a função summationOf retorna 15 para o parametro 5', () => {
    expect(summationOf(5)).toBe(15);
  });

  test('Verificar se a função summationOf retorna 21 para o parametro 6', () => {
    expect(summationOf(6)).toBe(21);
  });

  test("Verificar se a função summationOf retorna 'Valores nao numericos nao sao aceitos' para o parametro ''", () => {
    // Uso da Arrow Function para pegar a quebra do fluxo da chamada da função
    expect(() => {
      summationOf('');
    }).toThrow('Valores nao numericos nao sao aceitos');
  });
});
