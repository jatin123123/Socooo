const express = require("express");
const User = require('../models/User.Schema');
const Post = require('../models/Post.Schema'); // Assuming you have a Post schema
const jwt = require("jsonwebtoken");
const router = express.Router();

// Middleware to parse cookies
const cookieParser = require('cookie-parser');
router.use(cookieParser());

// Create post route
router.post("/create", async (req, res) => {
    const { tittle, description } = req.body;
    const token = req.cookies.token; // Get token from cookies

    try {
        if (!token) {
            return res.status(401).send("Unauthorized: No token provided");
        }

        // Verify the token
        const decoded = jwt.verify(token, "jatin"); // Replace "jatin" with a secure secret in production
        // console.log(decoded)
        // Find the user from the decoded token
        const user = await User.findById(decoded._id);
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Create a new post
        const newPost = new Post({
            tittle,
            description,
            author: user._id, // Reference the user's ObjectId
        });

        // Save the post to the database
        await newPost.save();

        res.status(200).json({ message: "Post created successfully", post: newPost });
    } catch (error) {
        console.error("Error creating post:", error);

        if (error.name === "JsonWebTokenError") {
            return res.status(401).send("Invalid token. Please log in again.");
        }

        res.status(500).send("Internal server error");
    }
});

router.get("/mypost", async (req, res) => {
    const token = req.cookies.token;

    try {
        // Check if token is missing
        if (!token) {
            return res.status(401).json({ message: "Token not found. Please log in." });
        }

        // Verify token
        const decoded = jwt.verify(token, "jatin"); // Replace "jatin" with your secret key in production
        const user = await User.findById(decoded._id);

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // Fetch posts by the user
        const userPost = await Post.find({ author: user._id });

        // Check if user has no posts
        if (userPost.length === 0) {
            return res.status(200).json({ message: "No posts yet.", posts: [] });
        }

        // Send the posts
        return res.status(200).json({ posts: userPost });

    } catch (error) {
        console.error("Error in /mypost route:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
});


router.get("/feed", async (req, res) => {
    try {
        // Fetch posts and populate the 'author' field
        const feed = await Post.find().populate('author', 'username _id UserImage'); // Replace with actual fields in your User model

      
        res.json({ feed:feed });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong" });
    }
});
router.delete("/deletepost/:id",async(req,res)=>{
try {
    const {id}=req.params;
    const deletepost=await Post.findByIdAndDelete(id);
    if (!deletepost) {
        return res.status(400).json({ message: "Post not found" });
      }
      res.json({ message: "Post deleted successfully", post: deletepost });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" }); 
}
})




module.exports = router;
 