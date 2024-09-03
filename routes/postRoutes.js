const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Route to render the posts page
router.get('/posts', postController.getPosts);

// Route to handle form submission for adding a post
router.post('/posts/add', postController.addPost);
// Route to get post by id
router.get('/postsById/:id',postController.getPostById);
// delete post
router.delete('/posts/:id/postDelete',postController.deletePost);
// get all posts by user
router.get('/postsByUser/:author',postController.getAllPostsFromUser);
// get post by title
router.get('/postsByTitle/:title',postController.getPostByTitle);
module.exports = router;
