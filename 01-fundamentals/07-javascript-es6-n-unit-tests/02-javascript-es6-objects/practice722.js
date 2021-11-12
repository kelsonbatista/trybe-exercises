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

function modifyObject(object, key, value) {
  object[key] = value;
  return object;
}
console.log(modifyObject(lesson2, 'turno', 'noite'));

function listKeys(obj) {
  return Object.keys(obj);
}
console.log(listKeys(lesson1));

function showSize(obj) {
  return Object.keys(obj).length;
}
console.log(showSize(lesson3));

function listValues(obj) {
  return Object.values(obj);
}
console.log(listValues(lesson1));
