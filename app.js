const express = require("express");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  if (req.url !== "/") {
    return next();
  }
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.use("/api/products", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`connnection eshtablished successfully http://localhost:${PORT}`);
});
