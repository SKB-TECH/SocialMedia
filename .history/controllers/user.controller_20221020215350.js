const userModel = require('../models/usermodel')
const objetID = require('mongoose').Types.ObjectId

// Affiche tout les utilisateurs
exports.getAllUsers = async (req, res, next) => {
    const users = await userModel.find().select('-password')
    //afficher tout mais pas le password
    res.status(200).json(users)
}

//Afficher un seul utilisateur


exports.userInfo=async(req,res)=>{
    console.log(req.params.id)
    if
}