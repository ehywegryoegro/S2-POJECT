// import React,{ useEffect, useRef, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { primaryColor } from '../../../../Components/Variables/VariablesColors';
// import axios from "axios";
// import MyShelfNavbar from "../../../../Components/myshelfNavbar/myshelfNavbar";
// import PaymentForm from "../../payment_gateway/payment"




// export default function Cart(){
//     const [books, setBooks] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4000/cart', { withCredentials: true });
//                 console.log(response)
//                 setBooks(response.data.data);
//                 console.log(books)
//             } catch (error) {
//                 console.error('Error fetching books:', error);
//             }
//         };
        
//         fetchData();

//     }, []);
//     function handleDelete(id) {
        
//         axios.delete(`http://localhost:4000/cart/${id}`, { withCredentials: true })
//             .then(response => {
//                 if (response.status === 200) {
//                     const updatedBooks = books.filter(book => book.id !== id);
//                     setBooks(updatedBooks);
                   
//                     console.log('deleted successfully');
//                 } else {
                    
//                     console.error('Failed to delete');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     }




// return(
    


//     <>
//             <div className="search-header justify-between align-center flex text-md font-medium mx-5 mt-14">
//                 <span className="header-title  ml-24">Title</span>
//                 <span className="header-title  ml-20">Book Format</span>
//                 <span className="header-title  mr-16">Charges</span>
//                 <span></span>
//                 <span className="header-title mr-72">
//                     <NavLink to={"/"}>
//                         <button className='bg-orange-600 text-white py-1 px-6 rounded-md border-solid border border-orange-600'>
//                             Pay All
//                         </button>
//                     </NavLink>
//                 </span>
//             </div>
//             {books.map((book, index) => (
//             <div className="rounded-md bg-[#FFFFFF] relative m-4 flex flex-row p-1  box-border">
//                 <div className="m-4 flex flex-row box-border">
//                     <div className="rounded-md border-[1px_solid_#F1F1F1]">
//                         <img src={book.cover} alt="" className="w-16 h-22" />
//                     </div>
//                     <div className="ml-4 flex flex-col box-border">
//                         <div className="flex flex-col box-border">
//                             <div className="inline-block break-words font-['Inter'] font-semibold leading-[1.285] text-[#4D4D4D] my-2 mb-2">{book.title}</div>
//                             <span className="self-start break-words font-['Inter'] font-light text-base leading-[1.285] text-[#4D4D4D] mb-1/2">{book.author}</span>
//                         </div>
//                         <span className="self-start break-words font-['Inter'] font-light text-sm leading-[1.285] text-[#4D4D4D]">{book.category}</span>
//                     </div>
//                 </div>
//                 <div className="m-4 flex flex-row justify-between box-border">
//                     <p className="ml-32  mr-10 my-7 break-words font-['Inter'] font-semibold text-base leading-[1.285] text-[#000000]">
//                         Hard Copy
//                     </p>
//                 </div>
//                 <div className="m-4 flex flex-row justify-between box-border">
//                     <div className="mt-6 ml-14 justify-center box-border font-semibold">
//                         <p>{book.price}</p>
//                     </div>
//                 </div>
//                 <div className="m-4 flex flex-row justify-between box-border">
//                     <div className="rounded-md border-black border-double relative flex flex-row justify-center box-border my-6 ml-36">
//                         <span className="break-words font-['Inter'] font-normal text-sm text-[#F76B56]">
//                             <NavLink to={"/"}>
//                                 <button className='bg-orange-600 text-white py-1 px-4 rounded-md border-solid border border-orange-600'>Pay Now</button>
//                             </NavLink>
//                         </span>
//                     </div>
//                 </div>
//                 <div className="m-4 flex flex-row justify-between box-border">
//                     <div className="rounded-md border-black border-double relative flex flex-row justify-center box-border my-6 ml-36">
//                         <span className="break-words font-['Inter'] font-normal text-sm text-[#F76B56]">
                            
//                                 <button  onClick={() =>{ handleDelete(book.id)}} className='bg-orange-600 text-white py-1 px-4 rounded-md border-solid border border-orange-600'>Delete</button>
                            
//                         </span>
//                     </div>
//                 </div>
//             </div>
            
//              ))}
//         </>
//     )

// {/* <div className="base flex-rows">
//     <div className=" flex relative">
//         <span className="header-title  mr-auto ml-25">Title</span>
//         <span className="header-title mr-auto ml-25">Category</span>
//         <span className="header-title mr-auto ml-25">Charges</span>
//         <span className="header-title mr-auto ml-28">Book Format</span>
//         <span className="header-title mr-auto ml-28">Charges</span>
//     </div>
// {books.map((book, index) => (
//       <div className="rect1 my-6 flex">
//         <img src={book.cover} alt="" className="w-40 h-32 rounded" />
//         <p className="titre mx-5">{book.title}</p>
//         <p className="auteur mx-5">{book.author}</p>
//         <p className="edition mx-5">Second Edition</p>
//         <div className="rate mx-5">4.5/5</div>
//         <div className="cat mx-5">{book.category}</div>
//         <div className="flex-col bg-gray-300">
//         <i className="fa-solid  mx-5 fa-check w-5 h-5 rounded-full bg-green-500"></i>
//         <p className="hardCopy mx-5">Hard Copy</p>
//         <i className="fa-solid mx-5 fa-check w-5 h-5 rounded-full bg-green-500" id="ebook"></i>
//         <p className="ebook mx-5">E-Book</p>
//         </div>
//       </div>
//       ))}
//     </div> */}



