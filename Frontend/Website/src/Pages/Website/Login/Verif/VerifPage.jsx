import React, { useState } from 'react';
import './VerifPage.scss';

function VerifPage() {

    const handleVerifButton = () => {
        window.location.href = '/';
    }

    return (
        <>
            <div className="verif-container">
                <div className="box2">
                    <div className="rectangleee">
                        <div className="elements2">
                            <img className="logo" src={require("../../../../assets/Logo.svg")} alt="" ></img>
                            <p className="p11">Verification </p>
                            <p className="p22">Thank you</p>
                            <p className="p33">You are Verified</p>
                            <img className="confirmedd" src={require("../../../../assets/Confirmed.png")} alt="" ></img>
                            <button className="active" onClick={handleVerifButton}>Continue</button>
                        </div>
                    </div>
                    <img className="image" src={require("../../../../assets/BGVector.png")} alt="" ></img>
                    <img className="image-right" src={require("../../../../assets/Vector 1.png")} alt="" ></img>
                </div>
            </div>
        </>
    );
}

export default VerifPage;