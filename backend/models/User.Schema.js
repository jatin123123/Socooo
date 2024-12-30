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
    required:true,
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