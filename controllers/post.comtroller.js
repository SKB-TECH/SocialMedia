const postModel = require("../models/postmodel");
const userModel = require("../models/usermodel");
const objectID = require("mongoose").Types.ObjectId;

// readPost
exports.readPost = (req, res) => {
    postModel.find((error, docs) => {
        if (!error) {
            res.send(docs);
        } else {
            console.log("Error to get data:" + error);
        }
    }).sort({ createdAt: -1 });
};

// createPost
exports.createPost = async (req, res) => {
    const newPost = new postModel({
        posterId: req.body.posterId,
        message: req.body.message,
        video: req.body.video,
        likers: [],
        comments: [],
    });
    try {
        const post = await newPost.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(400).send(error);
    }
};

// updatePost
exports.updatePost = async (req, res) => {
    if (!objectID.isValid(req.params.id))
        return res.status(400).send("ID unkonwn:" + req.params.id);
    else {
        const update = {
            message: req.body.message,
        };
        postModel.findByIdAndUpdate(
            req.params.id,
            { $set: update },
            { new: true },
            (error, docs) => {
                if (!error) {
                    res.status(200).send({ docs });
                } else console.log("Update failed " + error);
            }
        );
    }
};

// deletePost
exports.deletePost = async (req, res) => {
    if (!objectID.isValid(req.params.id))
        return res.status(400).send("ID unkonwn:" + req.params.id);
    else {
        const update = {
            message: req.body.message,
        };
        postModel.findByIdAndDelete(req.params.id, (error, docs) => {
            if (!error) {
                res.status(200).send({ docs });
            } else console.log("Delete data failed " + error);
        });
    }
};

// function like post
exports.likePost = async (req, res) => {

    const userId = req.body.id;
    const postId = req.params.id;
    if (!objectID.isValid(postId))
        return res.status(400).send("ID unkonwn:" + postId);
    try {

        // update for collection post
        const newPost = await postModel.findByIdAndUpdate(postId, { $addToSet: { likers: userId } }, { new: true })
        // user update
        const newUser = await userModel.findByIdAndUpdate(userId, { $addToSet: { likes: postId } }, { new: true })
        return res.status(201).json({ newUser })

    }
    catch (error) {
        return res.status(400).send(error)
    }
}

exports.unlikePost = async (req, res) => {
    const userId = req.body.id;
    const postId = req.params.id;
    if (!objectID.isValid(postId))
        return res.status(400).send("ID unkonwn:" + postId);
    try {
        // update for collection post
        const newPost = await postModel.findByIdAndUpdate(postId, { $pull: { likers: userId } }, { new: true })
        // user update
        const newUser = await userModel.findByIdAndUpdate(userId, { $pull: { likes: postId } }, { new: true })
        return res.status(201).json({ newUser })

    }
    catch (error) {
        return res.status(400).send(error)
    }
}

// les fonction pour la gestion des commentaires
exports.postComments = async (req, res) => {
    if (!objectID.isValid(req.params.id))
        return res.status(400).send("ID unkonwn:" + req.params.id);
    try {
        const commentPost = await postModel.findByIdAndUpdate(req.params.id, {
            $push: {
                comments: {
                    commentId: req.body.commentId,
                    commentPseudo: req.body.commentPseudo,
                    text: req.body.text,
                    timeStamp: new Date().getTime()
                }
            }
        }, { new: true }
        ).then(data => {
            return res.status(201).send({ data })
        })
    } catch (error) {
        res.status(400).send({ error: error })
    }
}

// 
exports.editComments = async (req, res) => {
    if (!objectID.isValid(req.params.id))
        return res.status(400).send("ID unkonwn:" + req.params.id);

    try {
        await postModel.findById(req.params.id)
            .then((docs) => {
                const theComment = docs.comments.find((comment) => {
                    comment._id.equals(req.body.commentId)
                })
                console.log(theComment)
                if (!theComment) res.status(400).send("Comment not found")
                else {

                    theComment.text = req.body.text
                    return docs.save((error) => {
                        if (!error) res.status(200).send(docs)
                        res.status(500).send(error)
                    })
                }
            })
    } catch (error) {
        console.log(error);
    }
}

exports.deleteComments = async (req, res) => {
    if (!objectID.isValid(req.params.id))
        return res.status(400).send("ID unkonwn:" + req.params.id);

    try {
        postModel.findByIdAndUpdate(
            req.params.id, {
            $pull: {
                comments: {
                    _id: req.body.commentId
                }
            }
        },{
            new: true
        }
            , (error, docs) => {
                if (!error) {
                    res.status(201).send(docs)
                } else {
                    res.status(400).send(error)
                }
            })
    } catch (error) {
        res.status(400).send(error)
    }

}
