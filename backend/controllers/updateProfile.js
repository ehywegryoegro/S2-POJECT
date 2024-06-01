

const db = require("../config/db-config");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const path = require('path');
const multer = require('multer');
const UserProfileModel = require("../models/UserProfileModel");
const UserModel = require("../models/User")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath = path.join(__dirname,'..', 'upload', 'users'); 
  
  
      cb(null, uploadPath); 
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); 
    }
  });
  
  const upload = multer({ storage: storage }).single('profileImg');


const updateProfile = async (req, res) => {
    upload(req, res, async function (err) {
        if (err) {
          console.error('Error uploading img:', err);
          return res.status(500).send('img upload failed');
        }



    const { username, email, phoneNumber , bio } = req.body;
    const profileImg = req.file ? req.file.filename : null;
    const profileImgPath =  `${req.protocol}://${req.get('host')}/upload/users/${profileImg }`;
    try {
        if (!req.user || !req.user[0].id) {

            console.log("unauthorized")
            return res.status(401).json({ status: "error", error: "Unauthorized" });
        }

        await UserProfileModel.updateProfile(req.user[0].id, username, email, phoneNumber , bio , profileImgPath);
        const updatedUser = await UserModel.findById(req.user[0].id);

        return res.status(200).json({ status: "success", message: "Profile updated successfully", data: updatedUser });
    } catch (error) {
        console.error("Error updating profile:", error.message);
        return res.status(500).json({ status: "error", error: "Internal server error" });
    }})
};


// const updateProfile = async (req, res) => {
//     upload(req, res, async function (err) {
//         if (err) {
//           console.error('Error uploading img:', err);
//           return res.status(500).send('img upload failed');
//         }



//     const { username, email, phoneNumber , bio } = req.body;
//     const profileImg = req.file ? req.file.filename : null;
//     try {
//         // if (!req.user || !req.user[0].id) {
//         //     return res.status(401).json({ status: "error", error: "Unauthorized" });
//         // }

//         await UserProfileModel.updateProfile( username, email, phoneNumber , bio , profileImg);

//         return res.status(200).json({ status: "success", message: "Profile updated successfully" });
//     } catch (error) {
//         console.error("Error updating profile:", error.message);
//         return res.status(500).json({ status: "error", error: "Internal server error" });
//     }})
// };



module.exports = updateProfile;

