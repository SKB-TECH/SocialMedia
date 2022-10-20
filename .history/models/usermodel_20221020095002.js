const mongoose = require('mongoose');
const { isEmail } = require('validator')

const userSchema = mongoose.Schema({
    pseudo: {
        type: String,
        maxLength: [55, "Le pseudo doit contenir au maximum 55 caracteres"],
        minLength: [4, "Le pseudo doit contenir au minimum 4 caracteres"],
        required: true,
        unique: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true

    },
    password:{
        type: String,
        required: true,
        maxLength: [, "Le pseudo doit contenir au maximum 55 caracteres"],
        minLength: [4, "Le pseudo doit contenir au minimum 4 caracteres"],
        validate: [isEmail],
        lowercase: true,
        unique: true,
        trim: true
    }
})

