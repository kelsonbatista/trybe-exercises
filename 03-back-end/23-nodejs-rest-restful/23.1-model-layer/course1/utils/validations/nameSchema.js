const Joi = require("joi");
// const express = require("express");
const md = require("../messageDictionary");

const nameSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .pattern(/^[a-zA-Z]+$/) //(new RegExp('^[a-zA-Z0-9]{3,30}+$')),
    .min(3)
    .max(30)
    .messages({
      "string.min": md.FORMAT_FIRSTNAME,
      "string.max": md.FORMAT_FIRSTNAME,
      "any.required": md.REQUIRED_FIRSTNAME,
    }),
  middleName: Joi.string()
    .pattern(/^[a-zA-Z]+$/) //(new RegExp('^[a-zA-Z0-9]{3,30}+$')),
    .min(0)
    .max(30)
    .messages({
      "string.min": md.FORMAT_MIDDLENAME,
      "string.max": md.FORMAT_MIDDLENAME,
      "any.required": md.FORMAT_MIDDLENAME,
    }),
  lastName: Joi.string()
    .required()
    .pattern(/^[a-zA-Z]+$/) //(new RegExp('^[a-zA-Z0-9]{3,30}+$')),
    .min(3)
    .max(30)
    .messages({
      "string.min": md.FORMAT_LASTNAME,
      "string.max": md.FORMAT_LASTNAME,
      "any.required": md.REQUIRED_LASTNAME,
    }),
});

module.exports = nameSchema;
