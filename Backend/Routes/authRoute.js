const express = require("express");
const { logOut, signIn, signUp } = require("../Controllers/authController");

const router = express.Router();

router.post("/signIn", signIn);
router.post("/logOut", logOut);
router.post("/signUp", signUp);

module.exports = router;
