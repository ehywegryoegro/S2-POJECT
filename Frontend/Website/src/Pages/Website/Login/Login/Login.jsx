import React, { useState } from 'react';
import './Login.scss';
import RegisterPage from '../Register/Register';


function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(email, password);
  };

  const handleSwitchClick = () => {
    window.location.href = '/register';
  };
   
  const handleButton = () => {
    window.location.href = '/';
  };

  return (
    <>
      <div className="boxxxx">
          <div className="login-box w-screen sm:w-1/2 md:w-1/2 lg:w-1/3 px-10 lg:px-24 py-5">
            <img className="logo" src={require("../../../../assets/Logo.svg")} alt="" ></img>
            <label className="switch">
              <input type="checkbox" onClick={handleSwitchClick} />
              <span className="slider"></span>
            </label>
            <p className="welcome-text text-xs mt-5">Welcome Back !</p>
            <div className="email-div w-full">
              <p className='text-xs'>Email</p>
              <input placeholder="exemple@gmail.com" name="email" className="email text-xs w-full" type="text" required />
            </div>
            <div className="pswd-div w-full">
              <p className='text-xs'>Password</p>
              <div className="password-input">
                <input name="password" className="pswd text-xs w-full" type={passwordVisible ? "text" : "password"} required />
                <span className="toggle-password" onClick={togglePasswordVisibility}>
                  <span id="mdi--eye-off" style={{ display: passwordVisible ? 'none' : 'inline-block' }}></span>
                  <span id="mdi--eye" style={{ display: passwordVisible ? 'inline-block' : 'none' }}></span>
                </span>
              </div>
            </div>
            <div className="forgot-pswd w-full mt-1">
              <div className="remeberme">
                <div className="cont">
                  <input type="checkbox" className="check" name="rememberMe" id="rememberMe" />
                  <span className="checkbox"></span>
                </div>
              </div>
              <a href='/otp' target="">Forgot password?</a>
            </div>
            <div className='w-full'>
              <button onClick={handleButton} className='login-btn text-xs w-full' type='submit'>Login</button>
            </div>
          </div>
        <img className="image" src={require("../../../../assets/BGVector.png")} alt="" ></img>
        <img className="image-right" src={require("../../../../assets/Vector 1.png")} alt="" ></img>
      </div>
    </>
  );
}

export default LoginPage;