const database = require("../config/db-config");

class UserModel {
    static async getusers() {
        return new Promise((resolve, reject) => {
            database.query("SELECT * FROM users", [], (error, result) => {
                if (error) {
                    reject(error); // Reject the promise if there's an error
                } else {
                    resolve(result); // Resolve the promise with the query result
                }
            });
        });
    }

    static async adduser(email, pass) {
        try {
            // Using async/await with database queries for better readability and error handling
            const result = await new Promise((resolve, reject) => {
                // Execute the database query to insert a new user
                database.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, pass], (error, result) => {
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
            console.error('Error adding user:', error);
            throw new Error('Failed to add user');
        }
    }
    
    static async deleteuser(id) {
        try {
            const result = await new Promise((resolve, reject) => {
                // Execute the database query to delete the user
                database.query("DELETE FROM users WHERE id = ?", [id], (error, result) => {
                    if (error) {
                        // If there's an error, reject the promise with the error
                        reject(error);
                    } else if (result.affectedRows === 0) {
                        // If no rows were affected, it means the user with the specified ID doesn't exist
                        resolve(false); // Resolve with false to indicate failure
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
            console.error('Error deleting user:', error);
            throw new Error('Failed to delete user');
        }
    }


    // static async modifyUser(id, newData) {
    //     try {
    //         const result = await new Promise((resolve, reject) => {
    //             // Execute the database query to update the user
    //             database.query("UPDATE users SET ? WHERE id = ?", [newData, id], (error, result) => {
    //                 if (error) {
    //                     // If there's an error, reject the promise with the error
    //                     reject(error);
    //                 } else {
    //                     // If the query is successful, resolve the promise with true
    //                     resolve(true);
    //                 }
    //             });
    //         });

    //         // Return the result (true if successful, false otherwise)
    //         return result;
    //     } catch (error) {
    //         // If an error occurs during the process, log the error and throw it
    //         console.error('Error modifying user:', error);
    //         throw new Error('Failed to modify user');
    //     }
    // }
    


    static async modifyUser(id, newData) {
        try {
            const result = await new Promise((resolve, reject) => {
                // Execute the database query to update the user with the specified ID
                database.query("UPDATE users SET ? WHERE id = ?", [newData, id], (error, result) => {
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
    
            // Return the result (true if successful, false otherwise)
            return result; 
        } catch (error) {
            console.error('Error modifying user:', error);
            throw new Error('Failed to modify user');
        }
    }



    static async findById(id) {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM users WHERE id = ? LIMIT 1', [id], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    if (results.length > 0) {
                        resolve(results[0]);
                    } else {
                        resolve(null); // user not found
                    }
                }
            });
        });
    }
    
    

    
}


module.exports=UserModel;
