const mongoose = require('mongoose');
const {isEmail}=require('validator')

const userSchema=mongoose.Schema({
    pseudo:{
        type:String,
        maxLength:[55,"Le pseudo doit contenir au plus 55 caracteres"],
        minLength:[3,"Le pseudo doit contenir au plus 55 caracteres"],
        required:true
    }
})

