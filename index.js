const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/database");
const YAML = require("yamljs");

//models
const Product = require("./models/product");
const Category = require("./models/category");
//routes
const productRouter = require("./routes/products");
const categoryRouter = require("./routes/categories");

//swagger
const swaggerJsdoc = YAML.load("./api.yaml");
const swaggerUi = require("swagger-ui-express");

//settings
const app = express();

// Connect to db
connectDB();

//cors policy
app.use(cors());

// Body parser
app.use(express.json());

//middlwares
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc));

app.use("/", (req, res, next) => {
  res.json({ text: "index" });
});

app.listen(4000, () => {
  console.log(`server running on port 4000`);
});
