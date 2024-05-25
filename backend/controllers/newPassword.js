const bcrypt = require("bcryptjs");
const { createLogger } = require("vite");
const AuthModel = require("../models/AuthModel");

const updatePassword = async (req, res) => {
    const { password, confirmPassword } = req.body;

    if (!password || !confirmPassword) {
        return res.status(400).json({ status: "error", error: "Please provide password and confirm password" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ status: "error", error: "Passwords do not match" });
    }

    try {
        if (!req.user || !req.user[0].id) {

            console.log("unauthorized")
            return res.status(401).json({ status: "error", error: "Unauthorized" });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        await AuthModel.updatePassword(req.user[0].id, hashedPassword);
        
        
        return res.status(200).json({ status: "success", message: "Password updated successfully" });
    } catch (error) {
        console.error('Error updating password:', error.message);
        res.status(500).json({ status: "error", error: "Internal server error" });
    }
};

module.exports = updatePassword;
