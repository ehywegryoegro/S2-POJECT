import React, { useState } from 'react';
import './Login.scss';
import RegisterPage from '../Register/Register';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/auth/login', formData, { withCredentials: true });
      if (response.data.status === 'success') {
        const userRole = response.data.user.role;
        if (userRole === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        console.error('Login error:', response.data.error);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  const handleSwitchClick = () => {
    window.location.href = '/register';
  };
   
  const handleButton = () => {
    window.location.href = '/';
  }

  return (
    <>
      <div className="box">
        <form onSubmit={handleLogin} className="box">
          <div className="login-box w-screen sm:w-1/2 md:w-1/2 lg:w-1/3 px-10 lg:px-24 py-5">
            <img className="logo" src={require("../../../../assets/Logo.svg")} alt="" ></img>
            <label className="switch">
              <input type="checkbox" onClick={handleSwitchClick} />
              <span className="slider"></span>
            </label>
            <p className="welcome-text text-xs mt-5">Welcome Back !</p>
            <div className="email-div w-full">
              <p className='text-xs'>Username</p>
              <input onChange={handleChange} placeholder="Email" name="email" className="email text-xs w-full" type="email" required />
            </div>
            <div className="pswd-div w-full">
              <p className='text-xs'>Password</p>
              <div className="password-input">
                <input onChange={handleChange} name="password" className="pswd text-xs w-full" type={passwordVisible ? "text" : "password"} required />
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
              <button className='login-btn text-xs w-full' type='submit'>Login</button>
            </div>
          </div>
          </form>
        <img className="image" src={require("../../../../assets/BGVector.png")} alt="" ></img>
        <img className="image-right" src={require("../../../../assets/Vector 1.png")} alt="" ></img>
      </div>
    </>
  );
}

export default LoginPage;