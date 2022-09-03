const mongoose = require("mongoose");

const connectDB = async (URI) => {
  const conn = await mongoose.connect(URI, {
    useNewUrlParser: true,
  });

  console.log(`MongoDB connected`);
};

module.exports = connectDB;
