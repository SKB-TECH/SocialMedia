const express = require('express')
import { resolve6 } from './node_modules/@types/node/dns.d';
const mongoose = require('mongoose')

//le lien vers notre variable d'environnement
require('dotenv').config({ path: './config/.env' })
const app = express()

mongoose.connect('mongodb://localhost:27017/socialmedia')
    .then(res => console.log('connected to mongodb', resolve6))
    .catch(error => console.log(error))

app.listen(process.env.PORT, () => {
    console.log(`Pret au port ${process.env.PORT}`)
})