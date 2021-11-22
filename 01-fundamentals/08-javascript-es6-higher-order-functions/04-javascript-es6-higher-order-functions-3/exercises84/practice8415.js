const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  // escreva seu código aqui
  return names.reduce((accWord, word) => {
    return accWord + word.toLowerCase().split('').reduce((accLetter, letter) => {
      if (letter === 'a') return accLetter + 1;
      return accLetter;
    }, 0)
  }, 0);
}

console.log(containsA());
