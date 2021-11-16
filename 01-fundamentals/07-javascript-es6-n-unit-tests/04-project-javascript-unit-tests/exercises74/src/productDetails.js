const productDetails = (product1, product2) => {
  if (typeof product1 !== 'string' || typeof product2 !== 'string') {
    throw new Error('O nome do produto deve ser uma string');
  }
  const products = [
    {
      name: `${product1}`,
      details: {
        productId: `${product1}123`,
      }
    },
    {
      name: `${product2}`,
      details: {
        productId: `${product2}123`,
      }
    }
  ];
  return products;
}

module.exports = productDetails;
