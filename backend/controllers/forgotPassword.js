


const db = require("../routes/db-config");
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

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  if ( !email ) {
    return res.status(400).json({ status: "error", error: "Please provide  email" });
  }

  

  try {

    const [existingUserRows] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);
    if(existingUserRows.length > 0){
    const otp = generateOTP(); 

    
    await sendOTP(email, otp);

    console.log (otp , email)
    req.session.otp = otp;
    req.session.registrationInfo = {
        email
      };
    
   
    res.status(200).json({ status: "succes", error: "otp sent" });
} else{
    return res.status(400).json({ status: "error", error: "You are not registered" });
}

  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ status: "error", error: "Internal server error" });
  }
};

module.exports = forgetPassword ;
