
const bcrypt = require("bcryptjs");
const db = require("../routes/db-config");

const updatePassword = async (req, res) => {
    const {  password, confirmPassword } = req.body;
  
    if (  !password || !confirmPassword) {
      return res.status(400).json({ status: "error", error: "Please provide   password, and confirm password" });
    }
  
    if (password !== confirmPassword) {
      return res.status(400).json({ status: "error", error: "Passwords do not match" });
    }
    
    try {
        const { email } = req.session.registrationInfo;
        console.log(email)
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.promise().query('UPDATE users SET password = ? WHERE email = ?', [hashedPassword, email]);

    
        req.session.registrationInfo = null;
        return res.status(200).json({ status: "success", message: "Password updated successfully" });
      
    } catch (error) {
      console.error('Error registering user:', error);
      return res.status(500).json({ status: "error", error: "Internal server error" });
    }
  };
  
  module.exports = updatePassword;