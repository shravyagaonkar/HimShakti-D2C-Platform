const express = require("express");
const router = express.Router();

// In-memory data
let products = [
  {
    id: 1,
    title: "Cinnamon",
    description:
      "A premium-quality organic spice known for its warm aroma and natural sweetness. It supports digestion and adds rich flavor to food and beverages.",
    image: "/images/Organic Cinnamon.png",
    price: 250,
  },
  {
    id: 2,
    title: "Turmeric Powder",
    description:
      "A powerful golden spice rich in curcumin, known for its immunity-boosting and anti-inflammatory properties. Ideal for cooking and wellness drinks.",
    image: "/images/Turmeric Powder.png",
    price: 100,
  },
  {
    id: 3,
    title: "Honey",
    description:
      "Pure, natural honey collected from chemical-free environments. It is a natural energy booster with antibacterial and healing properties.",
    image: "/images/Honey.png",
    price: 160,
  },
];

// GET all products
router.get("/", (req, res) => {
  res.status(200).json(products);
});

// GET one product
router.get("/:id", (req, res) => {
  const product = products.find(
    p => p.id === parseInt(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.status(200).json(product);
});

// POST new product
router.post("/", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

// PUT update product
router.put("/:id", (req, res) => {
  const product = products.find(
    p => p.id === parseInt(req.params.id)
  );

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  product.name = req.body.name;
  product.price = req.body.price;

  res.status(200).json(product);
});

// DELETE product
router.delete("/:id", (req, res) => {
  products = products.filter(
    p => p.id !== parseInt(req.params.id)
  );

  res.status(204).send();
});

// SEARCH products
router.get("/search/:name", (req, res) => {
  const result = products.filter(product =>
    product.name
      .toLowerCase()
      .includes(req.params.name.toLowerCase())
  );

  res.status(200).json(result);
});

module.exports = router;