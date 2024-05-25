const express = require("express");
const bookController = require("../controllers/BookController");



const router = express.Router();



router.get('/:id', bookController.readFileBookById);



module.exports = router;