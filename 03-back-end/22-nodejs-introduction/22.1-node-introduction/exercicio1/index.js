const { execSync } = require('child_process');

const readlineSync = require('readline-sync'),
  scripts = ['IMC Calculator', 'Average Speed', 'Guess the number'],
  index = readlineSync.keyInSelect(scripts, 'Choose a script: ');

  if (index == 0) {
    const output = execSync('npm run imc', { encoding: 'utf-8' });
    console.log(output);
  } else if (index == 1) {
    const output = execSync('npm run speed', { encoding: 'utf-8' });
    console.log(output);
  } else if (index == 2) {
    const output = execSync('npm run raffle', { encoding: 'utf-8' });
    console.log(output);
  }
