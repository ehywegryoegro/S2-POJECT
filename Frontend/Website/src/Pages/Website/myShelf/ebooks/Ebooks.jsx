import React,{ useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { primaryColor } from '../../../../Components/Variables/VariablesColors';
import axios from "axios";
import MyShelfNavbar from "../../../../Components/myshelfNavbar/myshelfNavbar";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


export default function Ebooks(){

    const [books, setBooks] = useState([]);
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/books/ebooks', { withCredentials: true });
                
                setBooks(response.data.data);
                console.log(books)
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

        fetchData();
        fetchFavoriteBooks();

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

    return(
        <div className="my-shlef px-8 py-3 ">
        <div className="books mt-5 mb-10  p-4 "> 
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
                            <button className='text-black text-md px-2 py-1 bg-gray-300 rounded-lg text-xs'>Add to Cart</button>
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




    )



}



