// const axios = require('axios');
const fs = require('fs').promises;

// LISTA TODOS OS ITENS
fs.readFile('./simpsons.json', 'utf-8')
    .then((result) => JSON.parse(result))
    .then((simpsons) => simpsons.map(({ id, name }) => `${id} - ${name}` ))
    .then((strings) => strings.forEach((string) => console.log(string)));

// SELECIONAR SIMPSON POR ID
async function getSimpson(id) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((result) => JSON.parse(result))
    .then((simpsons) => simpsons.map(({ id, name }) => `${id} - ${name}` ));

  const selectSimpson = simpsons.find((simpson) => simpson.id == id);

  if (!selectSimpson) {
    throw new Error('id não encontrado');
  }
    return selectSimpson;
}

// getSimpson(3);

// SELECIONAR PERSONAGENS SEM O 10 E O 6
async function filterSimpsons() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((result) => JSON.parse(result));

  const newArray = simpsons.filter((simpson) => simpson.id != 10 && simpson.id != 6);
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));

}

//filterSimpsons();

//LER ARQUIVO SIMPSONS.JSON E CRIAR UM NOVO ARQUIVO COM OS ITENS DE 1 A 4
async function createNewFile() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((result) => JSON.parse(result));
  
  const simpsonsFamily = simpsons.filter((simpson) => [1,2,3,4].includes(Number(simpson.id)));
  console.log(simpsonsFamily, 'simpsonsFamily');
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

//createNewFile();

// LER O ARQUIVO SIMPSONS FAMILY E ADICIONAR UM ITEM
async function addNewItem() {
  const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((result) => JSON.parse(result));
  simpsonsFamily.push({ "id": "11", "name": "Nelson Muntz" });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

// addNewItem();

// SUBSTITUIR PERSONAGENS
async function replaceItem() {
  await fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((result) => JSON.parse(result))
    .then((simpsons) => simpsons.filter((simpson) => simpson.name != "Nelson Muntz"))
    .then((simpsons) => simpsons.concat({ "id": "12", "name": "Maggie Simpson"}))
    .then((newSimpsons) => fs.writeFile('./simpsonsFamily.json', JSON.stringify(newSimpsons)));
}

replaceItem();




// function character(id) {
  // try {
  //   // const result = await axios.get('./simpsons.json');
  //   const rawdata = fs.readFileSync('./simpsons.json');
  //   const data = JSON.parse(rawdata);
  //   // for (let i = 0; i < 10; i += 1) {
  //     console.log(`${data[id-1].id} - ${data[id-1].name}`);
  //   // }
  // } catch(error) {
  //   console.log(`id não encontrado`);
  // }
// }

// const itemsToRemove = [10, 6];
// let allData = [];

// function remove(items) {
//   try {
//     // const result = await axios.get('./simpsons.json');
//     const rawdata = fs.readFileSync('./simpsons.json');
//     const data = JSON.parse(rawdata);
//     for (let i = 0; i < 10; i += 1) {
//       allData.push(`${data[i].id} - ${data[i].name}`);
//     }
//     const dataFilter = allData.filter((singleData) => (
//       // items.forEach((item) => (
//         allData.indexOf(singleData) != items.forEach((item) => item)
//       // ))
//     ));
//     console.log(dataFilter);
//   } catch(error) {
//     console.log(`${error}`);
//   }
// }

// remove(itemsToRemove);
