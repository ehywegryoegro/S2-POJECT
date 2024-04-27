const database = require("../config/db");

class CategoryModel {
    static async getcategories() {
        return new Promise((resolve, reject) => {
            database.query("SELECT * FROM categories", (error, results) => {
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
    }


    static async addCategory(Data) {
        return new Promise((resolve, reject) => {
          database.query("INSERT INTO categories (name, description, img_path) VALUES (?,?,?)", [Data.name,Data.description,Data.img_path], (error, results) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        });
      }


      static async updateCategory(id, newData) {
        try {
            const result = await new Promise((resolve, reject) => {
                // Execute the database query to update the user with the specified ID
                database.query("UPDATE categories SET ? WHERE id = ?", [newData, id], (error, result) => {
                    // Check if there's an error
                    if (error) {
                        // If there's an error, reject the promise with the error
                        reject(error);
                    } else if (result.affectedRows === 0) {
                        // If no rows were affected, it means the user with the specified ID doesn't exist
                        resolve(false); // Resolve with false to indicate failure
                    } else {
                        // If the query is successful and at least one row is affected, resolve the promise with true
                        resolve(true);
                    }
                });
            });
          return result;
        } catch (error) {
          console.error('Error updating category:', error);
          throw new Error('Error updating category'); 
        } 
      }


      static async deleteCategory(id) {
        try {
            const result = await new Promise((resolve, reject) => {
                database.query("DELETE FROM categories WHERE id = ?", [id], (error, result) => {
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
            console.error('Error deleting category:', error);
            throw new Error('Failed to delete category');
        }
    }


    static async findById(id) {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM categories WHERE id = ? limit 1', [id], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    if (results.length > 0) {
                        resolve(results[0]);
                    } else {
                        resolve(null); //category not found
                    }
                }
            });
        });
    }


    static async findByName(name) {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM categories WHERE name = ? LIMIT 1', [name], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    if (results.length > 0) {
                        resolve(results[0]);
                    } else {
                        resolve(null); //category not found
                    }
                }
            });
        });
    }



}

module.exports = CategoryModel;