const db = require("../config/db-config");
const bcrypt = require("bcryptjs");


class AuthModel {
    static async checkIfUserExists(email) {
        try {
            const [existingUserRows] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
            return existingUserRows.length > 0;
        } catch (error) {
            console.error('Error checking if user exists:', error);
            throw new Error('Internal server error');
        }
    }




    static async updateOtp(email,otp) {
        try {
            await db.promise().query('UPDATE users SET otp = ? WHERE email = ?', [otp, email]);
            return true; // Indicate success
        } catch (error) {
            console.error('Error updating password:', error);
            throw new Error('Internal server error');
        }
    }



    static async updatePassword(id, hashedPassword) {
        try {
            await db.promise().query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, id]);
            return true; // Indicate success
        } catch (error) {
            console.error('Error updating password:', error);
            throw new Error('Internal server error');
        }
    }









    static async registerUser(email, password , otp) {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            await db.promise().query('INSERT INTO users (email, password, otp) VALUES (?, ?, ?)', [email, hashedPassword , otp]);
            return true; // Return true if user registration is successful
        } catch (error) {
            console.error('Error registering user:', error);
            throw new Error('Internal server error');
        }
    }
}

module.exports = AuthModel;
