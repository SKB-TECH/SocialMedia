const express = require('express')
require('dotenv').config('/config/.env')
const app = express()

app.listen(5000, () => {
    console.log('pres au port 5000')
})