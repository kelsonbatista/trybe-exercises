const searchEmployee = require('./practice73B1.js');
describe('Practice 73 Bonus 1', () => {

  it('Verifica se o id não consta no cadastro e retorna o erro "ID não identificada"', () => {
    expect(searchEmployee('4678-2','firstName')).toThrow('ID não identificada');
  });

  it('Verifica se a informação não existe e retorna o erro "Informação indisponível"', () => {
    expect(searchEmployee('9999-9','')).toThrow('Informação indisponível');
  });

});
