const mongoose = require('mongoose');
const {isEmail}=require('validator')

const userSchema=mongoose.Schema({
    pseudo:{
        type:String,
        maxLength:[55,"Le pseudo doit contenir "],
        minLength:[],
        required:true
    }
})

