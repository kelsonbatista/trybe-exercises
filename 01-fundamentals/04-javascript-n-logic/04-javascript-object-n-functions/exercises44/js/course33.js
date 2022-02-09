// ex 4433

function biggerOfThree(a,b,c) {

  if((a > b) && (a > c)) {
    console.log('A é maior')
  } else if ((b > a) && (b > c)) {
    console.log('B é maior')
  } else {
    console.log('C é maior')
  }
}

biggerOfThree(10,12,19)