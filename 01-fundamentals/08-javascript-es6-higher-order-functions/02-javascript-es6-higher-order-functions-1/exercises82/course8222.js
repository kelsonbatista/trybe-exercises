const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  return names.find((element) => element.length === 5);
}

// console.log(names.find((element) => element.length === 5));
console.log(findNameWithFiveLetters());
