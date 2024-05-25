

const verify_otp = async (req, res) => {
    const { otp } = req.body;
    const storedOTP = req.session.otp;
    console.log(storedOTP)
    
    try {
    if (otp !== storedOTP) {
      return res.status(400).json({ status: "error", error: "Incorrect OTP" });
    } else{

        return res.status(400).json({ status: "succes", error: "Correct OTP" });

    }
      
    } catch (error) {
      console.error('Error verification user:', error);
      return res.status(500).json({ status: "error", error: "Internal server error" });
    }
  };
  
  module.exports = verify_otp;