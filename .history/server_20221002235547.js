const express = require('express')

//le lien vers notre variable d'environnement
require('dotenv').config('/config/.env')

const app = express()
app.get('/',(rq,rp)=>{
    rp.se
})

app.listen(process.env.PORT, () => {
    console.log('pres au port 5000')
})