const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const MessageSchemaValidation = Joi.object({
    name: Joi.string().min(3).required(),
    salePrice:Joi.number().required(), 
    costPrice:Joi.number().required(), 
    imgSrc:Joi.string().uri().required(), 
    discountPercentage:Joi.number().required(), 
    description:Joi.string().min(3).required(), 
    categoryId:Joi.string().required(), 
    stock:Joi.number().required()

});

module.exports = MessageSchemaValidation;