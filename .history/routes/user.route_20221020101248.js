const express = require('express')
const router = express.Router()


router.post('/register',authController.signUp)

module.expo