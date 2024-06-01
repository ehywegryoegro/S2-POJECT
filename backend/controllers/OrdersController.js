const OrderModel = require("../models/Orders");
const BookModel = require("../models/Book");
const UserModel = require("../models/User");






class OrderController{

    

  
    static async updateOrderStatus(req, res) {
        try {
            const validStatus=['pending','proccecing','completed','cancelled']
            const { newStatus } = req.body;
            const orderId = req.params.id;
            if (validStatus.includes(newStatus)){
             
             const success=  await OrderModel.updateOrderStatus(orderId, newStatus);
             if (success){
                 
                  res.status(200).json({ success: true, message: 'Order status updated successfully' });

                 }else{
                     res.status(404).json({ success: false, message: 'Order not found' });
            
                    }
            }else{
                res.status(400).json({ success: false, message: 'Invalid status' });

            }

    

        } catch (error) {
            
            console.error('Error updating order status:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }







    static async createOrder(req, res) {
        try {
            if (!req.user || !req.user[0].id) {

                console.log("unauthorized")
                return res.status(401).json({ status: "error", error: "Unauthorized" });
            }
          const { bookId,  bookPrice } = req.body;

            
            const totalPrice = bookPrice ;
             
            const success = await OrderModel.createOrder(req.user[0].id, bookId, totalPrice);

            if (success) {
               
               res.status(201).json({ success: true, orderId: success });
            } else {
             
               res.status(400).send("Failed to add order");
            }

          


        } catch (error) {
          // If an error occurs during the process, send an internal server error response
          console.error('Error creating order:', error);
          res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
      }


      static async deleteOrder(req, res) {
        try {
            if (!req.user || !req.user[0].id) {

                console.log("unauthorized")
                return res.status(401).json({ status: "error", error: "Unauthorized" });
            }
            const bookId = req.params.id;

            // Call the deleteOrder method of the OrderModel asynchronously
            const success = await OrderModel.deleteOrder(bookId , req.user[0].id);

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
            if (!req.user || !req.user[0].id) {

                console.log("unauthorized")
                return res.status(401).json({ status: "error", error: "Unauthorized" });
            }
            const {bookId} = req.body
            // Call the getAllOrders method of the OrderModel asynchronously
            const orders = await OrderModel.getAllOrders(  req.user[0].id );
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