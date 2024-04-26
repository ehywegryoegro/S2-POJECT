const express = require("express");
const bookController = require("../controllers/bookController");



const router = express.Router();

const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});


const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 
  }
});


function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.status(400).json({
      success: 0,
      message: err.message
    });
  } else {
    res.status(500).json({
      success: 0,
      message: "Internal server error"
    });
  }
}


router.use(upload.single('cover'));
router.use(errHandler);

router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getBookById);
router.post("/", bookController.addBook);
router.delete("/:id", bookController.deleteBook);
router.put("/:id", bookController.updateBook);
router.get('/search', bookController.searchBooks);
module.exports = router;
