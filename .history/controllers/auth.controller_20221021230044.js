//import le model de la collection
const userModel = require('../models/usermodel')
const jwt =require('jsonwebtoken')

// Inscription d'un nouveau utilisateur
exports.signUp = async (req, res) => {
    const { pseudo, email, password } = req.body
    try {
        const user = await userModel.create({ pseudo, email, password })
        res.status(200).json({ user: user._id })
    } catch (error) {
        res.status(200).send({ error })
    }
}

// Authentification de l'utilisateur
exports.signIn = async (req, res) => {
    const {email,password}=req.body
    try {
        waaa
    } catch (error) {
        
    }
}

// Deconnexion de l'utilisateur
exports.logout = (req, res) => {

}