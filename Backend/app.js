const express = require("express");
const app = express();
const db = require("./routes/db-config");
const cookie = require("cookie-parser");
const PORT = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookie());
app.use("/",require("./routes/pages"))
app.use("/auth", require("./controllers/auth"))
app.use("/js",express.static(__dirname + "/public/js"));
app.use("/js",express.static(__dirname + "/public/css"));
app.set("view engine" , "ejs");
app.set("views" , "./views");


db.connect((err)=>{
    if(err) throw err;
    console.log("database connected");
})


 









app.listen(PORT,()=>{
    console.log('listening on port 3000')
})