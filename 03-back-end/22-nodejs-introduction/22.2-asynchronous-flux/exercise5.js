const readline = require('readline-sync');
const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promisse.all', '!!!'];
  const files = strings.map((string, index) => {
    fs.writeFile(`./file${index + 1}.txt`, string);
  });
  await Promise.all(files);

  // Leitura dos arquivos criados
  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt'
  ];

  const filesContent = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, 'utf-8'))
  );

  const newFile = filesContent.join(' ');
  await fs.writeFile('./fileAll.txt', newFile);
}

arrayToFile();

