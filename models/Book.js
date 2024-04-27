const database = require("../config/db");

class BookModel{

    static async getbooks() {
        return new Promise((resolve, reject) => {
            database.query("SELECT * FROM book", [], (error, result) => {
                if (error) {
                    reject(error); // Reject the promise if there's an error
                } else {
                    resolve(result); // Resolve the promise with the query result  
                }
            });
        });
    }



    static async addbook(title, author, category, description, availability, price,categoryId,filename) {    
        try {
            // Using async/await with database queries for better readability and error handling  
            const result = await new Promise((resolve, reject) => {
                // Execute the database query to insert a new book

                database.query("INSERT INTO book (title, author, category, description, availability, price, category_id, fileName) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [title, author, category, description, availability, price, categoryId,filename], (error, result) => {
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

            // Return the result (true if successful, false otherwise)
            return result;
        } catch (error) {
            // If an error occurs during the process, log the error and throw it
            console.error('Error adding book:', error);
            throw new Error('Failed to add book');
        }
    }



    static async findById(id) {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM book WHERE id = ? LIMIT 1', [id], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    if (results.length > 0) {
                        resolve(results[0]);
                    } else {
                        resolve(null); // Book not found
                    }
                }
            });
        });
    }

    static async getCategoryBooks(id) {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM book WHERE category_id = ?', [id], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    if (results.length > 0) {
                        resolve(results);
                    } else {
                        resolve(null); // Book not found
                    }
                }
            });
        });
    }







    


}

module.exports=BookModel;