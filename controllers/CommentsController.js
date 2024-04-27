const CommentModel = require('../models/Comments');

class CommentController{

    static async addComment(req, res) {
        try {
            // Extract necessary data from the request body
            const { content } = req.body;
            const userId = req.user ? req.user.id : 2;
            const { bookId } = req.params ;

            // Check if content is provided
            if (!content) {
                return res.status(400).json({ message: 'Content is required' });
            }

            // Call the addComment method of the CommentModel asynchronously
            const success = await CommentModel.addComment(bookId, userId, content);

            // Check if the comment was successfully added
            if (success) {
                res.status(201).send("Comment added successfully");
            } else {
                res.status(400).send("Failed to add comment");
            }
        } catch (error) {
            // If an error occurs during the process, send an internal server error response
            console.error('Error adding new comment:', error);
            res.status(500).send("Internal Server Error");
        }
    }






    static async deleteComment(req, res) {
        try {
          // Extract the comment ID from the request parameters
          const { commentId } = req.params;
    
          // Call the deleteComment method of the CommentModel asynchronously
          const success = await CommentModel.deleteComment(commentId);
    
          // Check if the comment was successfully deleted
          if (success) {
            res.status(200).send("Comment deleted successfully");
          } else {
            res.status(404).send("Comment not found or delete failed");
          }
        } catch (error) {
          // If an error occurs during the process, send an internal server error response
          console.error('Error deleting comment:', error);
          res.status(500).send("Internal Server Error");
        }
      }
      



      static async updateComment(req, res) {
        try {
          const { commentId } = req.params;
          const { content } = req.body;
    
          // Check if content is provided
          if (!content) {
            return res.status(400).json({ message: 'Content is required' });
          }
    
          // Call the model method to update the comment
          const success = await CommentModel.updateComment(commentId, content);
    
          if (success) {
            res.status(200).send('Comment updated successfully');
          } else {
            res.status(404).send('Comment not found');
          }
        } catch (error) {
          console.error('Error updating comment:', error);
          res.status(500).send('Internal Server Error');
        }
      }




      static async getAllCommentsForBook(req, res) {
        try {
          const { bookId } = req.params;
    
          // Call the model method to get all comments for the book

          let comments;

          const isAdmin = req.user && req.user.role === 'admin';

          // Retrieve comments based on user role
          if (isAdmin) {
              // If the user is an admin, retrieve all comments
              comments = await CommentModel.getAllCommentsForAdmin(bookId);
          } else {
              // If the user is not an admin, retrieve only approved comments
              comments = await CommentModel.getAllCommentsForUser(bookId);
          }

          if (comments) {
            // If there are results, send them back to the client as a successful response
            res.status(200).json({ success: true, data: comments });
        } else {
            // If results is null or undefined, send an appropriate error response
            res.status(404).json({ success: false, message: 'No comment found' });
        }
        } catch (error) {
          console.error('Error getting comments for book:', error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      }


      











    
}





module.exports = CommentController;