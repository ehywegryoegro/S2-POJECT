


const jwt = require("jsonwebtoken");
const db = require("../config/db-config");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv").config();

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ status: "error", error: "Please provide email and password" });
    }

    try {
        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {

            if (err) {
                console.log("111")
                return res.status(500).json({ status: "error", error: "Internal server error" });
            }

            if (results.length === 0 || !await bcrypt.compare(password, results[0].password)) {
                console.log("222")
                return res.status(401).json({ status: "error", error: "Incorrect email or password" });

            }
            if (!results[0].otp_verified) {
                return res.status(403).json({ status: "error", error: "your account is not activated" });
            }else{
                console.log("error3")
                console.log(results[0].otp_verified)
            }
            const token = jwt.sign({ id: results[0].id, role: results[0].role }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES
            });
            const cookieOptions = {
                expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                httpOnly: false,
                sameSite:'None',
                secure:true
                
            }

            
            return res.status(200).cookie("userSave", token, cookieOptions).json({ 
                status: "success", 
                message: "User logged in successfully",
                user: {
                    id: results[0].id,
                    role: results[0].role}
             });
        });
    } catch (error) {
        console.log("error4")
        return res.status(500).json({ status: "error", error: "Internal server error" });
        
            
        
    }
};



module.exports = login;





