const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')

// creation d'un nouveau utilisateur et login
router.post('/register', authController.signUp)
router.post('/login', authController.signIn)
router.get(/)

// autres action sur utilisateur
router.get('/', userController.getAllUsers)
router.get('/:id', userController.userInfo)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
router.patch('/follow/:id', userController.follow)
router.patch('/unfollow/:id', userController.unfollow)

//exportation pour l'utilisation 
module.exports = router