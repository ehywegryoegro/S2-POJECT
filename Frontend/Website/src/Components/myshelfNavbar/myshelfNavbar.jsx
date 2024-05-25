import React,{ useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { primaryColor } from "../Variables/VariablesColors";


export default function MyShelfNavbar(){

return(
<div className="my-shlef px-8 py-3 ">
      <p className='font-bold'>Your <span style={{ color: primaryColor }}>Shelf</span></p>
      <div className="contain ">
        <ul className='flex mt-5'>
          <li><NavLink style={({ isActive }) => {return isActive ? { color: primaryColor } : {};}} to='/myshelf' className='pr-5 text-[#868686] transition-all hover:text-black active'>All-Books</NavLink></li>
          <li><NavLink style={({ isActive }) => {return isActive ? { color: primaryColor } : {};}} to='/myshelf/favourite' className='px-5 text-[#868686] transition-all hover:text-black'>Favourite</NavLink></li>
          <li><NavLink style={({ isActive }) => {return isActive ? { color: primaryColor } : {};}} to='/myshelf/ebooks' className='px-5 text-[#868686] transition-all hover:text-black'>E-Books</NavLink></li>
          <li><NavLink style={({ isActive }) => {return isActive ? { color: primaryColor } : {};}} to='/myshelf/cart' className='px-5 text-[#868686] transition-all hover:text-black'>Cart</NavLink></li>
        </ul>
        </div>
 </div>
    
)

}