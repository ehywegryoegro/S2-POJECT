const bookModel = require("../models/Book");
const categoryModel = require("../models/Categories");
const fs = require('fs');
const path = require('path');
const UPLOAD_DIR = path.join(__dirname, '..', 'upload', 'books');

const multer = require('multer');


class BookController{

    static async getallbook(req, res) {
        try {
            
            const results = await bookModel.getbooks();

            
            if (results) {
                
                res.status(200).json({ success: true, data: results });
            } else {
               
                res.status(404).json({ success: false, message: 'No book found' });
            }
        } catch (error) {
            
            console.error('Error fetching books:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    static async getEbooks(req, res) {
      try {
          
          const results = await bookModel.Ebooks();

          
          if (results) {
              
              res.status(200).json({ success: true, data: results });
          } else {
             
              res.status(404).json({ success: false, message: 'No book found' });
          }
      } catch (error) {
          
          console.error('Error fetching books:', error);
          res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
  }


   


    static async getbookbyid(req, res) {
        const id =  req.params.id;
        try {
            const book = await bookModel.findById(id);
            if (book) {
                res.status(200).json({ success: true, data: book });
            } else {
                res.status(404).json({ success: false, message: 'Book not found' });
            }
        } catch (error) {
            console.error('Error fetching book:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
    static async getbookbyCategoryid(req, res) {
      const id =  req.params.id;
      try {
          const book = await bookModel.findByCategoryId(id);
          if (book) {
              res.status(200).json({ success: true, data: book });
          } else {
              res.status(404).json({ success: false, message: 'Book not found' });
          }
      } catch (error) {
          console.error('Error fetching book:', error);
          res.status(500).json({ success: false, message: 'Internal Server Error' });
      }
  }



    // static async readFileBookById(req, res) {
    //     try {
    //         const bookId = req.params.id;
    //         const book = await bookModel.findById(bookId);

    //         if (!book) {
    //             return res.status(404).send('Book not found');
    //         }
            
    //         const filePath ="http://localhost:4000/upload/books/c.v.pdf";
    //         console.log(filePath)
    //         console.log(fs.existsSync(filePath))
    //         if (!fs.existsSync(filePath)) {
    //             return res.status(404).send('Book file not found');
    //         }

    //         const fileStream = fs.createReadStream(filePath);
    //         res.setHeader('Content-Type', 'application/pdf');
    //         fileStream.pipe(res);
    //     } catch (error) {
    //         console.error('Error fetching book:', error);
    //         res.status(500).send('Internal Server Error');
    //     }
    // }


    static async readFileBookById(req, res) {
      try {
          const bookId = req.params.id;
          const book = await bookModel.findById(bookId);
  
          if (!book) {
              return res.status(404).send('Book not found');
          }
          
          const filePath = "http://localhost:4000/upload/books/c.v.pdf"; // Assuming this is the correct URL to the PDF file
          console.log(filePath);
  
          const fileStream = fs.createReadStream(filePath);
          fileStream.on('error', (error) => {
              console.error('Error reading file:', error);
              res.status(404).send('Book file not found');
          });
          
          res.setHeader('Content-Type', 'application/pdf');
          fileStream.pipe(res);
      } catch (error) {
          console.error('Error fetching book:', error);
          res.status(500).send('Internal Server Error');
      }
  }
  

static uploadBook(req, res) {
  const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        const category = req.body.category;
        const uploadPath = path.join(__dirname, '..', 'upload', 'books');
    
        if (!fs.existsSync(uploadPath)) {
          console.error('Category directory does not exist');
          return res.status(400).send('Category does not exist');
        }
    
        cb(null, uploadPath);
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      }
    });
    
    const upload = multer({ storage: storage }).fields([{ name: 'bookFile', maxCount: 1 }, { name: 'coverImage', maxCount: 1 }]);
  
  upload(req, res, async function (err) {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).send('File upload failed');
    }

    try {
      const { title, author, category, description, availability, price } = req.body;
      const { filename: bookFilename } = req.files['bookFile'][0];
      const { filename: coverFilename } = req.files['coverImage'][0];
      const bookFilePath =   `${req.protocol}://${req.get('host')}/upload/books/${bookFilename }`;
      const coverFilePath = `${req.protocol}://${req.get('host')}/upload/books/${coverFilename }`
      console.log(coverFilePath)

      const categoryy = await categoryModel.findByName(category);
      const categoryId = categoryy.id;
      console.log(categoryy)
      

      const success = await bookModel.addbook(title, author, category, description, availability, price, categoryId, coverFilePath,bookFilePath );

      if (success) {
        res.status(201).send("Book added successfully");
      } else {
        res.status(400).send("Failed to add book");
      }
    } catch (error) {
      console.error('Error adding new book:', error);
      res.status(500).send("Internal Server Error");
    }
  });
}


static async updateBook(req, res) {

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const category = req.body.category;
      const uploadPath = path.join(__dirname, '..', 'upload', 'books');
  
      if (!fs.existsSync(uploadPath)) {
        console.error('Category directory does not exist');
        return res.status(400).send('Category does not exist');
      }
  
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
  
  const upload = multer({ storage: storage }).fields([{ name: 'bookFile', maxCount: 1 }, { name: 'coverImage', maxCount: 1 }]);
  upload(req, res, async function (err) {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).send('File upload failed');
    }
    try {
  const bookId = req.params.id;
  console.log(bookId)
  const { title, author, category, description, availability, price } = req.body;
  const { filename: bookFilename } = req.files['bookFile'][0];
      const { filename: coverFilename } = req.files['coverImage'][0];
      const bookFilePath =   `${req.protocol}://${req.get('host')}/upload/books/${bookFilename }`;
      const coverFilePath = `${req.protocol}://${req.get('host')}/upload/books/${coverFilename }`

      const categoryy = await categoryModel.findByName(category);
      const categoryId = categoryy.id;
      console.log(categoryId)
  
      const success = await bookModel.updateBook(title, author, category, description, availability, price,categoryId , coverFilePath,bookFilePath, bookId);
      if (success) {
          return res.json({ success: true, message: 'Book updated successfully' });
      } else {
          return res.status(404).json({ error: 'Book not found' });
      }
  } catch (error) {
      console.error('Error updating book:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  })
}


static async deleteBook(req, res) {
  const bookId = req.params.id;
  try {
      const success = await bookModel.deleteBook(bookId);
      if (success) {
          return res.json({ success: true, message: 'Book deleted successfully' });
      } else {
          return res.status(404).json({ error: 'Book not found' });
      }
  } catch (error) {
      console.error('Error deleting book:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
  }
}

static async searchBooks(req, res) {
  const searchTerm = req.query.term;
  if (!searchTerm) {
      return res.status(400).json({ error: 'Please provide a search term' });
  }
  try {
      const searchResults = await bookModel.searchBooks(searchTerm);
      return res.json(searchResults);
  } catch (error) {
      console.error('Error searching books:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
  }
}

static async FindRecent(req, res) {
  try {
      
      const results = await bookModel.findRecent();

      
      if (results) {
          
          res.status(200).json({ success: true, data: results });
      } else {
         
          res.status(404).json({ success: false, message: 'No book found' });
      }
  } catch (error) {
      
      console.error('Error fetching books:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
}




module.exports = BookController;