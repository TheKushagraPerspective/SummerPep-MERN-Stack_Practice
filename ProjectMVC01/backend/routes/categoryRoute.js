const express = require("express");
const router = express.Router();

const {getCategoryList, insertNewCategory} = require("../controllers/categoryController"); // importing categoryController.js

router.get('/categoryList',getCategoryList);
router.post('/insertCategory' , insertNewCategory);

module.exports = router;