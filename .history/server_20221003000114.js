const express = require('express')

//le lien vers notre variable d'environnement
require('dotenv').config({ path: '/config/.env' })
const app = express()

app.listen(process.env.PORT, () => {
    console.log()
})