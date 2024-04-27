const FavoritModel = require("../models/Favorit");
const BookModel = require('../models/Book');


class FavoritConroller{


    static async addBookToFavorit(req, res) {
        try {
            const { bookId,userId } = req.body;

            const success = await FavoritModel.addBookToFavorit(bookId, userId);

            // Check if the category was successfully added
            if (success) {
                // If successful, send a success response
                res.status(201).send("Book added to favorites successfully");
            } else {
                // If failed, send a failure response
                res.status(400).send("Failed to add book to favorites");
            }
        } catch (error) {
            console.error('Error adding book to favorites:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }


    static async deleteFromFavorit(req, res) {
        try {
            const id = req.params.id;
            const result = await FavoritModel.deleteBookFromFavorit(id);
    
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



    // static async getFavoriteByUserId(req, res) {
    //     const id = req.body.userId;
    //     try {
    //         const favorite = await FavoritModel.findById(id);
    //         if (favorite) {
    //             for(let i=0;i<favorite.length;i++){
    //              const book = await BookModel.findById(favorite[i].book_id);
    //           //   const user = await UserModel.findById(favorite[i].user_id);
    //           //   favorite[i].user=user;
    //              favorite[i].book=book;
    //             }  

    //             res.status(200).json({ success: true, data: favorite });
    //         } else {
    //             res.status(404).json({ success: false, message: 'favorite empty' });
    //         }
    //     } catch (error) {
    //         console.error('Error fetching favorites:', error);
    //         res.status(500).json({ success: false, message: 'Internal Server Error' });
    //     }
    // }

    static async getFavoriteByUserId(req, res) {
        const id = req.body.userId;
        try {
            const favorite = await FavoritModel.findById(id);
            if (favorite) {
                res.status(200).json({ success: true, data: favorite });
            } else {
                res.status(404).json({ success: false, message: 'favorite empty' });
            }
        } catch (error) {
            console.error('Error fetching favorites:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }





}



module.exports = FavoritConroller;