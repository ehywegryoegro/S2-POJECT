const bookModel = require("../models/Book");
const categoryModel = require("../models/Categories");
const fs = require('fs');
const path = require('path');

//////////////////////////////////////////////////////////////////////////////////////////////////////
const multer = require('multer');

// Multer configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const category = req.body.category; // Assuming category is provided in the request body
//     const uploadPath = path.join(__dirname,'..', 'books', category); // Create dynamic path based on category


//     if (!fs.existsSync(uploadPath)) {
//       console.error('Category directory does not exist');
//       return cb(new Error('Category directory does not exist'));    }


//     cb(null, uploadPath); // Specify the directory where you want to store the files
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original filename for storing the file
//   }
// });

// const upload = multer({ storage: storage }).single('bookFile'); // 'bookFile' should match the name attribute in your HTML form input field

////////////////////////////////////////////////////////////////////////////////////////////////////



class BookController{

    static async getallbook(req, res) {
        try {
            // Call the getbooks method of the bookModel asynchronously 
            const results = await bookModel.getbooks();

            // Check if results is not null or undefined
            if (results) {
                // If there are results, send them back to the client as a successful response
                res.status(200).json({ success: true, data: results });
            } else {
                // If results is null or undefined, send an appropriate error response
                res.status(404).json({ success: false, message: 'No book found' });
            }
        } catch (error) {
            // If an error occurs during the execution of getbooks method, handle it here
            console.error('Error fetching books:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }




    // static async addnewbook(req, res) {
    //     try {
    //         // Define an array of required fields
    //         const requiredFields = ['title', 'author', 'description','category_id'];
    
    //         // Check if all required fields are provided
    //         const missingFields = requiredFields.filter(field => !req.body[field]);
    
    //         if (missingFields.length > 0) {
    //             // If any required field is missing, send a 400 Bad Request response
    //             return res.status(400).send(`The following fields are required: ${missingFields.join(', ')}`);
    //         }
    
    //         // If all required fields are provided, proceed with adding the book
    //         const title = req.body.title;
    //         const author = req.body.author;
    //         const category = req.body.category;
    //         const description = req.body.description;
    //         const availability = req.body.availability || 'available';
    //         const price = req.body.price;
    //         const category_id = req.body.category_id;
    
    //         // Call the addbook method of the BookModel asynchronously
    //         const success = await bookModel.addbook(title, author, category, description, availability, price,category_id);
    
    //         // Check if the book was successfully added
    //         if (success) {
    //             // If successful, send a success response
    //             return res.status(201).send("Book added successfully");
    //         } else {
    //             // If failed, send a failure response
    //             return res.status(400).send("Failed to add book");
    //         }
    //     } catch (error) {
    //         // If an error occurs during the process, send an internal server error response
    //         console.error('Error adding new book:', error);
    //         return res.status(500).send("Internal Server Error");
    //     }
    // }
    


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



    static async readFileBookById(req, res) {
        try {
            const bookId = req.params.id;
            const book = await bookModel.findById(bookId);

            if (!book) {
                return res.status(404).send('Book not found');
            }

            const filePath = path.join(__dirname, '..', 'storage', 'books', book.category, book.fileName);

            if (!fs.existsSync(filePath)) {
                return res.status(404).send('Book file not found');
            }

            const fileStream = fs.createReadStream(filePath);
            res.setHeader('Content-Type', 'application/pdf');
            fileStream.pipe(res);
        } catch (error) {
            console.error('Error fetching book:', error);
            res.status(500).send('Internal Server Error');
        }
    }


/////////////////////////////////////////////////////////////////////

    // static uploadBook(req, res) {
    //     upload(req, res, async function (err) {
    //       if (err) {
    //         console.error('Error uploading file:', err);
    //         return res.status(500).send('File upload failed');
    //       }
    
    //       try {
    //         const { title, author, category, description, availability, price, category_id } = req.body;
    //         const { filename } = req.file;   


    //         const success = await bookModel.addbook(title, author, category, description, availability, price, category_id, filename);
    
    //         // Check if the book was successfully added
    //         if (success) {
    //           // If successful, send a success response
    //           res.status(201).send("Book added successfully");
    //         } else {
    //           // If failed, send a failure response
    //           res.status(400).send("Failed to add book");
    //         }
    //       } catch (error) {
    //         // If an error occurs during the process, send an internal server error response
    //         console.error('Error adding new book:', error);
    //         res.status(500).send("Internal Server Error");
    //       }
    //     });
    //   }

/////////////////////////////////////////////////////////


static uploadBook(req, res) {

    // Multer configuration

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          const category = req.body.categoryName; // Assuming category is provided in the request body
          const uploadPath = path.join(__dirname,'..','storage', 'books', category); // Create dynamic path based on category
      
      
          if (!fs.existsSync(uploadPath)) {
            console.error('Category directory does not exist');
            return res.status(400).send('Category  does not exist');   }
      
      
          cb(null, uploadPath); // Specify the directory where you want to store the files
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname); // Use the original filename for storing the file
        }
      });
      const upload = multer({ storage: storage }).single('bookFile'); // 'bookFile' should match the name attribute in your HTML form input field



    
    
    upload(req, res, async function (err) {
      if (err) {
        console.error('Error uploading file:', err);
        return res.status(500).send('File upload failed');
      }

      try {
        const { title, author, categoryName, description, availability, price } = req.body;
        // get the category by the name if it is exist to get the id 
        const category = await categoryModel.findByName(categoryName);
        const category_id=category.id;

        const { filename } = req.file;    


        const success = await bookModel.addbook(title, author, categoryName, description, availability, price, category_id, filename);

        // Check if the book was successfully added
        if (success) {
          res.status(201).send("Book added successfully");
        } else {

          res.status(400).send("Failed to add book"); 
        }
      } catch (error) {
        // If an error occurs during the process, send an internal server error response
        console.error('Error adding new book:', error);
        res.status(500).send("Internal Server Error");
      }
    });
  }



}

module.exports = BookController;