const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nom: {
        type: String,
        require: true
    },
    prenom: {
        type: String,
        require: true
    }
},{
    times
})