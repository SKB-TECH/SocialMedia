const User = require('../models/user')

exports.getUsers = (req, res, next) => {
    User.find().the
}