import React, { useState } from 'react';
import './OtpPage.scss';
import axios from 'axios';
import OtpInput from 'react-otp-input';

function OtpPage() {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    
    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };
    const handleResend = async(e)=>{
        e.preventDefault();
        try{
            const email = localStorage.getItem('userEmail');
            console.log(email)
            if(!email){
                console.log("no email in storege")
            }
            const response = await axios.post('http://localhost:4000/auth/resend', { email , otp });
            console.log("otp resended")
        }catch(error) {
                console.error('Error sending OTP:', error);
                setError('Failed to verify OTP. Please try again later.');
        }
    }
    
    const handleVerify = async (e) => {
        e.preventDefault();
        try {

            console.log(otp)
            const response = await axios.post('http://localhost:4000/auth/otpVerification', { otp });
            console.log(response.data);
            //If OTP verification is successful, redirect the user to the login page
            if (response.status === 200 && response.data.status === "success") {
                window.location.href = '/login';
            } else {
                setError('Incorrect OTP or OTP already verified');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setError('Failed to verify OTP. Please try again later.');
        }
    };
    

    return (
        <>
        <div className='otppage'>

        
            <div className="box">
                <div className="rectangle">
                    <div className="elements">
                        <img className="logo" src={require("../../../../assets/Logo.svg")} alt="" ></img>
                        <p className="p1">Verification </p>
                        <p className="p2">Check your E-mail for OTP</p>
                        <p className="p3">Enter your OTP here</p>
                        <form onSubmit={handleVerify} >
                            <div className="input-field"  >
                            <OtpInput
                                className='otp-input'
                                value={otp}
                                onChange={setOtp}
                                numInputs={5}
                                renderSeparator={<span>   </span>}
                                renderInput={(props) => <input className='otp-input' {...props} />}
                                     />
                            </div>
                            <button className="active">Verify</button>
                        </form>
                        <div className="bottom">
                            <p className="resend">
                                Not yet received? <a onClick={handleResend} href="/OTP">Resend</a>
                            </p>
                            <a className="resend1" href='./register'>Back</a>
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