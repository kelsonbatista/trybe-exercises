const createStudent = require('../src/createStudent');

describe('Requisito 5', () => {

  it('Verifica se existe função', () => {
    expect(typeof createStudent).toBe('function');
  });

  it('Verifica se a função está definida para retorno', () => {
    expect(createStudent()).toBeDefined();
  });

  it('Verifica se com o nome definido "Renato" retorna o objeto corretamente', () => {
    expect(createStudent('Renato')).toEqual({
      name: 'Renato',
      feedback: 'Eita pessoa boa!',
    });
  });

});
