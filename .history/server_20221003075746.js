const express = require('express')
const mongoose = require('mongoose')

const usersRoutes = require('./routes/')

//le lien vers notre variable d'environnement
require('dotenv').config({ path: './config/.env' })
const app = express()

mongoose.connect('mongodb://localhost:27017/socialmedia')
    .then(res => console.log('connected to mongodb', res))
    .catch(error => console.log(error))

app.listen(process.env.PORT, () => {
    console.log(`Pret au port ${process.env.PORT}`)
})