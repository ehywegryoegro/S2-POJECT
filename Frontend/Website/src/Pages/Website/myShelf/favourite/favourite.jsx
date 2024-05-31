import React from 'react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { primaryColor, blackColor, greyColor } from '../../../../Components/Variables/VariablesColors';
import fullHeart from '../../../../assets/FullHeart.svg';
import emptyHeart from '../../../../assets/EmptyHeart.svg';

export default function Favourite() {

    const [isHeartFull, setHeartFull] = useState(false);

    const toggleHeart = () => {
        setHeartFull(!isHeartFull);
    };

    return (
        <>
            <div className="search-header flex text-md font-medium mx-5 mt-14">
                <span className="header-title mr-1">Title</span>
                <span className="header-title ml-64">Ratings</span>
                <span className="header-title ml-6">Category</span>
                <span className="header-title ml-20 mr-2">Availability</span>
                <span className="header-title ml-24">Status</span>
            </div>
            <div className="rounded-md bg-[#FFFFFF] relative m-4 flex flex-row p-1  box-border">
                <div className="m-4 flex flex-row box-border">
                    <div className="rounded-md border-[1px_solid_#F1F1F1]">
                        <img src={require("../../../../assets/books/book3.png")} alt="" className="w-16 h-22" />
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
                        <span className="self-start break-words font-['Inter'] font-normal text-base leading-[1.285] text-xs text-[#4D4D4D]">UX Design</span>
                    </div>
                </div>
                <div className="m-4 flex flex-row justify-between box-border">
                    <div className="flex flex-col items-center box-border">
                        <div className="flex flex-row my-2 mt-4 box-border">
                            <img src={require("../../../../assets/Vectorrr.svg")} alt="" className="w-3.5 h-3.5" />
                            <span className="break-words font-['Inter'] font-normal text-sm text-[#4D4D4D] ml-2">Hard Copy</span>
                        </div>
                        <div className="flex flex-row box-border mr-5">
                            <img src={require("../../../../assets/Subtract.svg")} alt="" className="w-3.5 h-3.5" />
                            <span className="break-words font-['Inter'] font-normal text-sm text-[#4D4D4D] ml-2">E-Book</span>
                        </div>
                    </div>
                    <div className="mt-6 ml-10 justify-center box-border">
                        <div className="rounded-md bg-[#42BB4E] relative flex flex-row justify-center py-1 px-4 ml-12 box-border" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                            <span className="break-words font-['Inter'] font-normal text-sm text-[#FFFFFF]">In-Shelf</span>
                        </div>
                    </div>
                </div>
                <div className="m-4 flex flex-row justify-between box-border">
                    <div className="m-2 flex flex-row justify-center  h-8 box-border">
                        <img src={isHeartFull ? fullHeart : emptyHeart} onClick={toggleHeart} alt="Heart" className="cursor-pointer w-5 h-5 my-5 mr-6" />
                    </div>
                    <div className="rounded-md border-black border-double relative flex flex-row justify-center box-border my-6">
                        <span className="break-words font-['Inter'] font-normal text-sm text-[#F76B56]">
                            <NavLink to={"/admin"}>
                                <button className='bg-white text-orange-600 py-1 px-4 rounded-md border-solid border border-orange-600'>Preview</button>
                            </NavLink>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
