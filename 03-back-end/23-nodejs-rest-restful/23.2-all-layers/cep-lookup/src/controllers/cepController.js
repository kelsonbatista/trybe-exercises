const express = require("express");
const cepService = require("../services/cepService");
const rescue = require("express-rescue");

// OBS: LEMBRAR QUE CONSULTA AO BANCO É SEMPRE ASSINCRONO, PORTANTO USAR SEMPRE ASYNC/AWAIT
// E AO RECEBER OBJ DE FORA (EX. REQ.BODY) PRECISA USAR PARSE DE STRING PARA JSON (APP.USE(EXPRESS.JSON())

const getCeps = async (req, res) => {
  const ceps = await cepService.allCeps();
  return res.status(200).json(ceps);
};

const getCepByNumber = async (req, res) => {
  const { cep } = req.params;
  const ceps = await cepService.cepByNumber(cep);
  // em vez de desestruturar pode pegar o array no json assim ceps[0]
  return res.status(200).json(ceps);
};

const addCep = async (req, res) => {
  const cepObj = req.body;
  const newCep = await cepService.addNewCep(cepObj);
  return res.status(200).json(newCep);
};

module.exports = {
  getCeps,
  getCepByNumber,
  addCep,
};
