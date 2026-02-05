const express = require("express");
const index = express();
const port = 3000;

//titolo, contenuto, immagine e tags
const posts = [
  {
    id: 1,
    title: "Ciambellone",
    img_src: "/images/ciambellone.jpeg",
    tags: ["soft", "sweet", "traditional"],
  },
  {
    id: 2,
    title: "Cracker alla Barbabietola",
    img_src: "/images/cracker_barbabietola.jpeg",
    tags: ["crisp", "savory", "original", "dietary"],
  },
  {
    id: 3,
    title: "Pane Fritto Dolce",
    img_src: "/images/pane_fritto_dolce.jpeg",
    tags: ["sweet", "original", "fried"],
  },
  {
    id: 4,
    title: "Pasta alla Barbabietola",
    img_src: "/images/pasta_barbabietola.jpeg",
    tags: ["first course", "original", "dietary"],
  },
  {
    id: 5,
    title: "Torta Paesana",
    img_src: "/images/torta_paesana.jpeg",
    tags: ["sweet", "traditional", "soft", "homemade"],
  },
];

index.use(express.static("public"));

index.get("/", (req, res) => {
  res.send("<h1>Server del mio blog</h1>");
});

index.get("/bacheca", (req, res) => {
  res.json(posts);
});

index.listen(port, () => {
  console.log(`server funzionante sulla porta ${port}`);
});
