import React from 'react';
import "./adminSideBare";
import { Link, NavLink } from 'react-router-dom';
import { greyColor, primaryColor } from '../Variables/VariablesColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IoBookSharp } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";
import { RiMessage2Line } from "react-icons/ri";
import { TbUserSquare } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { TbDeviceAnalytics } from "react-icons/tb";



export default function AdminSideBar() {
    return (
        <div className='sidebar px-10 pt-8 pb-5 flex flex-col justify-between items-center'>
            <div className="top">
                <div className="logo">
                    <img  alt="" />
                </div>
                <ul className='nav ml-14 md:pl-10 mt-10 flex flex-col align-center justify-center'>
                    <li className='py-1 text-sm'><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/">
                        <div className='flex relative items-center'>
                            <TbDeviceAnalytics className='w-7 h-7 ml-1'  />
                            <span className=' absolute left-9 top-1 text'>Dashboard</span>
                        </div>
                    </NavLink>
                    </li>
                    <li className='pb-1 px-1 text-sm flex items-center '><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/admin">
                        <div className='flex relative items-center'>
                            
                            <IoBookSharp className='w-8 mt-3 h-6 mr-4' />
                            <span className='absolute left-9 top-3 text'>Books</span>
                        </div>
                    </NavLink>
                    </li>
                    <li className='py-1 px-1.5 text-sm'><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/">
                        <div className='flex relative items-center'>
                            <TbCategoryPlus className='  w-5 mt-3 h-5 mr-1.5 ml-1' />
                            <span className=' absolute left-7 top-3 text'>Categories</span>
                        </div>
                    </NavLink>
                    </li>
                    <li className='py-1 px-1 ml-0.5 text-sm'><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/">
                        <div className='flex relative items-center'>
                            <TbUserSquare className='w-5 mt-3 h-5 mr-2 ml-1' />
                            <span className=' absolute left-9 top-3 text'>Users</span>
                        </div>
                    </NavLink>
                    </li>
                    <li className='pt-1 px-1 text-sm'><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/">
                        <div className='flex relative items-center' style={{ marginLeft: '1.5px' }}>
                            <RiMessage2Line className='w-6 h-6 mt-3 mr-1 ml-1' />
                            <span className=' absolute left-9 top-3 text'>Comments</span>
                        </div>
                    </NavLink>
                    </li>
                    <li className='text-sm flex items-center  '><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/">
                        <div className='flex items-center relative ' style={{ marginLeft: '-3px' }}>
                            <FiShoppingCart className='w-7 h-6 mt-3 ml-2.5 mr-1' />
                            <span className=' absolute left-11 top-4 text '>Order</span>
                        </div>
                    </NavLink>
                    </li>
                </ul>
            </div>
            <div className="bottom flex flex-col">
                <NavLink to="aboutus" className='text-xs pb-1' style={{ color: greyColor }}>About</NavLink>
                <NavLink to="support" className='text-xs pb-1' style={{ color: greyColor }}>Support</NavLink>
                <NavLink to="termsandconditions" className='text-xs pb-1' style={{ color: greyColor }}>Terms & Conditions</NavLink>
            </div>
        </div>

    )
}
