import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../../Components/header/Header'
import SideBar from '../../../Components/sideBar/SideBar'
import './BookPreview.scss';
import { NavLink } from 'react-router-dom';
import { IoMdCheckmarkCircle } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";
export default function BookPreview() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [relatedBooks , setRelatedBooks]=useState([])
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100;
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch book data
                const bookResponse = await axios.get(`http://localhost:4000/books/getid/${id}`, { withCredentials: true });
                setBook(bookResponse.data.data);
    
                // Fetch related books data
                if (bookResponse.data.data && bookResponse.data.data.categoryId) {
                    const relatedBooksResponse = await axios.get(`http://localhost:4000/books/getCategoryid/${bookResponse.data.data.categoryId}`, { withCredentials: true });
                    setRelatedBooks(relatedBooksResponse.data.data);
                    console.log(relatedBooksResponse.data.data);
                } else {
                    console.log("Book or categoryId is not defined");
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [id]);
    
    

    if (!book) {
        return <div>Loading...</div>;
    }
  return (
    <div className="book-preview-container">
            <div className="book-preview-content">
                <button className="back-button">&larr; Back to results</button>
                <div className="book-preview-main">
                    {/* Left Section - Book Cover */}
                    <div className="left-section">
                        <div className="book-cover">
                            <img src={book.cover} alt="Book Cover" />
                        </div>
                    </div>
                    {/* Right Section - Book Info and About Author */}
                    <div className="right-section">
                        <div className="book-info">
                            <h1 className="book-title">{book.title}</h1>
                            <p className="book-author">By <a href="#" className="author-link">{book.author}</a>, {book.price} DA</p>
                            <p className="book-edition">Second Edition</p>
                            <div className="ratings">
                                <div className="stars">★★★★★</div>
                                <div className="ratings-info">5.0 Ratings</div>
                                <div className="readers-info">119 Have read</div>
                            </div>
                            <div className="availability-status">
                                <div className="availability">
                                    <div className="availability-label">Availability</div>
                                    <div className="availability-item flex items-center"><span className="check-mark">{book.hard_copy ? ( <IoMdCheckmarkCircle className='mr-1' />) : ( <AiFillCloseCircle style={{ color: 'red' }}  className='mr-1' />)}</span><span className={book.hard_copy ? 'text-green-500' : 'text-red-500'}>Hard copy</span></div>
                                    <div className="availability-item flex items-center"><span className="check-mark">{book.ebook ? ( <IoMdCheckmarkCircle className='mr-1' />) : ( <AiFillCloseCircle style={{ color: 'red' }}  className='mr-1' />)}</span><span className={book.ebook ? 'text-green-500' : 'text-red-500'}>E-Book</span></div>
                                </div>
                                <div className="status">
                                    <div className="status-label">Status</div>
                                    <div className="status-value "> <button className='bg-green-500 w-24 h-8 my-2 rounded-md text-white '>In-Shelf</button> </div>
                                </div>
                                <div className="add-to-list">
                                    <button className="add-to-list-button">Add to List</button>
                                </div>
                            </div>
                            <button className="read-now-button bg-green-500">Read Now</button>
                        </div>
                        <div className="about-author">
                            <h2 className="section-title"><span className='text-[#DD6B20]'>About</span>  Author</h2>
                            <p className="author-description"><div className='my-4 text-lg '>{book.author}</div> <p>
        {isExpanded ? book.authoDescription : `${book.authoDescription.slice(0, maxLength)}...`}
        <a 
          href="#read-more" 
          onClick={(e) => {
            e.preventDefault();
            toggleDescription();
          }} 
          className="text-orange-500"
        >
          {isExpanded ? ' Show less' : ' Read more'}
        </a>
      </p></p>
                            <h3 className="other-books-title">Other Books</h3>
                            <div className="other-books">
                            {relatedBooks[0] && (
        <NavLink to={`/bookpreview/${relatedBooks[0].id}`}>
            <img src={relatedBooks[0].cover} alt="Other Book 1" className="other-book-cover" />
        </NavLink>
    )}
                               {relatedBooks[0] && (
        <NavLink to={`/bookpreview/${relatedBooks[1].id}`}>
            <img src={relatedBooks[1].cover} alt="Other Book 1" className="other-book-cover" />
        </NavLink>)}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="additional-info">
                    <div className="overview">
                        <h2 className="section-title">Overview</h2>
                        <p className="overview-description">Since Don't Make Me Think was first published in 2000, hundreds of thousands of Web designers and developers have relied on usability guru Steve Krug's guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it's one of the best-loved and most ...</p>
                    </div>
                </div> */}
                {/* <div className="details-reviews">
                    
                    <div className="book-details">
                        <h2 className="section-title">Book Details</h2>
                        <div className="detail-item">Published in: <span className="detail-value">United States</span></div>
                        <div className="detail-item">Publish Date: <span className="detail-value">2000</span></div>
                        <div className="detail-item">Publisher: <span className="detail-value">New Riders Press</span></div>
                        <div className="detail-item">Pages: <span className="detail-value">216</span></div>
                    </div>
                    <div className="community-reviews">
                        <h2 className="section-title">Community Reviews</h2>
                        <div className="review-item">Pace: <span className="review-value">Meandering 100%</span></div>
                        <div className="review-item">Enjoyability: <span className="review-value">Interesting 100%</span></div>
                        <button className="feedback-button">Feedback?</button>
                    </div> 
                </div> */}

