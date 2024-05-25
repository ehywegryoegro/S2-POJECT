import React ,{ useEffect, useState } from 'react';
import "./SideBar.scss";
import { Link, NavLink } from 'react-router-dom';
import { greyColor, primaryColor } from '../Variables/VariablesColors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function SideBar() {
    const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:4000/auth/check', { withCredentials: true });
        if(response.status === 200){
            setIsAuth(true)
            console.log(isAuth)
        }else{
            setIsAuth(false)
            console.log(isAuth)
        }
        
      } catch (error) {
        setIsAuth(false);
        console.log(isAuth)
      }
    };

    checkAuth();
  }, []);
    
    return (
        <div className='sidebar px-10 pt-8 pb-5 flex flex-col justify-between items-center'>
           <div className="top">
                <div className="logo">
                    <img src={require("../../assets/Logo.svg")} alt="" />
                </div>
                <ul className='nav md:pl-10 mt-10  flex flex-col items-center ...'>
                    <li className='py-2 text-sm'><NavLink style={({ isActive }) => {return isActive ? { color: primaryColor } : {};}} to="/"><FontAwesomeIcon icon={faHouse} className='md:mr-2'/><span className='text'>Home</span></NavLink></li>
                    <li className='py-2 text-sm'><NavLink style={({ isActive }) => {return isActive ? { color: primaryColor } : {};}} to="/search"><FontAwesomeIcon icon={faMagnifyingGlass} className='md:mr-2'/><span className='text'>Search</span></NavLink></li>
                    
            <li className='py-2 text-sm'>
              <NavLink style={({ isActive }) => { return isActive ? { color: primaryColor } : {}; }} to="/myshelf">
                <FontAwesomeIcon icon={faBook} className='md:mr-2' /><span className='text'>My Shelf</span>
              </NavLink>
            </li>
            </ul>
           </div>
           <div className="bottom flex flex-col">
                <Link to='/aboutus' className='text-sm pb-' style={{color: greyColor}}>About</Link>
                <Link to='/support' className='text-sm pb-1' style={{color: greyColor}}>Support</Link>
                <Link to='/termsandconditions' className='text-sm pb-1' style={{color: greyColor}}>Term & Condition</Link>
           </div>
        </div>
    )
}
