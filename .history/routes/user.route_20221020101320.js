const express = require('express')
const router = express.Router()

// le lien pour la creation d 'u
router.post('/register', authController.signUp)


//exportation pour l'utilisation 
module.exports = router