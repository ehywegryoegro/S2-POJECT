const database = require("../config/db-config");

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



    static async addbook(title, author, category, description, availability, price,categoryId, cover,filename) {    
        try {
            // Using async/await with database queries for better readability and error handling  
            const result = await new Promise((resolve, reject) => {
                // Execute the database query to insert a new book

                database.query("INSERT INTO book (title, author, category, description, availability, price, categoryId, fileName , cover) VALUES (?, ?, ?, ?, ?, ?, ?, ? , ?)", [title, author, category, description, availability, price, categoryId,filename,cover], (error, result) => {
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

    static async deleteBook(id) {
        return new Promise((resolve, reject) => {
            database.query("DELETE FROM book WHERE id = ?", [id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.affectedRows > 0); // Resolve with true if a row was affected
                }
            });
        });
    }

    static async updateBook(title, author, category, description, availability, price,categoryId, cover,filename , bookId) {
        return new Promise((resolve, reject) => {
            database.query("UPDATE book SET `title` = ?,`author` = ? ,`category`=?, `description` = ?,`availability`=?, `price` = ? , `categoryId`=?,`cover` = ?,  `filename` = ? WHERE id = ?", [title, author, category, description, availability, price,categoryId, cover,filename , bookId], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        });
    }


    static async searchBooks(searchTerm) {
        return new Promise((resolve, reject) => {
            const sqlQuery = `
                SELECT *
                FROM book
                WHERE title LIKE ? OR category LIKE ? 
            `;
            const searchParam = `%${searchTerm}%`;
            database.query(sqlQuery, [searchParam, searchParam], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
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
    static async findByCategoryId(id) {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM book WHERE categoryId = ? ORDER BY RAND() LIMIT 2', [id], (error, results) => {
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
    static async findRecent() {
        return new Promise((resolve, reject) => {
           
            const twoWeeksAgo = new Date();
            twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
    

            const formattedDate = twoWeeksAgo.toISOString().slice(0, 19).replace('T', ' ');
    

            console.log(`Current date: ${new Date().toISOString()}`);
            console.log(`Fetching books created after: ${formattedDate}`);
    

            const query = 'SELECT * FROM book WHERE created_at >= ? ORDER BY RAND() LIMIT 10';

            database.query(query, [formattedDate], (error, results) => {
                if (error) {

                    console.error('Error executing query:', error);
                    reject(error);
                } else {
                    
                    console.log(`Number of books found: ${results.length}`);
                    console.log('Results:', results);
                    resolve(results.length > 0 ? results : null);
                }
            });
        });
    }
    
    static async Ebooks() {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM book WHERE ebook = 1',  (error, results) => {
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