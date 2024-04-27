const express = require("express");
const db = require("../config/db");

const router = require("express").Router();

const usercontroller = require("../controllers/UserController");

const bookcontroller = require("../controllers/BookController");

const CategoryController = require("../controllers/CategoriesController");

const CommentController = require('../controllers/CommentsController');

const OrderController = require('../controllers//OrdersController');

const FavoritConroller = require('../controllers/FavoritController');


router.get("/", (req, res) => {
    res.json({message: "welcome"});
});

router.get("/alluser",usercontroller.getalluser);

//router.post("/adduser",usercontroller.addnewuser);

router.post("/deleteuser/:id",usercontroller.deleteuser);

// router.put('/users/:id', usercontroller.modifyUser);

router.get('/users/:id', usercontroller.getuserById);


router.get("/allbook",bookcontroller.getallbook);

//router.post("/addbook",bookcontroller.addnewbook);

router.get('/books/:id', bookcontroller.getbookbyid);

router.get('/readbook/:id', bookcontroller.readFileBookById);

router.post("/uploadbook",bookcontroller.uploadBook);// or add book




router.get("/categories", CategoryController.getAllCategories);

router.post('/addcategories', CategoryController.addCategory);

router.put('/categories/:id', CategoryController.updateCategory);

router.post("/deletecategory/:id",CategoryController.deleteCategory);

router.get('/categories/:id', CategoryController.getcategoryById);



router.post('/books/:bookId/comments', CommentController.addComment);

router.delete('/comments/:commentId', CommentController.deleteComment);

router.put('/comments/:commentId', CommentController.updateComment);

router.get('/comments/:bookId', CommentController.getAllCommentsForBook);



router.post('/orders',OrderController.createOrder);

router.get('/orders',OrderController.getAllOrders);

router.post('/orders/:id',OrderController.updateOrderStatus);

router.delete('/orders/:orderId', OrderController.deleteOrder);

router.get('/orders/:orderId', OrderController.getOrderById);


router.post('/favorite',FavoritConroller.addBookToFavorit);

router.delete('/favorites/:id',FavoritConroller.deleteFromFavorit);

router.get('/favorites',FavoritConroller.getFavoriteByUserId);


module.exports=router;