const express = require("express");

const FavoritConroller = require("../controllers/FavoritController"); 
const loggedin = require("../controllers/loggedin");

const router = express.Router();



router.post('/addToFavourite',loggedin, FavoritConroller.addBookToFavorit);
router.get('/',loggedin ,FavoritConroller.getFavoriteByUserId);
router.delete('/:id',loggedin ,FavoritConroller.deleteFromFavorit);

module.exports = router;
