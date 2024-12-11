const express = require("express");
const router = express.Router();
const {
  addProduct,
  getAllProducts,
} = require("../Controllers/productController");

router.post("/addProduct", addProduct);
router.get("/getAllProducts", getAllProducts);

module.exports = router;
