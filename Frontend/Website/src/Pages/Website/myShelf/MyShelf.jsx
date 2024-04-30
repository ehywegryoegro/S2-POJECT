import React from 'react';
import './MyShlef.scss';
import { primaryColor } from '../../../Components/Variables/VariablesColors';
import { Link } from 'react-router-dom';

export default function MyShelf() {
  return (
    <div className="my-shlef px-8 py-3">
      <p className='font-bold'>Your <span style={{ color: primaryColor }}>Shelf</span></p>
      <div className="contain">
        <ul className='flex mt-5'>
          <li><Link to='#' className='pr-5 text-[#868686] transition-all hover:text-black active'>All Books</Link></li>
          <li><Link to='#' className='px-5 text-[#868686] transition-all hover:text-black'>Favourite</Link></li>
          <li><Link to='#' className='px-5 text-[#868686] transition-all hover:text-black'>E-Books</Link></li>
          <li><Link to='#' className='px-5 text-[#868686] transition-all hover:text-black'>Articles & Journals</Link></li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[10px_10px] mt-10 w-[fit-content] box-sizing-border">
          <div className="flex box-sizing-border">
            <div className="rounded-[10px] bg-[#FFFFFF] flex flex-col p-[16px] box-sizing-border">
              <div className="m-[0_0_10px_5px] flex flex-row w-[fit-content] box-sizing-border">
                <div className="rounded-[5px] border-[1px_solid_#E3E3E3] bg-[url('assets/images/Rectangle121.jpeg')] bg-[50%_50%] bg-contain bg-no-repeat m-[0_20px_0_0] w-[123px] h-[170px]">
                </div>
                <div className="m-[9px_0_5px_0] flex flex-col box-sizing-border">
                  <div className="m-[0_5px_10px_5px] inline-block self-start break-words font-['Inter'] font-normal text-[15px] leading-[1.285] text-[#4D4D4D]">
                    Borrowed on
                  </div>
                  <div className="m-[0_13.1px_15px_5px] inline-block break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#747373]">
                    11 Mar 2023 09:00 AM
                  </div>
                  <div className="m-[0_6.4px_10px_5px] inline-block break-words font-['Inter'] font-normal text-[15px] leading-[1.285] text-[#4D4D4D]">
                    Submission Due
                  </div>
                  <div className="m-[0_5px_17px_5px] inline-block self-start break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#747373]">
                    14 Mar 2023
                  </div>
                  <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border">
                    <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                      E-BOOK
                    </span>
                  </div>
                  <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border">
                    <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                      Read
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-[0_0_9px_0] flex flex-row w-[fit-content] box-sizing-border">
                <div className="m-[2px_22.8px_0_0] flex flex-col box-sizing-border">
                  <div className="m-[0_0_4px_0] inline-block break-words font-['Inter'] font-normal text-[12px] leading-[1.285] text-[#4D4D4D]">
                    Sprint : Solve Big Pro..
                  </div>
                  <div className="m-[0_14px_6px_0] inline-block break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#4D4D4D]">
                    Robert T.Kiyosaki, 1997
                  </div>
                  <p className="self-start break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#000000]">
                    <span className="container-2-sub-26"></span><span></span>
                  </p>
                </div>
              </div>
              <div className="rounded-[5px] bg-[#A0A0A0] relative m-[0_5px_0_5px] flex self-start p-[9px_0_12px_4px] w-[125px] box-sizing-border">
                <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                  Coment
                </span>
              </div>
            </div>
          </div>

          
          <div className="flex box-sizing-border">
            <div className="rounded-[10px] bg-[#FFFFFF] flex flex-col p-[16px] box-sizing-border">
              <div className="m-[0_0_10px_5px] flex flex-row w-[fit-content] box-sizing-border">
                <div className="rounded-[5px] border-[1px_solid_#E3E3E3] bg-[url('assets/images/Rectangle121.jpeg')] bg-[50%_50%] bg-contain bg-no-repeat m-[0_20px_0_0] w-[123px] h-[170px]">
                </div>
                <div className="m-[9px_0_5px_0] flex flex-col box-sizing-border">
                  <div className="m-[0_5px_10px_5px] inline-block self-start break-words font-['Inter'] font-normal text-[15px] leading-[1.285] text-[#4D4D4D]">
                    Borrowed on
                  </div>
                  <div className="m-[0_13.1px_15px_5px] inline-block break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#747373]">
                    11 Mar 2023 09:00 AM
                  </div>
                  <div className="m-[0_6.4px_10px_5px] inline-block break-words font-['Inter'] font-normal text-[15px] leading-[1.285] text-[#4D4D4D]">
                    Submission Due
                  </div>
                  <div className="m-[0_5px_17px_5px] inline-block self-start break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#747373]">
                    14 Mar 2023
                  </div>
                  <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border">
                    <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                      E-BOOK
                    </span>
                  </div>
                  <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border">
                    <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                      Read
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-[0_0_9px_0] flex flex-row w-[fit-content] box-sizing-border">
                <div className="m-[2px_22.8px_0_0] flex flex-col box-sizing-border">
                  <div className="m-[0_0_4px_0] inline-block break-words font-['Inter'] font-normal text-[12px] leading-[1.285] text-[#4D4D4D]">
                    Sprint : Solve Big Pro..
                  </div>
                  <div className="m-[0_14px_6px_0] inline-block break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#4D4D4D]">
                    Robert T.Kiyosaki, 1997
                  </div>
                  <p className="self-start break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#000000]">
                    <span className="container-2-sub-26"></span><span></span>
                  </p>
                </div>
              </div>
              <div className="rounded-[5px] bg-[#A0A0A0] relative m-[0_5px_0_5px] flex self-start p-[9px_0_12px_4px] w-[125px] box-sizing-border">
                <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                  Coment
                </span>
              </div>
            </div>
          </div>

          
          <div className="flex box-sizing-border">
            <div className="rounded-[10px] bg-[#FFFFFF] flex flex-col p-[16px] box-sizing-border">
              <div className="m-[0_0_10px_5px] flex flex-row w-[fit-content] box-sizing-border">
                <div className="rounded-[5px] border-[1px_solid_#E3E3E3] bg-[url('assets/images/Rectangle121.jpeg')] bg-[50%_50%] bg-contain bg-no-repeat m-[0_20px_0_0] w-[123px] h-[170px]">
                </div>
                <div className="m-[9px_0_5px_0] flex flex-col box-sizing-border">
                  <div className="m-[0_5px_10px_5px] inline-block self-start break-words font-['Inter'] font-normal text-[15px] leading-[1.285] text-[#4D4D4D]">
                    Borrowed on
                  </div>
                  <div className="m-[0_13.1px_15px_5px] inline-block break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#747373]">
                    11 Mar 2023 09:00 AM
                  </div>
                  <div className="m-[0_6.4px_10px_5px] inline-block break-words font-['Inter'] font-normal text-[15px] leading-[1.285] text-[#4D4D4D]">
                    Submission Due
                  </div>
                  <div className="m-[0_5px_17px_5px] inline-block self-start break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#747373]">
                    14 Mar 2023
                  </div>
                  <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border">
                    <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                      E-BOOK
                    </span>
                  </div>
                  <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border">
                    <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                      Read
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-[0_0_9px_0] flex flex-row w-[fit-content] box-sizing-border">
                <div className="m-[2px_22.8px_0_0] flex flex-col box-sizing-border">
                  <div className="m-[0_0_4px_0] inline-block break-words font-['Inter'] font-normal text-[12px] leading-[1.285] text-[#4D4D4D]">
                    Sprint : Solve Big Pro..
                  </div>
                  <div className="m-[0_14px_6px_0] inline-block break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#4D4D4D]">
                    Robert T.Kiyosaki, 1997
                  </div>
                  <p className="self-start break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#000000]">
                    <span className="container-2-sub-26"></span><span></span>
                  </p>
                </div>
              </div>
              <div className="rounded-[5px] bg-[#A0A0A0] relative m-[0_5px_0_5px] flex self-start p-[9px_0_12px_4px] w-[125px] box-sizing-border">
                <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                  Coment
                </span>
              </div>
            </div>
          </div>

          
          <div className="flex box-sizing-border">
            <div className="rounded-[10px] bg-[#FFFFFF] flex flex-col p-[16px] box-sizing-border">
              <div className="m-[0_0_10px_5px] flex flex-row w-[fit-content] box-sizing-border">
                <div className="rounded-[5px] border-[1px_solid_#E3E3E3] bg-[url('assets/images/Rectangle121.jpeg')] bg-[50%_50%] bg-contain bg-no-repeat m-[0_20px_0_0] w-[123px] h-[170px]">
                </div>
                <div className="m-[9px_0_5px_0] flex flex-col box-sizing-border">
                  <div className="m-[0_5px_10px_5px] inline-block self-start break-words font-['Inter'] font-normal text-[15px] leading-[1.285] text-[#4D4D4D]">
                    Borrowed on
                  </div>
                  <div className="m-[0_13.1px_15px_5px] inline-block break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#747373]">
                    11 Mar 2023 09:00 AM
                  </div>
                  <div className="m-[0_6.4px_10px_5px] inline-block break-words font-['Inter'] font-normal text-[15px] leading-[1.285] text-[#4D4D4D]">
                    Submission Due
                  </div>
                  <div className="m-[0_5px_17px_5px] inline-block self-start break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#747373]">
                    14 Mar 2023
                  </div>
                  <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border">
                    <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                      E-BOOK
                    </span>
                  </div>
                  <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border">
                    <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                      Read
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-[0_0_9px_0] flex flex-row w-[fit-content] box-sizing-border">
                <div className="m-[2px_22.8px_0_0] flex flex-col box-sizing-border">
                  <div className="m-[0_0_4px_0] inline-block break-words font-['Inter'] font-normal text-[12px] leading-[1.285] text-[#4D4D4D]">
                    Sprint : Solve Big Pro..
                  </div>
                  <div className="m-[0_14px_6px_0] inline-block break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#4D4D4D]">
                    Robert T.Kiyosaki, 1997
                  </div>
                  <p className="self-start break-words font-['Inter'] font-normal text-[10px] leading-[1.285] text-[#000000]">
                    <span className="container-2-sub-26"></span><span></span>
                  </p>
                </div>
              </div>
              <div className="rounded-[5px] bg-[#A0A0A0] relative m-[0_5px_0_5px] flex self-start p-[9px_0_12px_4px] w-[125px] box-sizing-border">
                <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                  Coment
                </span>
              </div>
            </div>
          </div>

          
        </div>

      </div>
    </div>
  )
}
