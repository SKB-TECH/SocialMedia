const express = require('express')

//le lien vers notre variable d'environnement
require('dotenv').config('/config/.env')

const app = express()

app.listen(5000, () => {
    console.log('pres au port 5000')
})