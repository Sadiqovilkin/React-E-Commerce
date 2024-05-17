const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String, 
    salePrice:Number, 
    costPrice:Number, 
    imgSrc:String, 
    discountPercentage:Number, 
    description:String, 
    categoryId:String, 
    stock:Number
    
},{timestamps:true});


module.exports =ProductSchema