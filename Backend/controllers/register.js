const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    console.log(req.body)
    // Validate request body
    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ status: "error", error: "Please provide username, email, password, and confirm password" });
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        return res.status(400).json({ status: "error", error: "Passwords do not match" });
    }

    // Further processing
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        // Store user data in the database
        db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (error, results) => {
            if (error) {
                return res.status(500).json({ status: "error", error: "Failed to register user" });
            }
            return res.status(201).json({ status: "success", message: "User registered successfully" });
        });
    } catch (error) {
        return res.status(500).json({ status: "error", error: "Internal server error" });
    }
};

module.exports = register;
