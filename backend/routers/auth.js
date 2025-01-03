const express=require('express');
const User = require('../models/User.Schema');
const router=express.Router();
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
require('dotenv').config();

// signup route
router.post("/signup",async(req,res)=>{
    // Fetching Data from user
    const {username,email,password,UserImage}=req.body;
    try {
        // Checking User Aulerady Exist or not.
        const user=await User.findOne({email});
        if(user){
            res.send("User Aulerady Exist Please");
        }
        // Hashing The Password.
        const hash=await bcrypt.hash(password,10);
        // Creating New User And Save it to Database.
        const newUser=new User({
            username,email,password:hash,UserImage
        })
        res.send(newUser)
        await newUser.save();
    } catch (error) {
        console.log("Errro in Db",error);
    }
})
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User Not Found. Please Sign Up First" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: "Wrong Password" });
        }

        const token = jwt.sign(
            { _id: user._id, username: user.username },
            "jatin",
          
        );

      res.cookie("token", token, {
  httpOnly: true,
  sameSite: 'none', // Adjust based on your needs
  path: '/',
});

        return res.status(200).json({ message: "User Logged In Successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});
// Example route to check login status
router.get("/auth/me", (req, res) => {
    if (req.cookies.token) {
      res.json({ isAuthenticated: true, user: req.cookies.token });
    } else {
      res.json({ isAuthenticated: false });
    }
  });
  



module.exports=router;
