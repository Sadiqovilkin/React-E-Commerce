const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const MessageSchemaValidation = Joi.object({
    fullName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    title: Joi.string().min(5).required(),
    message:Joi.string().min(5).required(),


});

module.exports = MessageSchemaValidation;