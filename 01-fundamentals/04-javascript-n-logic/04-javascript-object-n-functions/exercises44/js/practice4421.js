// split , join e reverse

// Palíndromo

function palindromeCheck(myWord) {

  let lowerCase = myWord.toLowerCase();
  let reverseWord = lowerCase.split('').reverse().join('');
  if (lowerCase === reverseWord) {
    console.log(true);
  } else {
    console.log(false);
  }

}

palindromeCheck('socorram me em Marrocos')