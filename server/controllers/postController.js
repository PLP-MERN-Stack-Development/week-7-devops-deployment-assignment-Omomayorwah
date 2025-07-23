import Post from "../models/Post.js";

// POST /api/posts
export const createPost = async (req, res)=> {
    const post = await Post.create({ ...req.body, owner: req.user.id});
    res.json(post);
};

// GET /api/posts/:id
export const getMyPosts = async (req, res) => {
    const posts = await Post.find({ owner: req.user.id });
    res.json(posts);
};

// GET /api/posts
export const getAllPosts = async (_req, res) => {
    const posts = await Post.find().populate("owner", "username slug").sort({ createdAt: -1 });
    res.json(posts);
};

// PUT /api/posts/:id
export const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        if (post.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: "You are not authorized to update this post" });
        }

        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE /api/posts/:id
export const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        if (post.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: "You are not authorized to delete this" });
        }

        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};