// }



import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import MyShelfNavbar from "../../../../Components/myshelfNavbar/myshelfNavbar";
import PaymentForm from "../../payment_gateway/payment";
import "./Cart.scss"; // Make sure to create and import the corresponding SCSS file
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51P7It6RvUoIKTFiLEIooBA1WdiXmYnaySktQGZjqUhs5uYFUSQoZzMLO6uXWpgQtyKx4FxjRmAwlGo1LE19iCydg00gnRmS4ll');
export default function Cart() {
  const [books, setBooks] = useState([]);
  const [ids, setIds] = useState([]);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showClose ,setShowClose] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/cart", { withCredentials: true });
        setBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);
  const calculateTotalPrice = (books) => {
    
    let total=0;
   for (let i=0 ; i<=books.length-1 ; i++){
    console.log(books[i].price )
      
      total = total  + books[i].price
   }
   console.log(total)
    setTotalPrice(total);
    
   
  };
  const getIds =()=>{
    const allIds = books.map(book => book.id);
    setIds(allIds);
  }
  const handlePayNow = (id) => {
    setIds([id]);
  };
  
  function handleDelete(id) {
    axios.delete(`http://localhost:4000/cart/${id}`, { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          const updatedBooks = books.filter(book => book.id !== id);
          setBooks(updatedBooks);
          console.log("Deleted successfully");
        } else {
          console.error("Failed to delete");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      {showPaymentForm && (
        <Elements stripe={stripePromise}>
        <PaymentForm total={totalPrice}  onClose={() => setShowPaymentForm(false)} ID={ids} />
        </Elements>
      )}
      <div className={`cart-container ${showPaymentForm ? "dimmed" : ""}`}>

        <div className="search-header justify-between align-center flex text-md font-medium mx-5 mt-14">
        
          <span className="header-title ml-24">Title</span>
          <span className="header-title ml-20">Book Format</span>
          <span className="header-title mr-16">Charges</span>
          <span></span>
          <span className="header-title mr-72">
            <button
              className="bg-orange-600 text-white py-1 px-6 rounded-md border-solid border border-orange-600"
              onClick={() =>{ calculateTotalPrice(books),getIds(),
                 setShowPaymentForm(true),setShowClose(true)}}
            >
              Pay All
            </button>
          </span>
        </div>
        {books.map((book) => (
          <div key={book.id} className="rounded-md bg-[#FFFFFF] relative m-4 flex flex-row p-1 box-border">
            <div className="m-4 flex flex-row box-border">
              <div className="rounded-md border-[1px_solid_#F1F1F1]">
                <img src={book.cover} alt="" className="w-16 h-22" />
              </div>
              <div className="ml-4 flex flex-col box-border">
                <div className="flex flex-col box-border">
                  <div className="inline-block break-words font-['Inter'] font-semibold leading-[1.285] text-[#4D4D4D] my-2 mb-2">
                    {book.title}
                  </div>
                  <span className="self-start break-words font-['Inter'] font-light text-base leading-[1.285] text-[#4D4D4D] mb-1/2">
                    {book.author}
                  </span>
                </div>
                <span className="self-start break-words font-['Inter'] font-light text-sm leading-[1.285] text-[#4D4D4D]">
                  {book.category}
                </span>
              </div>
            </div>
            <div className="m-4 flex flex-row justify-between box-border">
              <p className="ml-32 mr-10 my-7 break-words font-['Inter'] font-semibold text-base leading-[1.285] text-[#000000]">
                Hard Copy
              </p>
            </div>
            <div className="m-4 flex flex-row justify-between box-border">
              <div className="mt-6 ml-14 justify-center box-border font-semibold">
                <p>{book.price}</p>
              </div>
            </div>
            
            <div className="m-4 flex flex-row justify-between box-border">
              <div className="rounded-md border-black border-double relative flex flex-row justify-center box-border my-6 ml-36">
                <span className="break-words font-['Inter'] font-normal text-sm text-[#F76B56]">
                  <button
                    className="bg-orange-600 text-white py-1 px-4 rounded-md border-solid border border-orange-600"
                    onClick={() => { setTotalPrice(book.price), setShowPaymentForm(true),setShowClose(true) , handlePayNow(book.id)}}
                  >
                    Pay Now
                  </button>
                </span>
              </div>
            </div>
            <div className="m-4 flex flex-row justify-between box-border">
              <div className="rounded-md border-black border-double relative flex flex-row justify-center box-border my-6 ml-36">
                <span className="break-words font-['Inter'] font-normal text-sm text-[#F76B56]">
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="bg-orange-600 text-white py-1 px-4 rounded-md border-solid border border-orange-600"
                  >
                    Delete
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
