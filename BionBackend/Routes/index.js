const express = require("express");
const authRouter = require("./authRoute");
const productRouter = require("./productRoute");
const router = express.Router();

router.use("/v1/auth", authRouter);
router.use("/v1/productRoute", productRouter);

module.exports = router;
