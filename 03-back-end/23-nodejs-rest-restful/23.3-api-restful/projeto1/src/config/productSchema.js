const Joi = require("joi");
const message = require("./messageDictionary.js");

const productSchema = Joi.object({
  name: Joi.string()
    .required()
    .pattern(new RegExp("^[s]*(.*?)[s]*$"))
    .min(3)
    .max(50)
    .messages({
      "string.min": message.FORMAT_PRODUCT_NAME,
      "string.max": message.FORMAT_PRODUCT_NAME,
      "any.required": message.REQUIRED_PRODUCT_NAME,
    }),

  brand: Joi.string()
    .required()
    .pattern(new RegExp("^[a-zA-Z0-9]+$"))
    .min(3)
    .max(50)
    .messages({
      "string.min": message.FORMAT_PRODUCT_BRAND,
      "string.max": message.FORMAT_PRODUCT_BRAND,
      "any.required": message.REQUIRED_PRODUCT_BRAND,
    }),
});

module.exports = productSchema;
