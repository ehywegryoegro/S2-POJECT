const database = require("../config/db-config");


class FavoritModel{

    static async addBookToFavorit(bookId, userId) {
        return new Promise((resolve, reject) => {
          database.query("INSERT INTO favorites (book_id, user_id) VALUES (?, ?)", [bookId, userId], (error, results) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        });
    }


    static async deleteBookFromFavorit(book_id , user_id) {
        try {
            const result = await new Promise((resolve, reject) => {
                database.query("DELETE FROM favorites WHERE book_id = ? AND user_id = ?", [book_id , user_id], (error, result) => {
                    if (error) {
                        reject(error);
                    } else if (result.affectedRows === 0) {
                        resolve(false); 
                    } else {
                        resolve(true);
                    }
                });
            });
    
            return result;
        } catch (error) {
            console.error('Error deleting book from favorites:', error);
            throw new Error('Failed to delete book from favorites');
        }
    }


    

    static async findById(id) {


        try {
            return new Promise((resolve, reject) => {
                database.query('SELECT b.* FROM book b INNER JOIN favorites fb ON b.id = fb.book_id WHERE fb.user_id = ? ', [id], (error, results) => {
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
        } catch (error) {
            console.error('Error fetching favorite books:', error);
            throw new Error('Error fetching favorite books');
        }

    }







}


module.exports =  FavoritModel;