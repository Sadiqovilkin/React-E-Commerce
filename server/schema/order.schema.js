const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId:String, 
    totalPrice:String, 
    status:String, 
    items:Array 
},{timestamps:true});

module.exports =OrderSchema