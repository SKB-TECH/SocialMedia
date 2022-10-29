//import le model de la collection
const userModel = require('../models/usermodel')
const { signupError, signInError } = require('../utils/errors')
const jwt = require('jsonwebtoken')
const { json } = require('body-parser')

//generation du toke
const maxAge = 1 * 24 * 60 * 60 * 1000

const createToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN, {
        expiresIn: maxAge
    })
}

// Inscription d'un nouveau utilisateur
exports.signUp = async (req, res) => {
    const { pseudo, email, password } = req.body
    try {
        const user = await userModel.create({ pseudo, email, password })
        res.status(200).json({ user: user._id })
    } catch (error) {
        const errors = signupError(error)
        res.status(200).send({ errors })
    }
}
// Authentification de l'utilisateur
exports.signIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge })
        res.status(200).json({ user: user._id })

    } catch (err) {
        const errors = signInError(err)
        res.status(200).json({ errors })
    }
}

// Deconnexion de l'utilisateur
exports.logout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.redirect('/')
}

