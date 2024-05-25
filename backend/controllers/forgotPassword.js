const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
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
        throw new Error('Failed to send OTP');
    }
};

const forgetPassword = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ status: "error", error: "Please provide email" });
    }

    try {
        const userExists = await AuthModel.checkIfUserExists(email);
        if (userExists) {
            const otp = generateOTP();
            await sendOTP(email, otp);
            req.session.otp = otp;
            req.session.registrationInfo = { email };
            res.status(200).json({ status: "success", message: "OTP sent successfully" });
        } else {
            return res.status(400).json({ status: "error", error: "You are not registered" });
        }
    } catch (error) {
        console.error('Error in forgetPassword:', error.message);
        const errorMessage = error.message === 'Failed to send OTP' ? 'Failed to send OTP' : 'Internal server error';
        res.status(500).json({ status: "error", error: errorMessage });
    }
};

module.exports = forgetPassword;
