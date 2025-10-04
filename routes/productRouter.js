const express = require("express");
const path = require("path");

const productRouter = express.Router();

productRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "form.html"));
});

productRouter.post("/", (req, res, next) => {
  const data = req.body;

  console.log("The product added is", data.productName);
  res.json({ value: data.productName });
});

module.exports = productRouter;
