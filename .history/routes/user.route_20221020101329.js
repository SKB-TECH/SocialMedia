const express = require('express')
const router = express.Router()

// le lien pour la creation d'un nouveau tuilisateur
router.post('/register', authController.signUp)


//exportation pour l'utilisation 
module.exports = router