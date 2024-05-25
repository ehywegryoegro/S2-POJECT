// const db = require("../routes/db-config");
// const jwt = require("jsonwebtoken");

// const logout = (req, res) => {
//     res.cookie('userSave', 'logout', {
//         expires: new Date(Date.now() + 2 * 1000),
//         httpOnly: true
//     });
//     res.status(200).redirect("/");
// }

// module.exports = logout
const db = require("../config/db-config");
const jwt = require("jsonwebtoken");

const logout = (req, res) => {
    
    res.cookie('userSave', '', {
        expires: new Date(0), 
        httpOnly: false,
        sameSite:'None',
         secure:true ,
         domain:"localhost"
    });
    
    
    res.status(200).json({ status: "success", message: "User logout successfully" });
}

module.exports = logout;
