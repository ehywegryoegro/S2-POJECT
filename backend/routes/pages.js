
const express = require("express");
const router = express.Router();
const path = require("path")
const loggedin = require("../controllers/loggedin")





router.get("/",loggedin , (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../views/Wlcm.html"));
});

router.get("/register", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../views/Reg.html"));
});

router.get("/login", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../views/Log.html"));
});
router.get("/otp", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../views/OTP.html"));
});

module.exports = router;
