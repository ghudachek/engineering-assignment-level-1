const { Router } = require("express");
const controllers = require("../controllers/products");

const router = Router();

router.get("/", controllers.getProducts);

router.get("/:id", controllers.getProduct);

module.exports = router;
