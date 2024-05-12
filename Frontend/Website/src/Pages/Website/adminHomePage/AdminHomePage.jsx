import React from 'react';
import './AdminHomePage.scss'
import SideBar from '../../../Components/adminSideBar/adminSideBar';
import Header from '../../../Components/header/Header';
import { Link, Outlet } from 'react-router-dom';

export default function AdminHomePage() {
    return (
        <>
            <div className="body">
                <div className="page">
                    <div className="cont flex">
                        <SideBar />
                        <div className="right flex-1">
                            <Header />
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
