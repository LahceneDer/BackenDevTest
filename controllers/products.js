const Product = require("../models/product");

// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res, next) => {
  const products = await Product.find();
  res
    .status(200)
    .json({ success: true, count: products.length, data: products });
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
exports.getProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(`product not found with id of ${req.params.id}`, 404);
  }
  res.status(200).json({ success: true, data: bootcamp });
};

// @desc    Create new product
// @route   POST /api/products/
// @access  Private
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(200).json({ success: true, data: product });
};

// @desc    Update bootcamp
// @route   PUT /api/products/:id
// @access  Private
exports.updateProduct = async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    return next(`product not found with id of ${req.params.id}`, 404);
  }
  res.status(200).json({ success: true, data: product });
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(`product not found with id of ${req.params.id}`, 404);
  }
  res.status(200).json({ success: true, data: "product deleted successfully" });
};