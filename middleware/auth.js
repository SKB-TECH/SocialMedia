// cette fonction va permettre la verification de la Validite de token de l'utilisateur
const jwt = require('jsonwebtoken')
const userModel = require('../models/usermodel')

//cette fonction va verifie si l'utilisateur possede un token valide\
exports.checkUser = (req, res, next) => {
    const tokens = req.cookies.jwt
    if (tokens) {
        jwt.verify(tokens, process.env.TOKEN, async (error, decode) => {
            if (error) {
                res.locals.user = null
                res.cookies('jwt', '', { maxAge: 1 })
                next()
            }
            else {
                let user = await userModel.findById(decode.id)
                res.locals.user = user
                console.log(user)
                next()
            }
        })
    }
    else {
        res.locals.user = null
        next()
    }
}

// verifie comme c'est la premiere esk il existe dans la bdd du system

exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, process.env.TOKEN, async (error, decode) => {
            if (error) {

            }

        })
    }
}