const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const OrderSchemaValidation = Joi.object({
    userId:Joi.objectId(), 
    totalPrice:Joi.number(), 
    status:Joi.string(), 
    items:Joi.array()
});

module.exports = OrderSchemaValidation;