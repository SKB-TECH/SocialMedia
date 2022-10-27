const router = require('express').Router()
const postControl = require('../controllers/post.comtroller')

// read post
router.get('/', postControl.readPost)
// create
router.post('/', postControl.createPost)
// update post
router.put('/:id', postControl.updatePost)
// delete post
router.delete('/:id', postControl.deletePost)
// like post
router.patch('/like-post/:id', postControl.likePost)
// unlike post
router.patch('/unlike-post/:id', postControl.unlikePost)

// la gestion des commentaires
// new commentaires
router.patch('/comment-post/:id', postControl.postComments)
// update comments
router.patch('/comment-edit/:id', postControl.editComments)
// delete Comment
router.patch('/comment-delete/:id', postControl.deleteComments)

module.exports = router