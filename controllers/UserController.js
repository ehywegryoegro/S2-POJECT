
const userModel=require("../models/User");

class UserController {
    static async getalluser(req, res) {
        try {
            // Call the getusers method of the userModel asynchronously
            const results = await userModel.getusers();

            // Check if results is not null or undefined
            if (results) {
                // If there are results, send them back to the client as a successful response
                res.status(200).json({ success: true, data: results });
            } else {
                // If results is null or undefined, send an appropriate error response
                res.status(404).json({ success: false, message: 'No users found' });
            }
        } catch (error) {
            // If an error occurs during the execution of getusers method, handle it here
            console.error('Error fetching users:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }


    // static async addnewuser(req, res) {   
    //     try {
    //         const email = req.body.email;
    //         const password = req.body.password;

    //         // Call the adduser method of the userModel asynchronously
    //         const success = await userModel.adduser(email, password);

    //         // Check if the user was successfully added
    //         if (success) {
    //             res.status(201).send("User added successfully");
    //         } else {
    //             res.status(400).send("Failed to add user");
    //         }
    //     } catch (error) {
    //         // If an error occurs during the process, send an internal server error response
    //         console.error('Error adding new user:', error);
    //         res.status(500).send("Internal Server Error");
    //     }
    // }

    static async deleteuser(req, res) {
        try {
            // Extract the user ID from the request body
            const id = req.params.id;
    
            // Check if the ID exists
            if (!id) {
                // If ID is not provided, send a bad request response
                return res.status(400).send("User ID is required");
            }
    
            // Call the deleteuser method of the userModel asynchronously
            const result = await userModel.deleteuser(id);
    
            // Check if the user was successfully deleted
            if (result) {
                // If successful, send a success response with status code 200
                res.status(200).send("User deleted successfully");
            } else {
                // If failed, send a failure response with status code 404
                res.status(404).send("User not found or delete failed");
            }
        } catch (error) {
            // If an error occurs during the process, send an internal server error response with status code 500
            console.error('Error deleting user:', error);
            res.status(500).send("Internal Server Error");
        }
    }


    // static async modifyUser(req, res) {
    //     try {
    //         const id = req.params.id; // Assuming you're passing the user ID as a parameter in the URL
    //         const newData = req.body; // Assuming you're sending the new user data in the request body

    //         // Call the modifyUser method of the UserModel asynchronously
    //         const success = await userModel.modifyUser(id, newData);

    //         // Check if the user was successfully modified
    //         if (success) {
    //             // If successful, send a success response
    //             res.status(200).send("User modified successfully");
    //         } else {
    //             // If failed, send a failure response
    //             res.status(400).send("Failed to modify user");
    //         }
    //     } catch (error) {
    //         // If an error occurs during the process, send an internal server error response
    //         console.error('Error modifying user:', error);
    //         res.status(500).send("Internal Server Error");
    //     }
    // }


    static async getuserById(req, res) {
        const id = req.params.id;
        try {
            const user = await userModel.findById(id);
            if (user) {
                res.status(200).json({ success: true, data: user });
            } else {
                res.status(404).json({ success: false, message: 'user not found' });
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    
}

module.exports = UserController;