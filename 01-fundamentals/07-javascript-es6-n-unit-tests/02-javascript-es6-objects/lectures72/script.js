const numeratorInput = document.querySelector('#numerator');
const denominatorInput = document.querySelector('#denominator');
const spanResult = document.querySelector('#result');
const calculateButton = document.querySelector('#calculateDivision');

function divideTwoNumbers(numerator, denominator) {
  // Se numerator e denominator são números
  // Se numerator ou denominator não forem números, eu quero que isso seja tratado como um erro
  if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
    // Código lance uma exceção
    throw new Error('Apenas números são permitidos');
  }

  return numerator / denominator;
}

window.onload = () => {
  calculateButton.addEventListener('click', () => {
    const numeratorValue = Number(numeratorInput.value);
    const denominatorValue = Number(denominatorInput.value);

    try {
      const result = divideTwoNumbers(numeratorValue, denominatorValue);
      spanResult.innerHTML = result;
    } catch(errorMessage) {
      spanResult.innerHTML = '';
      alert(errorMessage);
    }

    console.log('continua o código...');
  });
}
