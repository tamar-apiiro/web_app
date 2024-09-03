const Post = require('../model/post');

// get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.render('posts', { posts });
  } catch (err) {
    res.status(500).send("Error retrieving posts.");
  }
};

// add new post
exports.addPost = async (req, res) => {
  const creationDate = new Date();
  const { title, author, content } = req.query;
  console.log('body',req.query);
  const newPost = new Post({
    title,
    author,
    creationDate,
    content
  });

  try {
    await newPost.save();

    res.redirect('/posts');
  } catch (err) {
    res.status(500).send("Error saving post.");
  }
};
//get post by id
exports.getPostById = async (req, res) => {
  try {
    const postId = req.params.id; 
    const post = await Post.findById(postId); 

    if (!post) {
      return res.status(404).send("Post not found."); 
    }

    res.render('postDetail', { post }); 
  } catch (err) {
    res.status(500).send("Error retrieving post.");
  }
};
// delete post by id
exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.pid;
    await Post.deleteOne(postId);
  } catch (err) {
    res.status(500).send("Error deleting post.");
  }
  res.redirect('/posts');
};
// get all posts from user 
exports.getAllPostsFromUser = async (req, res) => {

  try {
    const postAuthor = req.params.author;
    console.log(req); 
    // console.log('author',postAuthor);
    const posts = await Post.find({author: postAuthor});
    
    res.render('posts', { posts });
  } catch (err) {
    res.status(500).send("Error retrieving users posts.");
  }
};
// get posts by title
exports.getPostByTitle = async (req, res) => {
  try {
    const postTitle = req.params.title;
    
    // console.log('author',postAuthor);
    const posts = await Post.find({title: postTitle});
    
    res.render('posts', { posts });
  } catch (err) {
    res.status(500).send("Error retrieving post by title.");
  }
};