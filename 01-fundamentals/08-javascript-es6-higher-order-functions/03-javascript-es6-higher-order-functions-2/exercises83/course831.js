const estudantes = ['maria', 'jose', 'joao', 'rubens', 'renata'];

const removeNome = (name, studentList) => studentList.filter((element) => element !== name);

const novaLista = removeNome('jose', estudantes);

console.log(novaLista);
