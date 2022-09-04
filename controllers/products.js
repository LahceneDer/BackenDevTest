const Product = require("../models/product");
const Category = require("../models/category");

// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res, next) => {
  const products = await Product.find();
  res.status(200).send(products);
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
exports.getProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(`product not found with id of ${req.params.id}`, 404);
  }
  res.status(200).json({ success: true, data: product });
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

// @desc    Get products by category Id
// @route   GET /api/products/category/:categoryId
// @access  Public
exports.getProductsByCategoryId = async (req, res, next) => {
  let allCategories = [];
  var subcategories = [];
  var products = [];
  let category;
  const findCategories = async (categoryId) => {
    try {
      category = await Category.findById(categoryId);
      subcategories = await Category.find({
        parent_id: categoryId,
      });
      subcategories.unshift(category);
      subcategories.map((item) => allCategories.push(item));
      let mypromise = () => {
        return new Promise((resolve, reject) => {
          allCategories.map(async (item) => {
            product = await Product.find({ category_id: item._id });
            if (product.length > 0) {
              products.push(product);
            }
            resolve("dsf");
          });
        });
      };
      mypromise()
        .then(() => {
          res.status(200).json({ success: true, data: products });
        })
        .catch((error) => {
          res.status(200).json({ success: false, data: error });
        });
    } catch (error) {
      console.log(error);
    }
  };
  findCategories(req.params.categoryId);
};
