const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: String, 
    password: String,
    email: String, 
    profileImg: String, 
    balance: Number, 
    role: {
        type: String,
      enum: ['admin','super-admin','client','journalist']
    },
    basketItems: Array
},{timestamps:true});

module.exports =UserSchema