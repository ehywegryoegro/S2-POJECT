const BookModel = require("../models/Book");
const CategoryModel = require("../models/Categories");
const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname,'..', 'storage', 'categoriesImgs'); // Create dynamic path based on category


    cb(null, uploadPath); // Specify the directory where you want to store the files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename for storing the file
  }
});

const upload = multer({ storage: storage }).single('img'); // 'bookFile' should match the name attribute in your HTML form input field

////////////////////////////////////////////////////////////////////////////////////////////////////


class CategoryController {
    static async getAllCategories(req, res) {
        try {
            const categories = await CategoryModel.getcategories();

             if (categories) {
                // If there are results, send them back to the client as a successful response
                res.status(200).json({ success: true, data: categories });
            } else {
                // If results is null or undefined, send an appropriate error response
                res.status(404).json({ success: false, message: 'No category found' });
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }



    static async addCategory(req, res) {
        upload(req, res, async function (err) {
            if (err) {
              console.error('Error uploading img:', err);
              return res.status(500).send('img upload failed');
            }
      
            try {
             const Data = req.body;
             if((req.file)){
                Data.img_path = req.file.path;
             }else{
                Data.img_path = path.join(__dirname,'..', 'storage', 'categoriesImgs','default.jpg');
             }

            if (!Data.name || !Data.description) {
                return res.status(400).json({ message: 'Name or description is required' });
            }
            const success = await CategoryModel.addCategory(Data);

            // Check if the category was successfully added
            if (success) {
                // If successful, send a success response 
                res.status(201).send("Category added successfully");
            } else {
                // If failed, send a failure response
                res.status(400).send("Failed to add category");
            }
        } catch (error) {
            console.error('Error adding category:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
          })
 
    }







    // static async addCategory(req, res) {
    //     try {
    //         const { name, description } = req.body;
    //         console.log(name,description)
    //         const imgPath = req.file;
    //         if (!name || !description) {
    //             return res.status(400).json({ message: 'Name or description is required' });
    //         }
    //         const success = await CategoryModel.addCategory(name, description,imgPath);

    //         // Check if the category was successfully added
    //         if (success) {
    //             // If successful, send a success response
    //             res.status(201).send("Category added successfully");
    //         } else {
    //             // If failed, send a failure response
    //             res.status(400).send("Failed to add category");
    //         }
    //     } catch (error) {
    //         console.error('Error adding category:', error);
    //         res.status(500).json({ message: 'Internal Server Error' });
    //     }
    // }




    static async updateCategory(req, res) {
        upload(req,res,async function(error){
            if (error) {
                console.error('Error uploading img:', err);
                return res.status(500).send('img upload failed');
              }
        
            try {
                const id = req.params.id; 
                const newData = req.body; 
                if ((req.file)){
                    newData.img_path = req.file.path;
                }

        
                // Call the updateCategory method of the CategoryModel asynchronously
                const updatedCategory = await CategoryModel.updateCategory(id, newData);
        
                // Check if the category was successfully updated
                if (updatedCategory) {
                    // If successful, send a success response
                    res.status(200).send("Category updated successfully");
                } else {
                    // If failed, send a failure response
                    res.status(400).send("Failed to update category");
                }
            } catch (error) {
                // If an error occurs during the process, send an internal server error response
                console.error('Error updating category:', error);
                res.status(500).send("Internal Server Error");
            }
        })

    }




    static async deleteCategory(req, res) {
        try {
            const id = req.params.id;
            const result = await CategoryModel.deleteCategory(id);
    
            if (result) {
                res.status(200).send("category deleted successfully");
            } else {
                res.status(404).send("category not found or delete failed");
            }
        } catch (error) {
            console.error('Error deleting category:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }



    static async getcategoryById(req, res) {
        const id = req.params.id;
        try {
            const category = await CategoryModel.findById(id);
            const categoryBooks = await BookModel.getCategoryBooks(id);
            if (category) {
                if (categoryBooks){
                    res.status(200).json({ success: true, category_info: category,category_books: categoryBooks });
                }else{
                    res.status(200).json({ success: true, category_info: category,category_books: "category is empty" });
                }
                
            } else {
                res.status(404).json({ success: false, message: 'category not found' });
            }
        } catch (error) {
            console.error('Error fetching category:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }





}

module.exports = CategoryController; 