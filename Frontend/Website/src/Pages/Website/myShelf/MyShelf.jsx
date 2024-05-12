import React from 'react';
import './Myshelf.scss';
import { primaryColor, blackColor } from '../../../Components/Variables/VariablesColors';
import { NavLink, Outlet } from 'react-router-dom';

export default function Myshelf() {

  return (
    <>
      <div className="my-shlef px-8 py-3">
        <p className='font-bold'>Your <span style={{ color: primaryColor }}>Shelf</span></p>
        <div className="contain">
          <ul className='flex mt-5'>
            <li><NavLink to={"/myshelf/allbooks"} style={({ isActive }) => { return isActive ? { color: blackColor } : {}; }} className='pr-5 text-[#868686] transition-all hover:text-black active'>All Books</NavLink></li>
            <li><NavLink to={"/myshelf/favourite"} style={({ isActive }) => { return isActive ? { color: blackColor } : {}; }} className='px-5 text-[#868686] transition-all hover:text-black'>Favourite</NavLink></li>
            <li><NavLink to={"/myshelf/ebooks"} style={({ isActive }) => { return isActive ? { color: blackColor } : {}; }} className='px-5 text-[#868686] transition-all hover:text-black'>E-Books</NavLink></li>
            <li><NavLink to={"/myshelf/articlesandjournals"} style={({ isActive }) => { return isActive ? { color: blackColor } : {}; }} className='px-5 text-[#868686] transition-all hover:text-black'>Articles & Journals</NavLink></li>
            <li><NavLink to={"/shoppingcart"} style={({ isActive }) => { return isActive ? { color: blackColor } : {}; }} className='px-5 text-[#868686] transition-all hover:text-black'>Shopping Cart</NavLink></li>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  )
}