<div className="p-6 bg-white ">
      {/* Navigation Tabs */}
      <div className="mb-6 shadow-lg">
        <ul className="flex border-b">
          <li className="-mb-px mr-1">
            <a className="inline-block py-2 px-4 text-orange-500 font-semibold border-b-2 border-orange-500" href="#overview">Overview</a>
          </li>
          <li className="mr-1">
            <a className="inline-block py-2 px-4 text-gray-400 font-semibold" href="#details">Details</a>
          </li>
          <li className="mr-1">
            <a className="inline-block py-2 px-4 text-gray-400 font-semibold" href="#reviews">4.1k Reviews</a>
          </li>
          <li className="mr-1">
            <a className="inline-block py-2 px-4 text-gray-400 font-semibold" href="#lists">Lists</a>
          </li>
        </ul>
      </div>

      {/* Publish Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 shadow-lg">
        <div className="text-center">
          <div className="text-sm text-gray-500">Publish Date</div>
          <div className="text-lg font-bold">2000</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Publisher</div>
          <div className="text-lg font-bold text-orange-500">New Riders Press</div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Pages</div>
          <div className="text-lg font-bold">216</div>
        </div>
      </div>

      {/* Book Description */}
      <div className="mb-6">
      <p>
        {isExpanded ? book.description : `${book.description.slice(0, maxLength)}...`}
        <a 
          href="#read-more" 
          onClick={(e) => {
            e.preventDefault();
            toggleDescription();
          }} 
          className="text-orange-500"
        >
          {isExpanded ? ' Show less' : ' Read more'}
        </a>
      </p>
      </div>

      {/* Book Details and Community Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className='shadow-lg px-4 py-4'>
          <h2 className="text-lg font-bold">Book Details</h2>
          <p>Published in <strong>United States</strong></p>
        </div>
        <div className='shadow-lg px-4 py-4'>
          <h2 className="text-lg font-bold">Community Reviews</h2>
          <p className="flex items-center">
            <span className="mr-2">PACE</span>
            <span className="bg-gray-200 rounded-full px-2 py-1 text-sm">Meandering 100%</span>
          </p>
          <p className="flex items-center">
            <span className="mr-2">ENJOYABILITY</span>
            <span className="bg-gray-200 rounded-full px-2 py-1 text-sm">Interesting 100%</span>
          </p>
          
        </div>
      </div>
    </div>
            </div>
        </div>
 )
}
