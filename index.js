const express = require("express");
const index = express();
const port = 3000;

index.get("/", (req, res) => {
  res.send("<h1>Server del mio blog</h1>");
});

index.listen(port, () => {
  console.log(`server funzionante sulla porta ${port}`);
});
