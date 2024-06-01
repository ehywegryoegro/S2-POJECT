import React from 'react';
import { useState , useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { primaryColor, blackColor, greyColor } from '../../../Components/Variables/VariablesColors';
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { IoCheckboxOutline } from "react-icons/io5";
import { AiOutlineCloseSquare } from "react-icons/ai";





export default function Search() {
    const location = useLocation();
    const searchResults = location.state?.searchResults || [];
    const [isAuth , setIsAuth] = useState(false)
   
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    useEffect(() => {
        const fetchFavoriteBooks = async () => {
          try {
              const response = await axios.get('http://localhost:4000/favourite', { withCredentials: true });
              setFavoriteBooks(response.data.data.map(book => book.id));
          } catch (error) {
            setIsAuth(true)
              console.error('Error fetching favorite books:', error);
          }
      };

        
        fetchFavoriteBooks();

    }, []);
    function handleClick(bookId) {
      
      axios.post("http://localhost:4000/favourite/addToFavourite", {bookId},{ withCredentials: true })
          .then(response => {
              if (response.status === 201)
               {
                setFavoriteBooks(prevState => [...prevState, bookId]);
                  console.log('added successfully');
              }
               
          })
          .catch(error => {
            if(response.status === 401) {
              setIsAuth(true)
               console.error('Failed to delete');
           }
              console.error('Error:', error);
          });
  }
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
        });}
  return (
    <>
    {isAuth && <div className=' flex justify-center items-center mt-2'><p className='bg-off-white shadow h-9 flex justify-center items-center rounded px-2'><BiErrorCircle className='mr-1' />You do not have an account</p></div>}
      <div className="search-header flex text-md font-medium mx-7 mt-14">
        
        <span className="header-title ml-20">Title</span>
        <span className="header-title ml-24">Ratings</span>
        <span className="header-title ml-6">Category</span>
        <span className="header-title ml-10">Availability</span>
        <span className="header-title ml-24">Status</span>
      </div>
      {searchResults.map((book, index) => (
      <div className="  rounded-md bg-[#FFFFFF] relative m-4 flex flex-row p-1  box-border">
        <div className="m-4 flex flex-row box-border">
          <div className="rounded-md border-[1px_solid_#F1F1F1]">
            <img src={book.cover}  alt="" className="w-16 h-22"/>
          </div>
          <div className="ml-4 flex flex-col box-border">
            <div className="flex flex-col box-border">
              <div className="inline-block break-words font-['Inter'] font-semibold leading-[1.285] text-[#4D4D4D] my-2 mb-2">{book.title}</div>
              <span className="self-start break-words font-['Inter'] font-light text-base leading-[1.285] text-[#4D4D4D] mb-1/2">{book.author}</span>
            </div>
            <span className="self-start break-words font-['Inter'] font-light text-sm leading-[1.285] text-[#4D4D4D]">Second Edition</span>
          </div>
        </div>
        <div className="m-4 flex flex-row justify-between box-border">
          <p className="ml-2 mr-10 my-7 break-words font-['Inter'] font-normal text-base leading-[1.285] text-[#000000]"><span className="container-sub-31">4.5</span>
          <span className='text-xs col' 
          style={{color:greyColor}}>
            /5
          </span>
            </p>
          <div className="flex flex-col box-border mt-2">
            <div className="inline-block break-words font-['Inter'] font-normal leading-[1.285] text-sm text-[#4D4D4D] mt-2 mb-3">{book.category}</div>
            <span className="self-start break-words font-['Inter'] font-normal text-base leading-[1.285] text-xs text-[#4D4D4D]">UX Design</span>
          </div>
        </div>
        <div className="m-4 flex flex-row justify-between box-border">
          <div className="flex flex-col items-center box-border">
            <div className="flex flex-row my-2 mt-4 box-border">
            
            {book.hard_copy ?<IoCheckboxOutline style={{ color: '#22c55e' }} className="w-6  mt-1 h-6 " /> : <AiOutlineCloseSquare style={{ color: 'red' }} className="w-6 mt-1 h-6" />}
            <span className="break-words font-['Inter'] font-normal text-sm text-[#4D4D4D] mt-1 ml-2">Hard Copy</span>
            </div>
            <div className="flex flex-row box-border mr-5">
            {book.ebook ?<IoCheckboxOutline style={{ color: '#22c55e' }} className="w-6 mt-1 h-6" /> : <AiOutlineCloseSquare style={{ color: 'red' }} className="w-6 mt-1 h-6" />}
              <span className="break-words font-['Inter'] font-normal text-sm text-[#4D4D4D] mt-2 ml-2">E-Book</span>
            </div>
          </div>
          <div className="mt-6 ml-10 justify-center box-border">
            <div className="rounded-md bg-[#42BB4E] relative flex flex-row justify-center py-1 px-4 ml-12 box-border" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              <span className="break-words font-['Inter'] font-normal text-sm text-[#FFFFFF]">In-Shelf</span>
            </div>
          </div>
        </div>
        <div className="m-4 flex flex-row justify-between box-border">
          <div className="m-2 flex flex-row justify-center mt-8 mr-8 h-8 box-border">
          <button onClick={() =>favoriteBooks.includes(book.id) ? handleDelete(book.id) : handleClick(book.id)} >{favoriteBooks.includes(book.id) ? (
        <FaHeart  style={{ color: 'red' }} />
    ) : (
        <FaRegHeart style={{ color: 'red' }}  />
    )}</button>
          </div>
          <div className="rounded-md border-black border-double relative flex flex-row justify-center box-border my-6">
            <span className="break-words font-['Inter'] font-normal text-sm text-[#F76B56]">
            <NavLink to={`/bookpreview/${book.id}`}>
              <button className='bg-white text-orange-600 py-1 px-4 rounded-md border-solid border border-orange-600'>Preview</button>
            </NavLink>
            </span>
          </div>
        </div>
      </div>
      ))}
    </>
  );
}
