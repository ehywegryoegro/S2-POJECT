import React, { useState } from 'react';
import './OtpPage.scss';


function OtpPage() {

    return (
        <>
            <div className="box">
                <div className="rectangle">
                    <div className="elements">
                        <img className="logo" src={require("../../../../assets/Logo.svg")} alt="" ></img>
                        <p className="p1">Verification </p>
                        <p className="p2">Check your E-mail for OTP</p>
                        <p className="p3">Enter your OTP here</p>
                        <form action="#">
                            <div className="input-field">
                                <input type="number" id="number" maxLength={1} max={9} />
                                <input type="number" id="number" maxLength={1} max={9} />
                                <input type="number" id="number" maxLength={1} max={9} />
                                <input type="number" id="number" maxLength={1} max={9} />
                                <input type="number" id="number" maxLength={1} max={9} />
                            </div>
                            <button className="active">Verify</button>
                        </form>
                        <div className="bottom">
                            <p className="resend">
                                Not yet received? <a href="#">Resend</a>
                            </p>
                            <a className="resend1" href='./login'>Back</a>
                        </div>
                    </div>
                </div>
                <img className="image" src={require("../../../../assets/BGVector.png")} alt="" ></img>
                <img className="image-right" src={require("../../../../assets/Vector 1.png")} alt="" ></img>
            </div>

        </>
    );
}

export default OtpPage;