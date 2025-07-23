import Category from "../models/Category.js";

// POST /api/categories
export const createCategory = async (req, res)=> {
    const category = await Category.create({ ...req.body, owner: req.user.id});
    res.json(category);
};

// GET /api/categories
export const getAllCategories = async (_req, res) => {
    const categories = await Category.find().populate("owner", "username name").sort({ createdAt: -1 });
    res.json(categories);
};