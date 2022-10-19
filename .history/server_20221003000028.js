const express = require('express')

//le lien vers notre variable d'environnement
require('dotenv').config()
const app = express()

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})