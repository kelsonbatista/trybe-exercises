const readline = require('readline-sync');
const fs = require('fs').promises;

async function readFile() {
  try {
    const fileName = readline.question('Type the file you wish to read: ');
    const rawFile = await fs.readFile(fileName, 'utf-8');
    // const newFile = JSON.parse(rawFile);
    console.log(rawFile);
  } catch(error) {
    console.log(`Arquivo inexistente. Error: ${error}`);
  }
}

readFile();
