const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')

// le lien pour la creation d'un nouveau tuilisateur
router.post('/register', authController.signUp)

// autres action sur utilisateur
router.get('/', userController.getAllUsers)
router.get('/:id', userController.userInfo)
router.put('/:id', userController.updateUser)
router.delete('/:id',userController.)
//exportation pour l'utilisation 
module.exports = router