const products = require("../data-prices.json");
const productDetails = require("../data-details.json");

const getProducts = async (req, res) => {
  try {
    //could have an await to find products first but json files exist in repo
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    //again could use await.. and findById if json was not within repo
    const product = productDetails[id];
    if (product) {
      return res.json(product);
    }
    res.status(404).json({ message: "Product not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProduct,
  getProducts,
};
