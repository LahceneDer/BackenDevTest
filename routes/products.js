const router = require("express").Router();
const {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct,
  getProductsByCategoryId,
} = require("../controllers/products");

router.route("/").get(getProducts).post(createProduct);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);
router.route("/category/:categoryId").get(getProductsByCategoryId);
module.exports = router;
