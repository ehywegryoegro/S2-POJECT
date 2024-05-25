const db = require("../config/db-config");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

class UserProfileModel {
    static async updateProfile(userId, username, email, phoneNumber , bio , profileImg) {
        try {
            await db.promise().query('UPDATE users SET username = ?, email = ?, phoneNumber = ? , bio = ? , profileImg = ? WHERE id = ?', [username, email, phoneNumber, bio , profileImg , userId]);
            return true; // Indicate success
        } catch (error) {
            console.error('Error updating profile:', error);
            throw new Error('Internal server error');
        }
    }
}

// class UserProfileModel {
//     static async updateProfile( username, email, phoneNumber , bio , profileImg) {
//         try {
//             await db.promise().query('UPDATE users SET username = ?, email = ?, phoneNumber = ? , bio = ? , profileImg = ? WHERE email = ?', [username, email, phoneNumber, bio , profileImg , email]);
//             return true; // Indicate success
//         } catch (error) {
//             console.error('Error updating profile:', error);
//             throw new Error('Internal server error');
//         }
//     }
// }
module.exports = UserProfileModel;
