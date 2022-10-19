const User = require('../models/user')

exports.getUsers = (req, res, next) => {
    User.find()
    .then(users => res.sta.json({ users }))
    .catch(err => console.log(err))
}