//import le model de la collection
const userModel = require('../models/usermodel')


// Inscription d'un nouveau utilisateur
exports.signUp = async (req,res) => {
    const {pseudo,email,password}=req.body
    try {
        const user=await userModel.create ({pseudo,email,password})
        res.status(200)
    } catch (error) {
        
    }
}