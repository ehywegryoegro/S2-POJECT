const express = require("express");
const app = express();
const db = require("./routes/db-config");
const booksdb = require("./routes/bookRoute");
const cookie = require("cookie-parser");
const PORT = 4000;
const cors = require("cors");
const path = require("path");
const bookRouter = require("./routes/controlroute")
const paymentRoutes = require('./routes/paymentRoutes');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(); 
  }
app.use(express.static(path.join(__dirname)));
app.use(cors());
app.use(express.json());
app.use(cookie());

const session = require('express-session');



app.use(session({
  secret: 'dwudgyiwgd', 
  resave: false,
  saveUninitialized: true,
}));

app.use("/auth", require("./routes/auth"))
app.use("/",require("./routes/pages"));
app.use("/books", bookRouter);
app.use('/card', paymentRoutes);


db.connect((err)=>{
    if(err) throw err;
    console.log("users database connected");
})

booksdb.connect((err)=>{
    if(err) throw err;
    console.log("books database connected");
})


 

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'auth.html'));
  });




app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})