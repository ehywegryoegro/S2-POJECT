const express = require("express");
const router = express.Router();
const register = require("../controllers/register");
const login = require("../controllers/login");
const logout = require("../controllers/logout");
const addInfo = require("../controllers/updateProfile");
const updateProfile = require("../controllers/updateProfile");
const loggedin = require("../controllers/loggedin");
const verifyOTP = require("../controllers/verifyOTP");
const verify_email = require("../controllers/verify_email")
const forgotPassword = require("../controllers/forgotPassword")
const updatePassword = require("../controllers/newPassword")







 router.post("/register", register)
 router.post("/otpVerification",verifyOTP )
 router.post("/login",login)
 router.get("/logout",logout)
 router.post("/updateProfile", loggedin ,updateProfile )
 router.post("/forgotPassword" , forgotPassword );
 router.post("/verifyEmail",verify_email)
 router.post("/updatePassword" ,updatePassword )

module.exports = router;