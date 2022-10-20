const express = require('express')
const router = express.Router()


router.post('/register', authController.signUp)

//exportation pour l'utilisation 
module.exports = router