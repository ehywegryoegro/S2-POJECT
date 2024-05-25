const express = require("express");
const app = express();
const db = require("./config/db-config");
const cookie = require("cookie-parser");
const PORT = 4000;
const cors = require("cors");
const path = require("path");
const bookRouter = require("./routes/bookRoute")
const readBook = require("./routes/controlroute")
const category = require("./routes/categoryRoute")
const paymentRoutes = require('./routes/paymentRoutes');
const favourite = require('./routes/favRoute')
const loggedin = require("./controllers/loggedin");
// const corsOptions = {
//   origin: 'http://localhost:5173', // Your frontend origin
//   credentials: true, // Allow cookies to be sent
// };



if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(); 
  }
app.use(express.static(path.join(__dirname)));
app.use(cors({
  origin: function(origin , callback){
    if(!origin)return callback(null,true);
    return callback(null, true);
  },
  credentials:true
}));
app.use(express.json());
app.use(cookie());


app.use((req,res,next)=>{
  const origin = req.headers.origin;
  console.log(origin);
  res.header("Access-Control-Allow-Credentials",true);
  res.header("Access-Control-Allow-Origine",origin);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();

})


app.use('/uploads/books', express.static('/uploads/books'));

app.use("/auth", require("./routes/auth"))
app.use("/",require("./routes/pages"));
app.use("/books", bookRouter);
app.use('/cart', paymentRoutes);
app.use("/read" ,readBook )
app.use("/category" ,category)
app.use("/favourite" , favourite)


db.connect((err)=>{
    if(err) throw err;
    console.log("users database connected");
})




 





app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})