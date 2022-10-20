const express = require('express')
const db=require('./config/db')
const userRoutes
//le lien vers notre variable d'environnement
require('dotenv').config({ path: './config/.env' })
const app = express()

// les routes
app.use('/api/user',userRoutes)


//lancement du server
app.listen(process.env.PORT, () => {
    console.log(`Pret au port ${process.env.PORT}`)
})