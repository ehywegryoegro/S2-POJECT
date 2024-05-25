const database = require('../config/db-config');


class CommentModel{

    static async addComment(bookId, userId, content) {
        try {
            // Execute the database query to insert a new comment
            const result = await new Promise((resolve, reject) => {
                database.query("INSERT INTO comments (book_id, user_id, content) VALUES (?, ?, ?)", [bookId, userId, content], (error, result) => {
                    // Check if there's an error
                    if (error) {
                        // If there's an error, reject the promise with the error
                        reject(error);
                    } else {
                        // If the query is successful, resolve the promise with true
                        resolve(true);
                    }
                });
            });

            return result; // Return true if the comment was successfully added
        } catch (error) {
            console.error('Error adding conmment:', error);
            throw new Error('Failed to add comment');
        }
    }




    static async deleteComment(commentId) {
        try {
          // Execute the database query to delete the comment
          const result = await new Promise((resolve, reject) => {
            database.query("DELETE FROM comments WHERE id = ?", [commentId], (error, result) => {
              // Check if there's an error
              if (error) {
                // If there's an error, reject the promise with the error
                reject(error);
              } else {
                // If the query is successful, resolve the promise with true
                resolve(true);
              }
            });
          });
    
          return result; // Return true if the comment was successfully deleted
        } catch (error) {
          // Log the error
          console.error('Error deleting this comment:', error);
          // If an error occurs during the process, throw the error
          throw new Error('Error deleting comment');
        }
      }




      static async updateComment(commentId, content) {
        try {
          // Execute the database query to update the comment
          const result = await new Promise((resolve, reject) => {
            database.query('UPDATE comments SET content = ? WHERE id = ?', [content, commentId], (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result.affectedRows > 0);
              }
            });
          });
          
          return result;
        } catch (error) {
          console.error('Error updating comment:', error);
          throw new Error('Error updating comment');
        }
      }




      static async getAllCommentsForAdmin(bookId) {
        try {
          // Execute the database query to fetch all comments for the book
          const comments = await new Promise((resolve, reject) => {
            database.query('SELECT * FROM comments WHERE book_id = ?', [bookId], (error, results) => {
              if (error) {
                reject(error);
              } else {
                if (results.length > 0) {
                    resolve(results);
                } else {
                    resolve(null); // user not found
                }
            }
            });
          });
    
          return comments;
        } catch (error) {
          console.error('Error getting comments for book:', error);
          throw new Error('Error getting comments for book');
        }
      }

      static async getAllCommentsForUser(bookId) {
        try {
          // Execute the database query to fetch all comments for the book
          const comments = await new Promise((resolve, reject) => {
            database.query('SELECT content FROM comments WHERE book_id = ?', [bookId], (error, results) => {
              if (error) {
                reject(error);
              } else {
                if (results.length > 0) {
                    resolve(results);
                } else {
                    resolve(null);
                }
            }
            });
          });
    
          return comments;
        } catch (error) {
          console.error('Error getting comments for book:', error);
          throw new Error('Error getting comments for book');
        }
      }


}




module.exports = CommentModel;