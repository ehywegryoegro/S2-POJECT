const mysql = require("mysql")


const db = mysql.createPool({
    host :"localhost",
    user:"root",
    password : "",
    database : "project",
    port : 3306

});

db.getConnection(()=>{
    console.log("connect to db successffully");
})


module.exports = db;


