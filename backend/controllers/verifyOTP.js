
const db = require("../config/db-config");



const verifyOTP = async (req, res) => {
    const {otp} = req.body;

  try {
    const [rows] = await db.promise().query('SELECT * FROM users WHERE otp = ? AND otp_verified = false', [otp]);
    if (rows.length === 1) {
      // Update user's OTP verification status
      await db.promise().query('UPDATE users SET otp_verified = true WHERE  otp = ?', [otp]);
      res.status(200).json({ status: "success", message: "OTP verified successfully" });
    } else {
        console.log("otp incorrect")
      res.status(400).json({ status: "error", error: "Incorrect OTP or OTP already verified" });
      
    }
  } catch (error) {
    console.error('Error verifying OTP:', error);
    res.status(500).json({ status: "error", error: "Internal server error" });
  }
};

module.exports = verifyOTP;