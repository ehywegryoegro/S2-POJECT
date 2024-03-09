
const express = require("express");
const router = express.Router();

router.get("/main", (req, res) => {
    res.status(200).json({ message: "Welcome to the main page" });
});

router.get("/register", (req, res) => {
    res.status(200).json({ message: "Register page " });
});

router.get("/login", (req, res) => {
    res.status(200).json({ message: "Login page " });
});

module.exports = router;
