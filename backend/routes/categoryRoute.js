const express = require("express");
const CategoriesController = require("../controllers/CategoriesController");
const FavoritConroller = require("../controllers/FavoritController"); 

const loggedin = require("../controllers/loggedin");

const router = express.Router();




router.get("/", CategoriesController.getAllCategories);
router.get("/:id", CategoriesController.getcategoryById);
router.post("/addcategory", CategoriesController.addCategory);
router.delete("/:id", CategoriesController.deleteCategory);
router.put("/:id", CategoriesController.updateCategory);

module.exports = router;
