const express = require("express");
const bookController = require("../controllers/BookController");
const FavoritConroller = require("../controllers/FavoritController"); 
const loggedin = require("../controllers/loggedin");

const router = express.Router();



router.get("/", bookController.getallbook);
router.get('/recent', bookController.FindRecent);
router.get("/ebooks", bookController.getEbooks);
router.get("/getid/:id", bookController.getbookbyid);
router.get("/getCategoryid/:id", bookController.getbookbyCategoryid);
router.post("/addbook", bookController.uploadBook);
router.delete("/:id", bookController.deleteBook);
router.put("/:id", bookController.updateBook);
router.get('/search', bookController.searchBooks);

module.exports = router;
