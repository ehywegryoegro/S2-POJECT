import { Link, NavLink } from 'react-router-dom';
import './Header.scss'
import { primaryColor, secondaryColor } from '../Variables/VariablesColors';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendarDays, faClock, faLanguage } from '@fortawesome/free-solid-svg-icons';


export default function Header(props) {
    const [isPhone, setIsPhone] = useState(false);
    const navbar = useRef(null);
    const [sreachType, setSearchType] = useState("All");
    const showSearch = useRef();
    const showProfileBar = useRef();
    const showLangBar = useRef();
    const showSideBarPhone = useRef();

    const [hasAccount, setHasAccount] = useState(true);


    function checkAccount() {
        if (localStorage.getItem('user')) {
            setHasAccount(true);
        } else {
            setHasAccount(false);
        }
    }

    useEffect(() => {
        window.innerWidth < 768 ? setIsPhone(true) : setIsPhone(false);
    });

    useEffect(() => {
        function Resize() {
            window.innerWidth < 768 ? setIsPhone(true) : setIsPhone(false);
        }
        window.addEventListener('resize', Resize);
        return () => {
            window.removeEventListener('resize', Resize);
        };
    }, []);


    // Time Hour/Second
    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    function shNavbar() {
        navbar.current.classList.toggle("hidden");
        navbar.current.classList.contains('hidden') ? document.body.classList.remove("remove-scrolling") : document.body.classList.add("remove-scrolling");
    }

    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }


    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    // Day/Month/Year
    function getCurrentDate() {
        const now = new Date();
        const day = now.getDate();
        const month = now.getMonth() + 1; // Month starts from 0
        const year = now.getFullYear();
        return { day, month, year };
    }

    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    function DateDisplay() {

        useEffect(() => {
            const intervalId = setInterval(() => {
                setCurrentDate(getCurrentDate());
            }, 1000); // Update every second
            return () => {
                clearInterval(intervalId); // Clean up the interval on unmount
            };
        }, []);
    }
    const [role,setRole] = useState("admin");

    return (

        <>
            <div className='global'>

                <div className="header py-5 px-4 flex justify-between items-center relative">
                    <button onClick={() => showSideBarPhone.current.classList.toggle("show-bar")}><FontAwesomeIcon icon={faBars} className='md:hidden text-3xl mb-1' /></button>
                    <div ref={showSideBarPhone} className="side-phone-bar show-bar absolute bg-white w-full left-0 text-center">
                        {role == "user" ?
                        <div>
                        <ul className='mt-10'>

                            <Link to={"/"} onClick={() => showSideBarPhone.current.classList.toggle("show-bar")}>
                                <li className='py-4 font-bold cursor-pointer hover:text-[#d8ba66]'>
                                    Home
                                </li>
                            </Link>

                            <Link to={"/search"} onClick={() => showSideBarPhone.current.classList.toggle("show-bar")}>
                                <li className='py-4 font-bold cursor-pointer hover:text-[#d8ba66]'>
                                    Search
                                </li>
                            </Link>

                            <Link to={"/myshelf"} onClick={() => showSideBarPhone.current.classList.toggle("show-bar")}>
                                <li className='py-4 font-bold cursor-pointer hover:text-[#d8ba66]'>
                                    MyShelf
                                </li>
                            </Link>

                            <Link to={"/about"} onClick={() => showSideBarPhone.current.classList.toggle("show-bar")}>
                                <li className='py-4 font-bold cursor-pointer hover:text-[#d8ba66]'>
                                    About
                                </li>
                            </Link >

                            <Link to={"/support"}>
                                <li className='py-4 font-bold cursor-pointer hover:text-[#d8ba66]'>
                                    Support
                                </li >
                            </Link>
                        </ul >
                        </div>

                        :

                        <div>
                        <ul className='mt-10'>

                            <Link to={"/admin"} onClick={() => showSideBarPhone.current.classList.toggle("show-bar")}>
                                <li className='py-4 font-bold cursor-pointer hover:text-[#d8ba66]'>
                                    Dashboard
                                </li>
                            </Link>

                            <Link to={"/admin"} onClick={() => showSideBarPhone.current.classList.toggle("show-bar")}>
                                <li className='py-4 font-bold cursor-pointer hover:text-[#d8ba66]'>
                                    Books
                                </li>
                            </Link>

                            <Link to={"/admin"} onClick={() => showSideBarPhone.current.classList.toggle("show-bar")}>
                                <li className='py-4 font-bold cursor-pointer hover:text-[#d8ba66]'>
                                    Users
                                </li>
                            </Link>

                            <Link to={"/admin"} onClick={() => showSideBarPhone.current.classList.toggle("show-bar")}>
                                <li className='py-4 font-bold cursor-pointer hover:text-[#d8ba66]'>
                                    Orders
                                </li>
                            </Link >
                        </ul >
                        </div>}
                        
                    </div >
                    <div className="search hidden sm:block">
                        <form className="max-w-lg">
                            <div className="flex relative">
                                <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only">Your Email</label>
                                <button onClick={() => showSearch.current.classList.toggle("hidden")} style={{ width: "80px" }} id="dropdown-button" data-dropdown-toggle="dropdown" className="btn-search relative text-nowrap overflow-hidden flex-shrink-0 z-10 inline-flex justify-between items-center py-1 px-4 text-xs font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 hover:bg-gray-200" type="button"><span className='block truncate w-4/5'>{sreachType}</span>
                                    <svg className="w-2.5 h-2.5 ms-2.5 absolute right-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                <div id="dropdown" ref={showSearch} style={{
                                    position: "absolute",
                                    inset: "0px auto auto 0px",
                                    margin: 0,
                                    transform: "translate3d(0px, 40px, 0px)"
                                }} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdown-button">
                                        <li>
                                            <div onClick={(e) => { setSearchType(e.target.innerText); showSearch.current.classList.toggle("hidden") }} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"><div>All</div></div>
                                        </li>
                                        <li>
                                            <div onClick={(e) => { setSearchType(e.target.innerText); showSearch.current.classList.toggle("hidden") }} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"><div>Engineering</div></div>
                                        </li>
                                        <li>
                                            <div onClick={(e) => { setSearchType(e.target.innerText); showSearch.current.classList.toggle("hidden") }} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"><div>Medical</div></div>
                                        </li>
                                        <li>
                                            <div onClick={(e) => { setSearchType(e.target.innerText); showSearch.current.classList.toggle("hidden") }} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"><div>Arts & Science</div></div>
                                        </li>
                                        <li>
                                            <div onClick={(e) => { setSearchType(e.target.innerText); showSearch.current.classList.toggle("hidden") }} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"><div>Architecture</div></div>
                                        </li>
                                        <li>
                                            <div onClick={(e) => { setSearchType(e.target.innerText); showSearch.current.classList.toggle("hidden") }} type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100"><div>Law</div></div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="relative">
                                    <input type="search" id="search-dropdown" className="block p-1 w-full outline-none z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300" placeholder="Search" required />
                                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-whit rounded-e-lg">
                                        <svg className="w-4 h-4 pb-1" style={{ color: primaryColor }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>


                    {/* langage menu */}
                    <div className="lang relative">
                        <button onClick={() => showLangBar.current.classList.toggle('hidden')} id="dropdownDefaultButton" data-dropdown-toggle="dropdownln" className="text-black bg-white focus:outline-none font-normal global-radius text-sm px-3 py-1 text-center inline-flex items-center" type="button"><FontAwesomeIcon icon={faLanguage} className='pr-2' style={{ color: primaryColor }} />Lang<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </button>
                        <div id="dropdownln" ref={showLangBar} style={{
                            position: "absolute",
                            inset: "0px auto auto 0px",
                            margin: 0,
                            transform: "translate3d(0px, 40px, 0px)"
                        }} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-32">
                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                                <li onClick={() => showLangBar.current.classList.toggle('hidden')}>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">EN (Default)</a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    {
                        !isPhone && <div className="time flex items-center gap-2 lg:gap-10 bg-white py-1 px-4 global-radius">
                            <div className="hour flex items-center text-xs lg:text-sm">
                                <FontAwesomeIcon icon={faClock} className='mr-2' style={{ color: primaryColor }} />
                                {currentTime}
                            </div>
                            <div className="date flex items-center text-xs lg:text-sm">
                                <FontAwesomeIcon icon={faCalendarDays} className='mr-2' style={{ color: primaryColor }} />
                                <p>{currentDate.day}-{currentDate.month}-{currentDate.year}</p>
                            </div>
                        </div>
                    }


                    {/* Profile menu */}
                    {hasAccount ? <div className="myprofile relative">
                        <button style={{ width: "135px" }} onClick={() => showProfileBar.current.classList.toggle("hidden")} id="dropdownDefaultButton" data-dropdown-toggle="dropdowndpro" className="text-black text-sm font-normal justify-between bg-white focus:outline-none global-radius px-3 py-1 text-center inline-flex items-center" type="button">
                            <div className='flex items-center'>
                                <img src={require('../../assets/avatar.png')} className='photo-profile mr-2' alt="" />
                                <span>Name</span>
                            </div>
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div id="dropdowndpro" ref={showProfileBar} style={{
                            position: "absolute",
                            inset: "0px auto auto 0px",
                            margin: 0,
                            transform: "translate3d(-15px, 40px, 0px)"
                        }} className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-36">
                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                                <li onClick={() => showProfileBar.current.classList.toggle("hidden")}>
                                    <Link to="/account/accountsetting" className="block px-4 py-2 hover:bg-gray-100">Profile / Settings</Link>
                                </li>
                                <li onClick={() => showProfileBar.current.classList.toggle("hidden")}>
                                    <Link to="/" onClick={() => setHasAccount(false)} className="block px-4 py-2 hover:bg-gray-100">Log Out</Link>
                                </li>
                            </ul>
                        </div>
                    </div> :
                        <div className="flex items-center gap-1 lg:gap-5 bg-white py-1 px-4 global-radius">
                            <div className="text-xs lg:text-sm">
                                <Link to={"/Login"}>Login</Link>
                            </div>
                            <div className=" sign-up text-xs lg:text-sm">
                                <Link to={"/Register"}>Sign Up</Link>
                            </div>
                        </div>
                    }
                </div >
            </div>
        </>
    );
}