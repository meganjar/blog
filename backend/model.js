import mongoose from "mongoose";
const PostSchema = new mongoose.Schema({
	subject: {
		type: String,
        required: true,
	},
    body: {
		type: String,
        required: true,
	},
    user: {
		type: String,
        required: true,
	},
    comments: {
		type: String
	}
}, {timestamps: true})


const Post = mongoose.model("Post", PostSchema); 

export default Post

