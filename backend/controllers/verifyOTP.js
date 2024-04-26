
const bcrypt = require("bcryptjs");
const db = require("../routes/db-config");

const verifyOTP = async (req, res) => {
  const { otp } = req.body;
  const storedOTP = req.session.otp;
  const {email, password } = req.session.registrationInfo;
  console.log({  email, password })
  
  if (otp !== storedOTP) {
    return res.status(400).json({ status: "error", error: "Incorrect OTP" });
  }

  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.promise().query('INSERT INTO users ( email, password) VALUES ( ?, ?)', [ email, hashedPassword]);
    
    req.session.registrationInfo = null;
    req.session.otp = null;
    return res.status(200).json({ status: "success", message: "User registered successfully" });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ status: "error", error: "Internal server error" });
  }
};

module.exports = verifyOTP;
