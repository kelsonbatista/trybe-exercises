const readline = require('readline-sync');

restartLoop:
while (true) {
  for (var i=0, j=100000, x="test"; i < 1000; i++, j--, x+= ".") {

    console.log('----------------------- GUESS THE NUMBER -----------------------')
    const input = readline.questionInt('Enter a number (1-10): ');
    const num = Math.ceil(Math.random() * 10);

    if (input == num) console.log('Congrats! That\'s the correct number!')
    else console.log(`Uhh not this time! The number was ${num}`);

    const play = readline.question('Play again? (y/n): ');

    if (play == 'y') {
      continue restartLoop;
    } else {
      break;
    }

  }
  break;
}
