let mongoose = require("mongoose");

let categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  parent_id: {
    type: String,
  },
});

module.exports = mongoose.model("Category", categorySchema);
