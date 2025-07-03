const express = require("express");
const router = express.Router();

const {doLogin , doSignUp} = require("../controllers/authController");

router.post("/login" , doLogin);
router.post("/signup" , doSignUp);

module.exports = router;