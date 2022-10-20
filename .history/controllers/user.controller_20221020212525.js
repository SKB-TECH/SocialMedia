const userModel = require('../models/usermodel')
const objetID = require('mongoose').Types.ObjectId

// Affiche tout les utilisateurs
exports.getAllUsers = async (req, res, next) => {
    const users=await userModel.find().select()
    res.status(200).
}