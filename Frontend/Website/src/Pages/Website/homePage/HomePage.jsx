import React from 'react';
import './HomePage.scss';
import SideBar from '../../../Components/sideBar/SideBar';
import Header from '../../../Components/header/Header';
import { Link, Outlet } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <div className="body">
                <div className="page">
                    <div className="cont flex">
                        <SideBar />
                        <div className="right flex-1  ">
                            <Header  />
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
