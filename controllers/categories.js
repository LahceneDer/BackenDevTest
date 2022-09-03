const Category = require("../models/category");

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
exports.getCategories = async (req, res, next) => {
  const categories = await Category.find();
  res.status(200).json(categories);
};

// @desc    Get single category
// @route   GET /api/categories/:id
// @access  Public
exports.getCategory = async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return next(`category not found with id of ${req.params.id}`, 404);
  }
  res.status(200).json({ success: true, data: category });
};

// @desc    Create new category
// @route   POST /api/categories/
// @access  Private
exports.createCategory = async (req, res, next) => {
  const category = await Category.create(req.body);
  res.status(200).json({ success: true, data: category });
};

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private
exports.updateCategory = async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!category) {
    return next(`category not found with id of ${req.params.id}`, 404);
  }
  res.status(200).json({ success: true, data: category });
};

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Private
exports.deleteCategory = async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    return next(`category not found with id of ${req.params.id}`, 404);
  }
  res
    .status(200)
    .json({ success: true, data: "category deleted successfully" });
};
