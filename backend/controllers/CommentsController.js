const CommentModel = require('../models/Comments');

class CommentController{

    static async addComment(req, res) {
        try {
            
            const { content } = req.body;
            const userId = req.user ? req.user.id : 2;
            const { bookId } = req.params ;

           
            if (!content) {
                return res.status(400).json({ message: 'Content is required' });
            }

            
            const success = await CommentModel.addComment(bookId, userId, content);

            
            if (success) {
                res.status(201).send("Comment added successfully");
            } else {
                res.status(400).send("Failed to add comment");
            }
        } catch (error) {
           
            console.error('Error adding new comment:', error);
            res.status(500).send("Internal Server Error");
        }
    }






    static async deleteComment(req, res) {
        try {
          
          const { commentId } = req.params;
    
          
          const success = await CommentModel.deleteComment(commentId);
    
          
          if (success) {
            res.status(200).send("Comment deleted successfully");
          } else {
            res.status(404).send("Comment not found or delete failed");
          }
        } catch (error) {
          
          console.error('Error deleting comment:', error);
          res.status(500).send("Internal Server Error");
        }
      }
      



      static async updateComment(req, res) {
        try {
          const { commentId } = req.params;
          const { content } = req.body;
    
          
          if (!content) {
            return res.status(400).json({ message: 'Content is required' });
          }
    
        
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
    
         

          let comments;

          const isAdmin = req.user && req.user.role === 'admin';

          
          if (isAdmin) {
              
              comments = await CommentModel.getAllCommentsForAdmin(bookId);
          } else {
              
              comments = await CommentModel.getAllCommentsForUser(bookId);
          }

          if (comments) {
           
            res.status(200).json({ success: true, data: comments });
        } else {
           
            res.status(404).json({ success: false, message: 'No comment found' });
        }
        } catch (error) {
          console.error('Error getting comments for book:', error);
          res.status(500).json({ message: 'Internal Server Error' });
        }
      }


      











    
}





module.exports = CommentController;