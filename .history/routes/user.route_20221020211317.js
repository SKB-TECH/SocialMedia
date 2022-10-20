const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const userController=require

// le lien pour la creation d'un nouveau tuilisateur
router.post('/register', authController.signUp)

// autres action sur utilisateur

//exportation pour l'utilisation 
module.exports = router