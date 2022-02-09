
// recebe string word e string ending. Verificar se é o final da palavra. end é sempre menor.


function checkWordEnding(word, ending) {

  // let splitWord = word.split('');
  // let splitEnding = ending.split('');
  // let checkOk = 0;

  // if(splitEnding.length < splitWord.length) {
  //   for (let i = splitEnding.length-1; i >= 0; i--) {
  //     for (let j = splitWord.length-1; j >= 0; j--) {
  //       if (splitEnding[i] === splitWord[j]) {
  //         checkOk += 1;
  //         splitWord.length -= 1;
  //         break;
  //       } else {
  //         break;
  //       }
  //     }
  //   }
  // }
  // if(splitEnding.length === checkOk) {
  //   console.log(true);  
  // } else {
  //   console.log(false);
  // }
  
  let splitWord = word.split('');
  let splitEnding = ending.split('');
  let control = true;
  for (let i = 0; i < splitEnding.length; i++) {
    if (splitWord[splitWord.length - splitEnding.length + i] != splitEnding[i]) {
      control = false;
    }
  }
}

checkWordEnding('fernando', 'ndo')