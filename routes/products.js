const router = require("express").Router();
const {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

router.route("/").get(getProducts);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);
module.exports = router;
