const techlist = (list, name) => {
if (list.length === 0 || list[0] === '') return 'Vazio!';
const newList = [];
  for (let i = 0; i < list.length; i += 1) {
    newList.push({
      tech: list[i],
      name: name,
    });
  }
  return newList.sort();
};
// console.log(techlist('', 'Jose'));
module.exports = techlist;
