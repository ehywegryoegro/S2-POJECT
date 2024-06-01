const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
const session = require('express-session');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();

const AuthModel = require("../models/AuthModel");
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'waelamine896@gmail.com', 
    pass: 'nuqtrwscjulkvfae' 
  }
});

const generateOTP = () => {
  return randomstring.generate({
    length: 5,
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
    console.log("otp sent ")
    return true;
  } catch (error) {
    console.error('Failed to send OTP:', error);
    return false;
  }
};

const register = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).json({ status: "error", error: "Please provide email, password, and confirm password" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ status: "error", error: "Passwords do not match" });
  }

  try {
    const otp = generateOTP();
    const status = await sendOTP(email, otp);
    console.log(status)
    console.log(otp);

    // Save user registration details in the database
    if(status){
    const success = await AuthModel.registerUser(email, password, otp);
    if (success) {
      return res.status(200).json({ status: "success", message: "Registration successful. Please verify your account using the OTP sent to your email." });
    } else {
      return res.status(500).json({ status: "error", error: "Failed to register user 2" });
    }
    }else{
      return res.status(500).json({ status: "error", error: "Failed to register user" });
    }
    
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ status: "error", error: "Internal server error" });
  }
};

module.exports = register;
