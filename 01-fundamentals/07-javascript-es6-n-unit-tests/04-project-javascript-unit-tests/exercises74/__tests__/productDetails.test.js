const productDetails = require('../src/productDetails');

describe('Requisito 6', () => {

  it('Verifica se existe função', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Verifica se a função está definida para retorno', () => {
    expect(productDetails()).toBeDefined();
  });

  it('Verifica se não for string retorna o erro "O nome do produto deve ser uma string"', () => {
    expect(productDetails(15, 'Máscara')).toThrow('O nome do produto deve ser uma string');
  });

  it('Verifica se ao receber 2 strings retorna um array de objetos corretamente', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([
      {
        name: 'Alcool gel',
        details: {
          productId: 'Alcool gel123',
        }
      },
      {
        name: 'Máscara',
        details: {
          productId: 'Máscara123',
        }
      }
    ]);
  });

});
