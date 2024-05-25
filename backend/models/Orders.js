const database = require("../config/db-config");

class OrderModel{


    static async updateOrderStatus(orderId, newStatus) {
        try {
            const result = await new Promise((resolve, reject) => {
                database.query('UPDATE orders SET status = ? WHERE id = ?', [newStatus, orderId], (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (result.affectedRows === 0) {
                            resolve(null);
                        } else {
                            resolve(true); // Return true if the order status was updated successfully
                        }
                    }
                });
            });
            return result;
        } catch (error) {
            console.error('Error updating order status:', error);
            throw new Error('Error updating order status');
        }
    }


    static async createOrder(userId, bookId,totalPrice) {
        try {
          const result = await new Promise((resolve, reject) => {
            database.query("INSERT INTO orders (user_id, book_id , total_price) VALUES (?, ?, ?)", [userId, bookId, totalPrice], (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result.insertId); // Return the ID of the newly inserted order
              }
            });
          });
          return result;
        } catch (error) {
          console.error('Error creating order:', error);
          throw new Error('Failed to create order');
        }
      }


      static async deleteOrder(bookId , userId) {
        try {
            const result = await new Promise((resolve, reject) => {
                database.query('DELETE FROM orders WHERE book_id = ? AND user_id = ?', [bookId , userId], (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (result.affectedRows === 0) {
                            resolve(false);
                        } else {
                            resolve(true); // Return true if the order was deleted successfully
                        }
                    }
                });
            });
            return result;
        } catch (error) {
            console.error('Error deleting order:', error);
            throw new Error('Error deleting order');
        }
    }


    static async getAllOrders(id) {
      try {
          const orders = await new Promise((resolve, reject) => {
              database.query('SELECT b.* FROM book b INNER JOIN orders fb ON b.id = fb.book_id WHERE fb.user_id = ? ',[id] ,(error, results) => {
                  if (error) {
                      reject(error);
                  } else {
                    if (results.length>0){
                      
                      resolve(results); 
                    } else{
                      resolve(false);
                    }
                  }
              });
          });
          return orders;
      } catch (error) {
          console.error('Error fetching all orders:', error);
          throw new Error('Error fetching all orders');
      }
  }



  static async getOrderById(userId , bookId) {
    try {
        const order = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM orders WHERE user_id = ? AND book_id = ?', [userId , bookId], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    if (results.length > 0) {
                        resolve(results[0]); // Return the first (and only) order found
                    } else {
                        resolve(null); // Return null if no order was found
                    }
                }
            });
        });
        return order;
    } catch (error) {
        console.error('Error fetching order by ID:', error);
        throw new Error('Error fetching order by ID');
    }
}


}





module.exports=OrderModel;