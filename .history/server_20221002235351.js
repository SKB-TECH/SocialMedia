const express = require('express')

//le lien vers notre variable d'environnement
require('dotenv').config('/config/.env')

const app = express()

app.listen(pro, () => {
    console.log('pres au port 5000')
})