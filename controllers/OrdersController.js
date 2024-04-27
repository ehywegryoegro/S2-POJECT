const OrderModel = require("../models/Orders");
const BookModel = require("../models/Book");
const UserModel = require("../models/User");






class OrderController{

    

    // Controller for updating order status
    static async updateOrderStatus(req, res) {
        try {
            const validStatus=['pending','proccecing','completed','cancelled']
            const { newStatus } = req.body;
            const orderId = req.params.id;
            if (validStatus.includes(newStatus)){
             // Update the status of the order in the database
             const success=  await OrderModel.updateOrderStatus(orderId, newStatus);
             if (success){
                 // Return success response
                  res.status(200).json({ success: true, message: 'Order status updated successfully' });

                 }else{
                     res.status(404).json({ success: false, message: 'Order not found' });
            
                    }
            }else{
                res.status(400).json({ success: false, message: 'Invalid status' });

            }

    

        } catch (error) {
            // Handle errors
            console.error('Error updating order status:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }







    static async createOrder(req, res) {
        try {
          const { userId, bookId, quantity = 1} = req.body;

          const book = await BookModel.findById(bookId);

          if (book){
            const bookPrice= book.price;
            const totalPrice = bookPrice * quantity;
             // Call the createOrder method of the OrderModel asynchronously
            const success = await OrderModel.createOrder(userId, bookId, quantity, totalPrice);

            if (success) {
               // If successful, send a success response
               res.status(201).json({ success: true, orderId: success });
            } else {
               // If failed, send a failure response
               res.status(400).send("Failed to add order");
            }

          }else{
            res.status(400).json({ success: false, message: "book not found" });
          }

          


        } catch (error) {
          // If an error occurs during the process, send an internal server error response
          console.error('Error creating order:', error);
          res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
      }


      static async deleteOrder(req, res) {
        try {
            const orderId = req.params.orderId;

            // Call the deleteOrder method of the OrderModel asynchronously
            const success = await OrderModel.deleteOrder(orderId);

            // Check if the order was deleted successfully
            if (success) {
                res.status(200).json({ success: true, message: 'Order deleted successfully' });
            } else {
                res.status(404).json({ success: false, message: 'Order not found' });
            }
        } catch (error) {
            console.error('Error deleting order:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }


    static async getAllOrders(req, res) {
        try {
            // Call the getAllOrders method of the OrderModel asynchronously
            const orders = await OrderModel.getAllOrders();
            // Check if there are orders
            if (orders) {
                // for(let i=0;i<orders.length;i++){
                //  const book = await BookModel.findById(orders[i].book_id);
                //  const user = await UserModel.findById(orders[i].user_id);
                //  orders[i].user=user;
                //  orders[i].book=book;
                // }  

             res.status(200).json({ success: true, data: orders});
            } else {
                res.status(404).json({ success: false, message: 'No orders found' });
            }
        } catch (error) {
            console.error('Error fetching orders:', error);  
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }


    static async getOrderById(req, res) {
        try {
            const orderId = req.params.orderId;
            const order = await OrderModel.getOrderById(orderId);

            if (order) {
                const book = await BookModel.findById(order.book_id);
                const user = await UserModel.findById(order.user_id);
                order.user=user;
                order.book=book;
                res.status(200).json({ success: true, data: order });
            } else {
                res.status(404).json({ success: false, message: 'Order not found' });
            }
        } catch (error) {
            console.error('Error fetching order by ID:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }



}








module.exports = OrderController;