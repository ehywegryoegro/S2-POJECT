const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const ordersController = require("../controllers/OrdersController")
const loggedin = require("../controllers/loggedin")


router.post('/purchase', paymentController.processPayment);
router.post("/addToCart" , loggedin , ordersController.createOrder )
router.get("/" , loggedin , ordersController.getAllOrders )
router.delete("/:id" , loggedin , ordersController.deleteOrder)

module.exports = router;