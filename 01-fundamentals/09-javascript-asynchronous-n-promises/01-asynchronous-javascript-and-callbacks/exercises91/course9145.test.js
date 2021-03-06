//  implementar uma função que espera um tempo e retorna a soma de dois números:

const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 500);
};

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(16);
      done();
    } catch (error) {
      done(error);
    }
  });
});
