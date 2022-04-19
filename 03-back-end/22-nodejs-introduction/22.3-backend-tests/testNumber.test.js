const { expect } = require('chai');
const testNumber = require('./testNumber.js');

describe('Teste de número positivo, negativo ou neutro', () => {
  const response = testNumber(5);

  it('Testa se número é positivo', () => {
    expect(response).to.be.a('string');
  })
})