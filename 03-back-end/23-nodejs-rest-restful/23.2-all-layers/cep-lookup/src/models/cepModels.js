const connection = require("../config/connection");

const getCeps = async () => {
  const [ceps] = await connection.execute(`SELECT * FROM cep_lookup.ceps`);
  return ceps;
};

const getCepByNumber = async (id) => {
  const [ceps] = await connection.execute(
    `SELECT * FROM cep_lookup.ceps WHERE ceps.cep = ${id}`
  );

  return ceps;
};

// A FUNÇÃO DEVE REALIZAR SOMENTE O QUE FOI DEFINIDO NO NOME
// OBS OS CAMPOS SÃO DEFINIDOS PARA PREVENIR SQL INJECTION
const addCep = async (cepObj) => {
  // QUANDO EXISTE ID ITERAVEL, TEM QUE PEGAR OS DADOS ATRAVES DO InsertId, mas aqui como nao tem esta preparado
  const { cep, logradouro, bairro, localidade, uf } = cepObj;
  const [data] = await connection.execute(
    `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)`,
    [cep, logradouro, bairro, localidade, uf]
  );

  const newCep = {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };

  return newCep;
};

module.exports = {
  getCepByNumber,
  addCep,
  getCeps,
};
