const mongoose = require("mongoose");


const CategorySchema = new mongoose.Schema({
    name: String, 
    
},{timestamps:true});

module.exports =CategorySchema