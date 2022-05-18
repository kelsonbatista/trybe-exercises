const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "log_errors.txt");

const writeLogFile = (file) => {
  fs.appendFile(filePath, file, (err) => {
    if (err) console.log(err.message);
    else return;
  });
};

module.exports = writeLogFile;
