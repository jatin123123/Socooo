const { Schema, model, default: mongoose } = require("mongoose");
const UserSchema = new Schema({
username:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
},
UserImage:{
    type:String,
    default:"https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png"
},
post:[{
    type:Schema.Types.ObjectId,
    ref:'Post'
}],
followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
},{timestamps:true});


const User = mongoose.model("User", UserSchema);

module.exports = User;