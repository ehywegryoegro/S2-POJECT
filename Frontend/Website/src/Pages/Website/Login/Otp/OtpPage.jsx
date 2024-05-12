import './OtpPage.scss';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';


function OtpPage() {

    const handleOtpButton = () => {
        window.location.href = '/verif';
    }


    return (
        <>
            <div className="otp-container">
                <div className="box0">
                    <div className="rectanglee w-screen sm:w-1/2 md:w-1/2 lg:w-1/3 px-10 lg:px-24 py-5">
                        <div className="elements">
                            <img className="logo" src={require("../../../../assets/Logo.svg")} alt="" ></img>
                            <div className='idk'>
                                <p className="p1">Verification </p>
                                <p className="p2">Check your E-mail for OTP</p>
                                <p className="p3">Enter your OTP here</p>
                            </div>
                                <div className="input-fieldd">
                                    <input type="number" id="number" maxLength={1} max={9} />
                                    <input type="number" id="number" maxLength={1} max={9} />
                                    <input type="number" id="number" maxLength={1} max={9} />
                                    <input type="number" id="number" maxLength={1} max={9} />
                                    <input type="number" id="number" maxLength={1} max={9} />
                                </div>
                                <div className='w-full'>
                                    <button className="active" onClick={handleOtpButton}>Continue</button>
                                </div>
                            <div className="bottomm">
                                <p className="resend">
                                    Not yet received? <a href="#">Resend</a>
                                </p>
                                <a className="resend1" href='register'>Back</a>
                            </div>
                        </div>
                    </div>
                    <img className="image" src={require("../../../../assets/BGVector.png")} alt="" ></img>
                    <img className="image-right" src={require("../../../../assets/Vector 1.png")} alt="" ></img>
                </div>
            </div>
        </>
    );
}

export default OtpPage;



