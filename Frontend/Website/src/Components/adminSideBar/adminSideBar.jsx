import React from 'react';
import "./adminSideBar.scss";
import { Link, NavLink } from 'react-router-dom';
import { greyColor, primaryColor } from '../Variables/VariablesColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function AdminSideBar() {
    return (
        <div className='sidebar px-10 pt-8 pb-5 flex flex-col justify-between items-center'>
            <div className="top">
                <div className="logo">
                    <img src={require("../../assets/Logo.svg")} alt="" />
                </div>
                <ul className='nav md:pl-10 mt-10'>
                    <li className='py-1 text-sm'><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/">
                        <div className='flex items-center'>
                            <img className='w-8 h-8' src={require("../../assets/dashboard.svg")} alt="" />
                            <span className='text'>Dashboard</span>
                        </div>
                    </NavLink>
                    </li>
                    <li className='pb-1 px-1 text-sm flex items-center '><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/admin">
                        <div className='flex items-center'>
                            <img className='w-6 h-6 mr-1' src={require("../../assets/books.svg")} alt="" />
                            <span className='text'>Books</span>
                        </div>
                    </NavLink>
                    </li>
                    <li className='py-1 px-1.5 text-sm'><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/">
                        <div className='flex items-center'>
                            <img className='w-5 h-5 mr-1.5' src={require("../../assets/categories.svg")} alt="" />
                            <span className='text'>Categories</span>
                        </div>
                    </NavLink>
                    </li>
                    <li className='py-1 px-1 ml-0.5 text-sm'><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/">
                        <div className='flex items-center'>
                            <img className='w-5 h-5 mr-2' src={require("../../assets/users.svg")} alt="" />
                            <span className='text'>Users</span>
                        </div>
                    </NavLink>
                    </li>
                    <li className='pt-1 px-1 text-sm'><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/">
                        <div className='flex items-center' style={{ marginLeft: '1.5px' }}>
                            <img className='w-6 h-6 mr-1' src={require("../../assets/comments.svg")} alt="" />
                            <span className='text'>Comments</span>
                        </div>
                    </NavLink>
                    </li>
                    <li className='text-sm flex items-center  '><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/">
                        <div className='flex items-center ' style={{ marginLeft: '-3px' }}>
                            <img className='w-10 h-10' src={require("../../assets/order.svg")} alt="" />
                            <span className='text'>Order</span>
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
