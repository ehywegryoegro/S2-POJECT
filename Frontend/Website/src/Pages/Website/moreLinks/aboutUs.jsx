import React from 'react';
import { primaryColor, blackColor } from '../../../Components/Variables/VariablesColors';


export default function aboutUs() {

  return (
    <div className="boxxx1 lg:w-4/ lg:mt-5 lg:ml-5 px-10 py-5 size-fit flex flex-col items-center">
            <div className="mb-16">
                <div className="text-xl font-medium text-black text-center mb-14 mt-8">About Us</div>
                <p className="text-gray-500 text-center">Welcome to <span style={{color: primaryColor, fontWeight: 'bold'}}>Biblos</span>, your first destination for all things literary. We are dedicated to providing book lovers with an exceptional online shopping experience, offering an extensive collection of books across various genres and categories. Our mission is to connect readers with their next favorite read while providing excellent customer service and support. With a passion for literature and a commitment to quality, we strive to be your go-to destination for all your reading needs. Happy reading!</p>
            </div>
        </div>
  )
}
