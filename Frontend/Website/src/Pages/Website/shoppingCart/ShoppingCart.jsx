import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function ShoppingCart() {

    const [isHeartFull, setHeartFull] = useState(false);

    const toggleHeart = () => {
        setHeartFull(!isHeartFull);
    };

    return (
        <>
            <div className="search-header flex text-md font-medium mx-5 mt-14">
                <span className="header-title mr-24">Title</span>
                <span className="header-title ml-72">Book Format</span>
                <span className="header-title ml-28 mr-2">Charges</span>
                <span className="header-title ml-44">
                    <NavLink to={"/"}>
                        <button className='bg-orange-600 text-white py-1 px-6 rounded-md border-solid border border-orange-600'>
                            Pay All
                        </button>
                    </NavLink>
                </span>
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
                    <p className="ml-32 mr-10 my-7 break-words font-['Inter'] font-semibold text-base leading-[1.285] text-[#000000]">
                        Hard Copy
                    </p>
                </div>
                <div className="m-4 flex flex-row justify-between box-border">
                    <div className="mt-6 ml-14 justify-center box-border font-semibold">
                        <p>100 DZD</p>
                    </div>
                </div>
                <div className="m-4 flex flex-row justify-between box-border">
                    <div className="rounded-md border-black border-double relative flex flex-row justify-center box-border my-6 ml-36">
                        <span className="break-words font-['Inter'] font-normal text-sm text-[#F76B56]">
                            <NavLink to={"/"}>
                                <button className='bg-orange-600 text-white py-1 px-4 rounded-md border-solid border border-orange-600'>Pay Now</button>
                            </NavLink>
                        </span>
                    </div>
                </div>
            </div>
            
        </>
    );
}
