import React from 'react';
import './MyShlef.scss';
import { primaryColor } from '../../../Components/Variables/VariablesColors';
import { Link } from 'react-router-dom';

export default function MyShelf() {
  return (
    <div className="my-shlef px-8 py-3">
        <p className='font-bold'>Your <span style={{color: primaryColor}}>Shelf</span></p>
        <div className="contain">
            <ul className='flex mt-5'>
                <li><Link to='#' className='pr-5 text-[#868686] transition-all hover:text-black active'>All Books</Link></li>
                <li><Link to='#' className='px-5 text-[#868686] transition-all hover:text-black'>Favourite</Link></li>
                <li><Link to='#' className='px-5 text-[#868686] transition-all hover:text-black'>Borrowed Books</Link></li>
                <li><Link to='#' className='px-5 text-[#868686] transition-all hover:text-black'>E-Books</Link></li>
                <li><Link to='#' className='px-5 text-[#868686] transition-all hover:text-black'>Articles & Journals</Link></li>
            </ul>
          
        </div>
    </div>
  )
}
