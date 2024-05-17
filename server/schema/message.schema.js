const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    fullName:String, 
    email:String, 
    title:String, 
    message:String
},{timestamps:true});

module.exports =MessageSchema