const express = require("express");
const cors = require("cors");
const mydb = require("./config/db");
const rout = require("./routes/router");

const app = express();


var corsOptions = {
    origin: "http://localhost:8081"
};




app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended : true }));

app.use(rout);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

