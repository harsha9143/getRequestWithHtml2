const express = require("express");
const path = require("path");
const productRouter = require("./routes/productRouter");

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use((req, res, next) => {
  if (req.url !== "/") {
    return next();
  }
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.use("/api/products", productRouter);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`connnection eshtablished successfully http://localhost:${PORT}`);
});
