const userModel = require('../models/usermodel')
const objectID = require('mongoose').Types.ObjectId

// Affiche tout les utilisateurs
exports.getAllUsers = async (req, res, next) => {
    const users = await userModel.find().select('-password')
    //afficher tout mais pas le password
    res.status(200).json(users)
}

//Afficher un seul utilisateur
exports.userInfo = async (req, res) => {
    if (!objectID.isValid(req.params.id)) {
        return res.status(400).send("ID unkonwn:" + req.params.id)
    }
    else {
        userModel.findById(req.params.id, (error, docs) => {
            if (!error) {
                res.status(200).send(docs)
            } else {
                console.log("ID unkonwn" + error);
            }
        }).select('-password')
    }
}

// modification de l'utilisateur
exports.updateUser = async (req, res) => {
    if (!objectID.isValid(req.params.id)) {
        return res.status(400).send("ID unkonwn:" + req.params.id)
    
        try {
            await userModel.findOneAndUpdate(
                {_id:req.params.id},
                {
                    $set:{
                        bio:req.body.bio
                    }
                }
            )
        } catch (error) {
            
        }
    }
}