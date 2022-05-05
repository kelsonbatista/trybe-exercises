const cepModels = require("../models/cepModels");

const allCeps = async () => {
  const ceps = await cepModels.getCeps();
  return ceps;
};

const cepByNumber = async (cep) => {
  const ceps = await cepModels.getCepByNumber(cep);
  return ceps;
};

const addNewCep = async (cepObj) => {
  const ceps = await cepModels.addCep(cepObj);
  return ceps;
};

module.exports = {
  allCeps,
  cepByNumber,
  addNewCep,
};
