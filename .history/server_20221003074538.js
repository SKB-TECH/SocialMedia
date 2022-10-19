const express = require('express')
const mongoose = require('mongoose')

//le lien vers notre variable d'environnement
require('dotenv').config({ path: './config/.env' })
const app = express()

mongoose.connect('mongodb://localhost:27017/socialmedia')
    .then(res => console.log('connected to mongodb'))
    .cath

app.listen(process.env.PORT, () => {
    console.log(`Pret au port ${process.env.PORT}`)
})