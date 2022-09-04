let mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category_id: {
    type: mongoose.Types.ObjectId,
  },
});

module.exports = mongoose.model("Product", productSchema);
