const Joi = require('joi');


const CategorySchemaValidation = Joi.object({
    name: Joi.string().required(),


});

module.exports = CategorySchemaValidation;