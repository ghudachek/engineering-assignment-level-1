const { Router } = require("express");
const productRouter = require("./products");

const router = Router();

router.get("/", (req, res) => res.send("This is the root of products API"));

router.use("/products", productRouter);

module.exports = router;
