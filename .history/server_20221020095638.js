const express = require('express')
const db=require('./config/db')
//le lien vers notre variable d'environnement
require('dotenv').config({ path: './config/.env' })
const app = express()


//lancement du server
app.listen(process.env.PORT, () => {
    console.log(`Pret au port ${process.env.PORT}`)
})