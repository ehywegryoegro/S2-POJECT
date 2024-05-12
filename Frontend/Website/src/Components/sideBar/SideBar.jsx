import React from 'react';
import "./SideBar.scss";
import { Link, NavLink } from 'react-router-dom';
import { greyColor, primaryColor } from '../Variables/VariablesColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SideBar() {
    return (
        <div className='sidebar px-10 pt-8 pb-5 flex flex-col justify-between items-center'>
            <div className="top">
                <div className="logo">
                    <img src={require("../../assets/Logo.svg")} alt="" />
                </div>
                <ul className='nav md:pl-10 mt-10'>
                    <li className='py-2 text-sm'><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/"><FontAwesomeIcon icon={faHouse} className='md:mr-2' /><span className='text'>Home</span></NavLink></li>
                    <li className='py-2 text-sm'><NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="search"><FontAwesomeIcon icon={faMagnifyingGlass} className='md:mr-2' /><span className='text'>Search</span></NavLink></li>
                    <li className='py-2 text-sm'>
                        <NavLink
                            style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/myshelf/allbooks"
                        ><FontAwesomeIcon icon={faBook} className='md:mr-2' />
                            <span className='text'>My Shelf</span>
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
