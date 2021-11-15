const myFizzBuzz = require('./practice733');

describe('Practice 73-3', () => {

  it('Verifica se um número divisível por 3 e 5 e verifique se o retorno é fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Verifica se um número divisível por 3 e verifique se o retorno é fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Verifica se um número divisível por 5 e verifique se o retorno é buzz', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  it('Verifica se um número não é divisível por 3 e 5 e verifique se o retorno é o próprio número', () => {
    expect(myFizzBuzz(17)).toBe(17);
  });

  it('Verifica se o parâmetro não é do tipo número e verifique se o retorno é false', () => {
    expect(myFizzBuzz('17')).toBe(false);
  });

});
