const fs = require('fs').promises;

function readSimpsons() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((content) => JSON.parse(content));
}

function writeSimpsons(content) {
  return fs.writeFile('./simpsons.json', JSON.stringify(content));
}

module.exports = {
  readSimpsons,
  writeSimpsons,
}
