const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//EXERCICIO 1
function modifyObject(object, key, value) {
  object[key] = value;
  return object;
}
console.log(modifyObject(lesson2, 'turno', 'noite'));

//EXERCICIO 2
// function listKeys(obj) {
//   return Object.keys(obj);
// }
const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

//EXERCICIO 3
function showSize(obj) {
  return Object.keys(obj).length;
}
console.log(showSize(lesson3));

//EXERCICIO 4
const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson1));

//EXERCICIO 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

//EXERCICIO 6
const totalStudents = (obj) => {
  let sum = 0;
  for(let i in obj) {
    sum += obj[i].numeroEstudantes;
  }
  return sum;
}
console.log(totalStudents(allLessons));

//EXERCICIO 7
const getValue = (obj, number) => Object.values(obj)[number];
console.log(getValue(lesson3, 3));

//EXERCICIO 8
const verifyPair = (obj, key, value) => { return (obj[key] === value) ? true : false; }
console.log(verifyPair(lesson3, 'turno', 'noite'));

//BONUS 1
const countStudents = (obj) => {
  let sum = 0;
  for(let i in obj) {
    if (obj[i].materia === 'Matemática') sum += obj[i].numeroEstudantes;
  }
  return sum;
}
console.log(countStudents(allLessons));

//BONUS 2
const createReport = (obj, name) => {
  const theLessons = [];
  let sum = 0;
  for(let i in obj) {
    if (obj[i].professor === name) {
      theLessons.push(obj[i].materia);
      sum += obj[i].numeroEstudantes;
    }
  }
  return { professor: name, aulas: theLessons, estudantes: sum};
}
console.log(createReport(allLessons, 'Maria Clara'));
