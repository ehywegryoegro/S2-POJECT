

const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const updateProfile = async (req, res) => {
    const { username, email, phoneNumber } = req.body;
    
    try {
        
        if (!req.user || !req.user[0].id) {
            return res.status(401).json({ status: "error", error: "Unauthorized" });
        }

        
        await db.promise().query('UPDATE users SET username = ?, email = ?, phoneNumber = ? WHERE id = ?', [username, email, phoneNumber, req.user[0].id]);

        return res.status(200).json({ status: "success", message: "Profile updated successfully" });
    } catch (error) {
        console.error("Error updating profile:", error);
        return res.status(500).json({ status: "error", error: "Internal server error" });
    }
};




module.exports = updateProfile;

