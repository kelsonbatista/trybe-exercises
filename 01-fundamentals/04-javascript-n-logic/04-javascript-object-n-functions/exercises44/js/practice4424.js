// array com nomes e retorne o que tem mais caracteres

function biggerName(array) {

  let bigger = 0;
  let biggerIndex = 0;

  for (let i in array) {
    if (array[i].length > bigger) {
      bigger = array[i].length;
      biggerIndex = i;
    }
  }
  console.log(array[biggerIndex]);

}

biggerName(['José', 'Robervaldo', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])