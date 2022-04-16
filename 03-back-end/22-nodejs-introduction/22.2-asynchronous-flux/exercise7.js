const { read } = require('fs');
const readline = require('readline-sync');
const fs = require('fs').promises;

async function replaceFile() {
  try {
    const file = readline.question('Type the file you wish to replace content: ');
    const newFile = await fs.readFile(file, 'utf-8');
    const input = readline.question('Word to be replaced: ');
    const output = readline.question('Word to replace in: ');
    if (newFile.includes(input)) {
      const destination = readline.question('Type the destination file: ');
      const replace = newFile.replace(new RegExp(input, 'g'), output);
      fs.writeFile(`./${destination}`, replace);
      console.log(`New text: ${replace}`);
      console.log('Word successfully replaced!');
    } else {
      console.log('Text does not exists. Word cannot be replaced.');
    }
  } catch(error) {
    console.log(`Non-existent file. Error: ${error}`);
  }
}

replaceFile();
