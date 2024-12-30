const express=require("express");
const router=express.Router();
const jwt=require("jsonwebtoken");
const User = require("../models/User.Schema");
// Admin Profile
router.get("/adminProfile",async(req,res)=>{
    try {
        const token=req.cookies.token;
        const decode=await jwt.verify(token,"jatin");
        const admin=await User.findById(decode._id);
        res.json({admin:admin})
    } catch (error) {
        console.log(error);
    }
})

// logoutroute
router.get("/logout",async(req,res)=>{
    try {
        res.clearCookie("token",{path:"/"});
        res.status(200).json({message:"Logged Out"});
    } catch (error) {
        console.log(error)
    }
})

module.exports=router;