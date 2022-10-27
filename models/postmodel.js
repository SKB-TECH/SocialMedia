const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    posterId: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        trim: true,
        maxlength: 500
    },
    picture: {
        type: String,
    },
    video: {
        type: String
    },
    likers: {
        type: [String],
        required: true
    },
    comments: {
        type: [
            {
                commentId: String,
                commentPseudo: String,
                text: String,
                timeStamp: Number
            }
        ],
        required: true
    }
}, { timestamps: true })

const postModel = mongoose.model('post', postSchema)
module.exports = postModel;