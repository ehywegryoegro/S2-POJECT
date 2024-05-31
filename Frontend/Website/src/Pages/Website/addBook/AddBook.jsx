import React, { useState } from 'react';
import './AddBook.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { primaryColor, blackColor, greyColor } from '../../../Components/Variables/VariablesColors';
import addImage from '../../../assets/addImage.svg';

export default function AddBook() {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log(file);
        }
    };

    const [state, setState] = useState("add");
    return (
        <>
            <div className="flex">
                <div className="flex-1 bg-[#F76B56] p-10">
                    <div className="bg-white p-6 rounded shadow w-full sm:w-2/3 mx-auto">

                        {state == "add" ?
                        <h2 className="text-2xl mb-6 text-center font-semibold">Add Book</h2>
                        :
                        <h2 className="text-2xl mb-6 text-center font-semibold">Edit Book</h2>
                        }
                        <div className="flex justify-center mb-6">
                            <label className="cursor-pointer">
                                <div className="h-24 w-24 bg-gray-200 flex items-center justify-center rounded-3xl">
                                    <span className="text-gray-500 text-5xl mb-5">📷</span>
                                </div>
                                <input type="file" className="hidden" onChange={handleFileChange} />
                            </label>
                        </div>
                        <form>
                            <div className="mb-4 flex justify-center">
                                <div className=" w-full sm:w-2/3">
                                    <label className="block mb-2">Title</label>
                                    <input type="text" className="w-full border rounded px-3 py-2" />
                                </div>
                            </div>
                            <div className="mb-4 flex justify-center">
                                <div className=" w-full sm:w-2/3">
                                    <label className="block mb-2">Author</label>
                                    <input type="text" className="w-full border rounded px-3 py-2" />
                                </div>
                            </div>
                            <div className="mb-4 flex justify-center">
                                <div className=" w-full sm:w-2/3">
                                    <label className="block mb-2">Cost</label>
                                    <input type="text" className="w-full border rounded px-3 py-2" />
                                </div>
                            </div>
                            <div className="mb-4 flex justify-center">
                                <div className=" w-full sm:w-2/3">
                                    <label className="block mb-2">Category</label>
                                    <input type="text" className="w-full border rounded px-3 py-2" />
                                </div>
                            </div>
                            <div className="mb-4 flex justify-center">
                                <div className=" w-full sm:w-2/3">
                                    <label className="block mb-2">Book Description</label>
                                    <textarea type="text" className="w-full border rounded px-3 py-2" />
                                </div>
                            </div>
                            <div className="mb-4 flex justify-center">
                                <div className=" w-full sm:w-2/3">
                                    <label className="block mb-2">Author Description</label>
                                    <textarea className="w-full border rounded px-3 py-2" />
                                </div>
                            </div>
                            <div className="mb-4 flex justify-center items-center space-x-60 ">
                                    <label className="mr-4 flex items-center">Book
                                    <input type="radio" name="type" value="book" className="ml-2 " />
                                    </label>
                                    <label className="mr-6 flex items-center">E-Book
                                    <input type="radio" name="type" value="ebook" className="ml-2" />
                                    </label>
                            </div>

                            {state == "add" ?

                            <div className="mb-4 flex justify-center">
                                <button type="submit" className="bg-[#F76B56] text-white px-10 py-2 rounded">Add</button>
                            </div>

                            : 

                            <div className="mb-4 flex justify-center">
                                <button type="submit" className="bg-[#F76B56] text-white px-10 py-2 rounded">Edit</button>
                            </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
