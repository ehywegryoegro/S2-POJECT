const express = require("express");
const router = express.Router();
const register = require("../controllers/register");
const login = require("../controllers/login");
const logout = require("../controllers/logout");
const addInfo = require("../controllers/updateProfile");
const updateProfile = require("../controllers/updateProfile");
const loggedin = require("../controllers/loggedin");
const isAdmin = require("../controllers/isAdmin")
const verifyOTP = require("../controllers/verifyOTP");
const verify_email = require("../controllers/verify_email")
const forgotPassword = require("../controllers/forgotPassword")
const updatePassword = require("../controllers/newPassword")
const UserController = require("../controllers/UserController")
const isUser = require("../controllers/isUser")
const ResendOtp = require("../controllers/resend")



router.get("/",loggedin,UserController.getuserById)
router.get("/check", loggedin,isUser, (req, res) => {
    console.log("User authenticated:", req.user);
    res.status(200).json({ authenticated: true })});
router.get('/admin', loggedin, isAdmin, (req, res) => {
    res.status(200).json({ admin: true })
    })
 router.post("/register", register)
 router.post("/otpVerification",verifyOTP )
 router.post("/login",login)
 router.get("/logout",logout)
 router.post("/resend", ResendOtp)
 router.post("/updateProfile",loggedin ,updateProfile )
 router.post("/forgotPassword" , forgotPassword );
 router.post("/verifyEmail",verify_email)
 router.put("/updatePassword" ,loggedin,updatePassword )

module.exports = router;