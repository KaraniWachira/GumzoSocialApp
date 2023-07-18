const Joi = require('joi');

const loginSchema = Joi.object({
    UserName: Joi.string().required(),
    // UserPassword: Joi.string().pattern(new RegExp("^[A-Za-z0-9]")).required()
    UserPassword: Joi.string().required()
  });

module.exports = loginSchema;