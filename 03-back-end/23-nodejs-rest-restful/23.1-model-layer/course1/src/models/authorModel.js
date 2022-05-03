const connection = require("./connection");

// para injetar um valor que nao existe no objeto

const newSerialize = ({ id, firstName, middleName, lastName }) => {
  // filter para filtrar o middlename que nem todos possuem
  // join para transformar a array em uma string

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(" ");

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

// os campos da tabela estao em formato snake_case
// para o node, a melhor forma é trabalhar com o camelCase
// para isso criar uma função para converter

const serialize = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  };
};

const getAll = async () => {
  // desestruturação do array, pega somente o objeto necessários
  const [authors] = await connection.execute(
    "SELECT id, first_name, middle_name, last_name FROM authors"
  );

  // resposta em formato tradicional
  // return authors;

  // resposta em formato camelCase
  // puxar os dados no insomnia e observar as chaves do objeto
  // o getNewAuthor é a injecao de novo campo no objeto
  return authors.map(serialize).map(newSerialize);
};

const getAuthorById = async (id) => {
  const [author] = await connection.execute(
    "SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?",
    [id]
  );

  // verificar se o author é vazio
  if (author.length === 0) return null;

  return author.map(serialize).map(newSerialize);
};

const createAuthor = async (firstName, middleName, lastName) => {
  // as interrogações são os valores esperados enviados como parametros da função
  const newAuthor = await connection.execute(
    "INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)",
    [firstName, middleName, lastName]
  );
  return newAuthor;
};

module.exports = {
  getAll,
  getAuthorById,
  createAuthor,
};
