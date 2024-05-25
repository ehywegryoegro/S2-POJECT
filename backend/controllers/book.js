const db = require("../routes/bookRoute");
const multer = require("multer");
const path = require("path");



exports.getAllBooks = (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};
exports.getBookById = (req, res) => {
    const bookId = req.params.id;
    const q = "SELECT * FROM books WHERE id = ?";
  
    db.query(q, [bookId], (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data[0]); 
    });
  }
  
  
  exports.addBook = (req, res) => {
    const { title, desc, price, category } = req.body;
    const cover = req.file ? req.file.filename : null;
  console.log(cover)
    const q = "INSERT INTO books(`title`, `desc`, `cover`, `price`, `category`) VALUES (?, ?, ?, ?, ?)";
    const values = [title, desc, cover, price, category];
  
    db.query(q, values, (err, data) => {
      if (err) {
        console.error('Error adding book:', err);
        return res.status(500).json({ error: 'Error adding book' });
      }
      return res.json({ success: 1, message: 'Book added successfully' });
    });
  };


exports.deleteBook = (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM books WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    
    return res.json(data);
  });
};


exports.updateBook = (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title`= ?, `desc`= ?, `cover`= ?, `price`= ?, `category`= ? WHERE id = ?";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price,
    req.body.category,
    bookId
  ];

  db.query(q, values, (err, updateResult) => {
    if (err) {
      console.error('Error updating book:', err);
      return res.status(500).json({ error: 'Error updating book' });
    }

    
    const selectQuery = "SELECT * FROM books WHERE id = ?";
    db.query(selectQuery, [bookId], (selectErr, data) => {
      if (selectErr) {
        console.error('Error fetching updated book data:', selectErr);
        return res.status(500).json({ error: 'Error fetching updated book data' });
      }

     
      if (data.length > 0) {
        return res.json(data[0]);
      } else {
        
        return res.status(404).json({ error: 'Book not found' });
      }
    });
  });
};


exports.searchBooks = (req, res) => {
  const  searchTerm = req.query.term;  
  console.log(req.query)
  if (!searchTerm) {
    return res.status(400).json({ error: 'Please provide a search term' });
  }

  const sqlQuery = `
    SELECT *
    FROM books
    WHERE title LIKE ? OR category LIKE ?
  `;

  const searchParam = `%${searchTerm}%`; 

  console.log('SQL Query:', sqlQuery);
  console.log('Search Parameter:', searchParam);

  db.query(sqlQuery, [searchParam, searchParam], (err, data) => {
    if (err) {
      console.error('Error searching books:', err);
      return res.status(500).json({ error: 'Error searching books' });
    }

    console.log('Search Results:', data);

    return res.json(data);
  });
};



