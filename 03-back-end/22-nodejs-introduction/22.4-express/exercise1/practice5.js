const fs = require('fs').promises;

async function getSimpsons() {
  try {
    const simpson = fs.readFile('simpsons.json', 'utf-8');
    console.log(simpson);
  } catch(error) {
    console.log(`Error: ${error}`);
  }
}
