const mongoose = require('mongoose');
const { isEmail } = require('validator')

const userSchema = mongoose.Schema({
    pseudo: {
        type: String,
        maxLength: [55, "Le pseudo doit contenir au maximum 55 caracteres"],
        minLength: [4, "Le pseudo doit contenir au minimum  caracteres"],
        required: true
    }
})

