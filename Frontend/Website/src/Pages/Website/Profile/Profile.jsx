import React from 'react';
import "./Profile.scss"
import { NavLink, Outlet } from 'react-router-dom';


export default function Profile() {
    return (
        <>
            <div className="boxxx1 lg:w-4/ lg:mt-5 lg:ml-5 px-10 py-5">
                <div className="navlink my-5 flex flex-col items-center md:flex-row gap-2">
                    <NavLink to={"/account/accountsetting"} className="font-bold text-sm px-5 pb-3">Account Setting</NavLink>
                    <NavLink to={"/account/loginsecurity"} className="font-bold text-sm px-5 pb-3">Login & Security</NavLink>
                </div>
                <Outlet />
            </div>

        </>
    )
}
