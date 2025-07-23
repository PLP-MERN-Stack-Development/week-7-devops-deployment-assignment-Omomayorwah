import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    featuredImage: { type: String, default: 'default-post.jpg'},
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true },
    description: { type: String, required: true, maxlength: 500 }
});

export default mongoose.model("User", categorySchema);