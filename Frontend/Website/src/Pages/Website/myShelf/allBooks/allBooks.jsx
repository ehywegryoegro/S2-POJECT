import React from 'react';
import './allBooks.scss';
import book3 from '../../../../assets/books/book3.png';

export default function allBooks() {
    const handleButton = () => {
        window.location.href = '/login';
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[10px_10px] mt-10 w-[fit-content] box-sizing-border">
            {/* First Book */}
            <div className="flex box-sizing-border">
                <div className="rounded-[10px] bg-[#FFFFFF] flex flex-col p-[16px] box-sizing-border">
                    <div className="m-[0_0_10px_5px] flex flex-row w-[fit-content] box-sizing-border">
                        <div className="rounded-[5px] border-[1px_solid_#E3E3E3] m-[0_20px_0_0] w-[123px] h-[170px]"
                            style={{ backgroundImage: `url(${book3})`, backgroundPosition: '50% 50%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        </div>
                        <div className="m-[9px_0_5px_0] flex flex-col box-sizing-border">
                            <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border justify-center items-center">
                                <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                                    E-BOOK
                                </span>
                            </div>
                            <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border justify-center items-center">
                                <button className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]" >
                                    Read
                                </button>
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
                    <div className="rounded-[5px] bg-[#A0A0A0] relative m-[0_5px_0_5px] flex self-start p-[9px_0_12px_4px] w-[125px] box-sizing-border justify-center items-center">
                        <button className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]" onClick={handleButton}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>

            {/* Second Book */}
            <div className="flex box-sizing-border">
                <div className="rounded-[10px] bg-[#FFFFFF] flex flex-col p-[16px] box-sizing-border">
                    <div className="m-[0_0_10px_5px] flex flex-row w-[fit-content] box-sizing-border">
                        <div className="rounded-[5px] border-[1px_solid_#E3E3E3] m-[0_20px_0_0] w-[123px] h-[170px]"
                            style={{ backgroundImage: `url(${book3})`, backgroundPosition: '50% 50%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        </div>
                        <div className="m-[9px_0_5px_0] flex flex-col box-sizing-border">
                            <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border justify-center items-center">
                                <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                                    E-BOOK
                                </span>
                            </div>
                            <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border justify-center items-center">
                                <button className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]" >
                                    Read
                                </button>
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
                    <div className="rounded-[5px] bg-[#A0A0A0] relative m-[0_5px_0_5px] flex self-start p-[9px_0_12px_4px] w-[125px] box-sizing-border justify-center items-center">
                        <button className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]" onClick={handleButton}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex box-sizing-border">
                <div className="rounded-[10px] bg-[#FFFFFF] flex flex-col p-[16px] box-sizing-border">
                    <div className="m-[0_0_10px_5px] flex flex-row w-[fit-content] box-sizing-border">
                        <div className="rounded-[5px] border-[1px_solid_#E3E3E3] m-[0_20px_0_0] w-[123px] h-[170px]"
                            style={{ backgroundImage: `url(${book3})`, backgroundPosition: '50% 50%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                        </div>
                        <div className="m-[9px_0_5px_0] flex flex-col box-sizing-border">
                            <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border justify-center items-center">
                                <span className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]">
                                    E-BOOK
                                </span>
                            </div>
                            <div className="rounded-[5px] my-1 bg-[#42BB4E] relative flex p-[9px_0_12px_4px] w-[125px] box-sizing-border justify-center items-center">
                                <button className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]" >
                                    Read
                                </button>
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
                    <div className="rounded-[5px] bg-[#A0A0A0] relative m-[0_5px_0_5px] flex self-start p-[9px_0_12px_4px] w-[125px] box-sizing-border justify-center items-center">
                        <button className="break-words font-['Inter'] font-semibold text-[15px] leading-[1.285] text-[#FFFFFF]" onClick={handleButton}>
                            Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
