


const jwt = require("jsonwebtoken");
const db = require("../config/db-config");
const { promisify } = require("util");


const loggedin = async (req, res, next) => {
  
  
    if (req.cookies.userSave) {
        try {
            
            const decoded = await promisify(jwt.verify)(req.cookies.userSave, process.env.JWT_SECRET);
             
            const [user] = await db.promise().query('SELECT * FROM users WHERE id = ?', [decoded.id]);
            if (!user) {
                return next();
            }
            req.user = user;
            req.user.role = decoded.role;
           
            next();
        
        } catch (err) {
            console.error(err);
            return res.status(401).json({ message: 'Unauthorized' });
            // next();
        }
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
       // next();
    }
}


module.exports = loggedin;







 