const FavoritModel = require("../models/Favorit");
const BookModel = require('../models/Book');


class FavoritController{


    static async addBookToFavorit(req, res) {
        try {
            console.log(req.user)
            if (!req.user || !req.user[0].id) {

                console.log("unauthorized")
                return res.status(401).json({ status: "error", error: "Unauthorized" });
            }
            console.log(req.user[0].id)
            
            const{bookId } = req.body;
            console.log(bookId)

            const success = await FavoritModel.addBookToFavorit(bookId, req.user[0].id);

            
            if (success) {
                
                res.status(201).send("Book added to favorites successfully");
            } else {
                 
                res.status(400).send("Failed to add book to favorites");
            }
        } catch (error) {
            console.error('Error adding book to favorites:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }


    static async deleteFromFavorit(req, res) {
        try {
            const bookId = req.params.id
            
            if (!req.user || !req.user[0].id) {
                console.log("unauthorized")
                return res.status(401).json({ status: "error", error: "Unauthorized" });
            }
            
            const result = await FavoritModel.deleteBookFromFavorit(bookId  , req.user[0].id);
    
            if (result) {
                res.status(200).send("book deleted from favorit successfully");
            } else {
                res.status(404).send(" delete failed");
            }
        } catch (error) {
            console.error('Error deleting book from favorit:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }




    static async getFavoriteByUserId(req, res) {
        console.log(req.user)
        if (!req.user || !req.user[0].id) {
            console.log("unauthorized")
            return res.status(401).json({ status: "error", error: "Unauthorized" });
        }
        
       
        try {
            const favorite = await FavoritModel.findById(req.user[0].id);

            if (favorite) {
              return  res.status(200).json({ success: true, data: favorite });
            } else {
               return res.status(404).json({ success: false, message: 'favorite empty' });
            }
        } catch (error) {
            console.error('Error fetching favorites:', error);
          return  res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }





}



module.exports = FavoritController;