const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = mongoose.connect(
    "mongodb+srv://lahcene:lahcene@cluster0.i7tmx.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );

  console.log(`MongoDB connected`);
};

module.exports = connectDB;
