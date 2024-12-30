const { Schema, default: mongoose } = require("mongoose");

const PostSchema = new Schema({
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
