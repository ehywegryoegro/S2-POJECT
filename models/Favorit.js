const database = require("../config/db");


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


    static async deleteBookFromFavorit(id) {
        try {
            const result = await new Promise((resolve, reject) => {
                database.query("DELETE FROM favorites WHERE id = ?", [id], (error, result) => {
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


    // static async findById(id) {
    //     return new Promise((resolve, reject) => {
    //         database.query('SELECT * FROM favorites WHERE user_id = ?', [id], (error, results) => {
    //             if (error) {
    //                 reject(error);
    //             } else {
    //                 if (results.length > 0) {
    //                     resolve(results);
    //                 } else {
    //                     resolve(null); //category not found
    //                 }
    //             }
    //         });
    //     });
    // }


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
                            resolve(null); //category not found
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