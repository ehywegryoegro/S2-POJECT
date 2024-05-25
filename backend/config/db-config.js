const sql = require('mysql2');
const express = require("express");
//const dotenv = require("dotenv").config();
const db = sql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"usersdb"
})




module.exports = db;