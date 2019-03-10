// import mongoose from "mongoose";
// const m = require('mongoose')
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/tajDevDb',{ useNewUrlParser: true })
    .then(() => {
        console.log('connected to mongodb');
    })
    .catch(er => console.log(er));
const customerSchema = new mongoose.Schema({
    name:{ type:String, default:""},
    mobile:{type: String},
    address:{type:String,default:""},
    orders:[String],
    payments:[String],
    lastChallanDate:{type:Date},
    overDue:String
});
const challanSchema= new mongoose.Schema({
    dateCreated:{type:Date, default:Date.now()}
});
const bricks = new mongoose.Schema({
    name:{type:String},
    quality:{
        type:String,
        enum:['type1','type2','type3','type4','type5','none'],
        default:'none'
    },
    price:{type:String}
});
