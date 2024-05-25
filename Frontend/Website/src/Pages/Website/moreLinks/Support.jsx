import React from 'react';
import { primaryColor, blackColor } from '../../../Components/Variables/VariablesColors';

export default function Support() {
    return (
        <div className="boxxx1 lg:w-4/ lg:mt-5 lg:ml-5 px-10 py-5 size-fit flex flex-col items-center">
            <div className="mb-16">
                <div className="text-xl font-medium text-black text-center mb-14 mt-8">Support</div>
                <p className="text-gray-500 text-center">At <span style={{color: primaryColor, fontWeight: 'bold'}}>Biblos</span>, we are committed to providing excellent customer support to ensure your shopping experience is smooth and enjoyable. Whether you have questions about an order, need assistance finding a specific title, or require technical support with our website, our dedicated support team is here to help. You can reach us via email at m_ghomari@estin.dz or by phone at 0559337955. Our support hours are 24/7. We look forward to assisting you!</p>
            </div>
        </div>
    )
}


