import React from 'react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { primaryColor, blackColor, greyColor } from '../../../Components/Variables/VariablesColors';

export default function AdminHomeBooks() {

    return (
        <>
            <div className='flex flex-row m-5 px-2 pt-4 items-center'>
                <p className='text-4xl mr-auto'>Books</p>
                <span className='items-center'>
                    <NavLink to={'addbook'}>
                        <button className='flex items-center justify-center bg-white text-red py-1 w-36 rounded-3xl' style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                            <img src={require("../../../assets/addBook.svg")} alt="" className="mr-28 w-10 h-10 absolute" />
                            <p className='ml-5'>Add Book</p>
                        </button>
                    </NavLink>
                </span>
            </div>
            <div className="search-header flex text-md font-medium mx-5 mt-8">
                <span className="header-title mr-1">Title</span>
                <span className="header-title ml-64">Ratings</span>
                <span className="header-title ml-6">Category</span>
                <span className="header-title ml-20 mr-2">Availability</span>
                <span className="header-title ml-48">Action</span>
            </div>
            <div className="rounded-md bg-[#FFFFFF] relative m-4 flex flex-row p-1  box-border">
                <div className="m-4 flex flex-row box-border">
                    <div className="rounded-md border-[1px_solid_#F1F1F1]">
                        <img src={require("../../../assets/books/book3.png")} alt="" className="w-16 h-22" />
                    </div>
                    <div className="ml-4 flex flex-col box-border">
                        <div className="flex flex-col box-border">
                            <div className="inline-block break-words font-['Inter'] font-semibold leading-[1.285] text-[#4D4D4D] my-2 mb-2">Don’t Make Me Think</div>
                            <span className="self-start break-words font-['Inter'] font-light text-base leading-[1.285] text-[#4D4D4D] mb-1/2">Steve Krug, 2000</span>
                        </div>
                        <span className="self-start break-words font-['Inter'] font-light text-sm leading-[1.285] text-[#4D4D4D]">Second Edition</span>
                    </div>
                </div>
                <div className="m-4 flex flex-row justify-between box-border">
                    <p className="ml-2 mr-10 my-7 break-words font-['Inter'] font-normal text-base leading-[1.285] text-[#000000]"><span className="container-sub-31">4.5</span>
                        <span className='text-xs col'
                            style={{ color: greyColor }}>
                            /5
                        </span>
                    </p>
                    <div className="flex flex-col box-border mt-2">
                        <div className="inline-block break-words font-['Inter'] font-normal leading-[1.285] text-sm text-[#4D4D4D] mt-2 mb-3">Computer Science</div>
                        <span className="self-start break-words font-['Inter'] font-normal leading-[1.285] text-xs text-[#4D4D4D]">UX Design</span>
                    </div>
                </div>
                <div className="my-4 flex flex-row justify-between box-border">
                    <div className="flex flex-col items-center box-border mr-2">
                        <div className="flex flex-row my-2 mt-4 ml-4 box-border">
                            <img src={require("../../../assets/Vectorrr.svg")} alt="" className="w-3.5 h-3.5" />
                            <span className="break-words font-['Inter'] font-normal text-sm text-[#4D4D4D] ml-2">Hard Copy</span>
                        </div>
                        <div className="flex flex-row box-border mr-5 ml-4">
                            <img src={require("../../../assets/Subtract.svg")} alt="" className="w-3.5 h-3.5" />
                            <span className="break-words font-['Inter'] font-normal text-sm text-[#4D4D4D] ml-2">E-Book</span>
                        </div>
                    </div>
                    <div className="mt-6 ml-10 justify-center box-border">
                        <div className="rounded-md relative flex flex-row justify-center ml-16 box-border">
                            <span className="break-words font-['Inter'] font-normal text-sm text-[#FFFFFF]">
                                <NavLink to="/admin/addbook">

                                    <button className='flex items-center justify-center bg-orange-600 text-white py-1 w-24 rounded-md border-solid border border-orange-600' style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
                                        <img src={require("../../../assets/edit.svg")} alt="" className="w-5 h-5 mr-3 " />
                                        Edit
                                    </button>
                                </NavLink>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="my-4 flex flex-row justify-between box-border">
                    <div className="rounded-md border-black border-double relative flex flex-row justify-center box-border my-6">
                        <span className="break-words font-['Inter'] font-normal text-sm text-[#F76B56]">
                            <NavLink to={"/admin"}>
                                <button className='flex items-center justify-center bg-white text-orange-600 py-1 w-24 rounded-md border-solid border border-orange-600' style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
                                    <img src={require("../../../assets/delete.svg")} alt="" className="w-5 h-5 mr-3" />
                                    Delete
                                </button>
                            </NavLink>
                        </span>
                    </div>
                </div>
            </div>

        </>
    );
}
