



const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'waelamine896@gmail.com', 
    pass: 'nuqtrwscjulkvfae' 
  }
});


const generateOTP = () => {
  return randomstring.generate({
    length: 6,
    charset: 'numeric'
  });
};


const sendOTP = async (email, otp) => {
  const mailOptions = {
    from: 'waelamine896@gmail.com',
    to: email,
    subject: 'OTP for Registration',
    text: `Your OTP for registration is: ${otp}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('OTP sent successfully to', email);
  } catch (error) {
    console.error('Failed to send OTP:', error);
  }
};

const register = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if ( !email || !password || !confirmPassword) {
    return res.status(400).json({ status: "error", error: "Please provide  email, password, and confirm password" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ status: "error", error: "Passwords do not match" });
  }

  try {
    const otp = generateOTP(); 

    
    await sendOTP(email, otp);

    
    req.session.otp = otp;
    req.session.registrationInfo = {
        email,
        password
      };

   
    res.status(200).redirect('/verify-otp');
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ status: "error", error: "Internal server error" });
  }
};

module.exports = register;
