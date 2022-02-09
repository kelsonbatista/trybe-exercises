const {encode, decode} = require('./practice734');

describe('Practice 73-4', () => {

  it('Verifique se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  
  it('Verifique se na função encode as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  });

  it('Verifique se na função decode os números 1, 2, 3, 4 e 5 são convertidos em a, e, i, o e u, respectivamente', () => {
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  });

  it('Verifique se demais letras e números não são convertidos', () => {
    expect(encode('hi there!')).toBe('h3 th2r2!');
  });

  it('Verifique se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('hi there!')).toHaveLength(9);
  });

});
