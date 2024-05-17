const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const UserSchemaValidation = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(5).regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/).required(),
    email: Joi.string().email().required(),
    profileImg:Joi.string().uri().required(),
    balance:Joi.number().required(),
    role:Joi.string().validate([superadmin,admin,client]),
    basketItems:Joi.array()

});

module.exports = UserSchemaValidation;