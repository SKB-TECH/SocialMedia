const mongoose = require('mongoose');
const { isEmail } = require('validator')
const bcrypt=require('bcrypt')

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
    password: {
        type: String,
        required: true,
        maxLength: [12, "Le password doit contenir au maximum 12 caracteres"],
        minLength: [6, "Le password doit contenir au minimum 6 caracteres"],
        lowercase: true,
        unique: true,
        trim: true
    },
    picture:{
        type:String,
        default:"./uploads/profil/random-user.png"
    },
    bio: {
        type: String,
        max: 1024
    },
    followers: {
        type: [String]
    },
    following: {
        type: [String]
    },
    likes: {
        type: [String]
    }
}, { timestamps: true })

// une fonction pour cripte le mot de passe avant enregistrement
fs

const userModel = mongoose.model("user", userSchema)
module.exports = userModel