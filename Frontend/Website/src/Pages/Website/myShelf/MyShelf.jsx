import React, { useEffect, useRef, useState } from 'react';
import './Myshelf.scss';
import { primaryColor } from '../../../Components/Variables/VariablesColors';
import { NavLink } from 'react-router-dom';
import axios from "axios"
import MyShelfNavbar from '../../../Components/myshelfNavbar/myshelfNavbar';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export default function MyShelfs() {

  
    const [books, setBooks] = useState([]);
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    const [cartBooks, setCartBooks] = useState([]);
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/books/', { withCredentials: true });
                
                setBooks(response.data.data);
               
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };
        const fetchFavoriteBooks = async () => {
          try {
              const response = await axios.get('http://localhost:4000/favourite', { withCredentials: true });
              setFavoriteBooks(response.data.data.map(book => book.id));
             
          } catch (error) {
              console.error('Error fetching favorite books:', error);
          }
      };
      
      const fetchCart = async () => {
        try {
            const response = await axios.get('http://localhost:4000/cart', { withCredentials: true });
            setCartBooks(response.data.data.map(book => book.id));
            console.log(cartBooks)
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };
    
        fetchCart()
        fetchData();
        fetchFavoriteBooks();
        console.log(cartBooks.includes(20)) 

    }, []);

    function handleDelete(id) {
        
      axios.delete(`http://localhost:4000/favourite/${id}`, { withCredentials: true })
          .then(response => {
              if (response.status === 200) {
                  setFavoriteBooks(prevState => prevState.filter(bookId => bookId !== id));
                 
                  console.log('deleted successfully');
              } else {
                  
                  console.error('Failed to delete');
              }
          })
          .catch(error => {
              console.error('Error:', error);
          });
  }
  function handleClick(bookId) {
      
      axios.post("http://localhost:4000/favourite/addToFavourite", {bookId},{ withCredentials: true })
          .then(response => {
              if (response.status === 201)
               {
                setFavoriteBooks(prevState => [...prevState, bookId]);
                  console.log('added successfully');
              } else {
                  
                  console.error('Failed to delete');
              }
          })
          .catch(error => {
              console.error('Error:', error);
          });
  }

  function AdddToCart(bookId,  bookPrice ) {
        
    axios.post('http://localhost:4000/cart/addToCart',{ bookId,  bookPrice }, { withCredentials: true })
        .then(response => {
            if (response.status === 201) {
              setCartBooks(prevState => [...prevState, bookId]);
                console.log('book added successfully');
            } else {
                
                console.error('Failed to add book');
            }
        })
        .catch(error => {
            console.error('Faild to add:', error);
        });
}


  return (



    <div className="my-shlef px-8 py-3 ">
      <div className="contain ">
                    
              
             <div className="books mt-5 mb-10  p-4  "> 
                <section id="Projects" className="w-full md:w-fit mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-items-center justify-center gap-y-5 gap-x-5 ">
                    {books.map((book, index) => (
                        <div key={index} className="w-full relative py-4 px-2 md:w-36 bg-white shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl ">
                          <div className={`flex justify-center items-center h-5 w-5 ${book.ebook ? 'bg-green-600' : 'bg-gray-400'} absolute right-1 top-1 rounded-xl`}>
                                <p className="text-xs text-white font-bold">E</p>
                            </div>
                            <NavLink to={`/bookpreview/${book.id}`}>
                                <img
                                    src={book.cover}
                                    alt={`book-${book.id}`}
                                    className="md:h-36 w-full md:w-28 mx-auto mt-1 object-cover rounded-xl"
                                />
                                <div className="px-4 py-3 md:w-36">
                                    <p className="text-sm text-black truncate block capitalize">{book.title}</p>
                                    <span className="text-gray-400 mr-3 text-xs">{book.author}, {book.price}</span>
                                    <div className="flex items-center">
                                        <p className="text-xs font-medium text-black cursor-auto my-1">4.5<span className="text-xs text-gray-600 font-light cursor-auto">/5</span></p>
                                    </div>
                                </div>
                                </NavLink>
                            <div className="flex gap-1 justify-around">
                            <button onClick={() =>{ AdddToCart(book.id ,book.price )}} disabled={cartBooks.includes(book.id)}  className={`text-md px-2 py-1 text-white rounded-lg text-xs ${cartBooks.includes(book.id) ? 'bg-gray-400' : 'bg-[#F4683C]'}`}> {cartBooks.includes(book.id) ? 'In Cart' : 'Add to Cart'}</button>
                            
                            <button onClick={() =>favoriteBooks.includes(book.id) ? handleDelete(book.id) : handleClick(book.id)} className='text-black text-md px-2 py-1 bg-white rounded-lg'>{favoriteBooks.includes(book.id) ? (
        <FaHeart style={{ color: 'red' }} />
    ) : (
        <FaRegHeart style={{ color: 'red' }}  />
    )}</button>
                            </div>
                        </div>
                    ))}
                </section>
             </div> 
           
             
     
 </div>
 </div>
      
  )
}
