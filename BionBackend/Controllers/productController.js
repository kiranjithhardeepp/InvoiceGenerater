const ProductData = require("../Models/ProductData");

const addProduct = async (req, res) => {
  const { name, quantity, units, rate } = req.body;

  // Log the incoming request body for debugging
  console.log("req.body: ", req.body);

  // Validate request data
  if (!name || !quantity || !units || !rate) {
    return res.status(400).json({
      message:
        "Please provide all required fields: name, quantity, units, and rate.",
    });
  }

  try {
    // Create a new product instance
    const newProduct = new ProductData({ name, quantity, units, rate });

    // Save the product to the database
    await newProduct.save();

    // Respond with success
    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error("Error saving product:", error); // Log the error for debugging
    res
      .status(500)
      .json({ message: "Failed to add product", error: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await ProductData.find(); // .find() will retrieve all products

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    // Respond with the retrieved products
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

module.exports = { addProduct, getAllProducts };
