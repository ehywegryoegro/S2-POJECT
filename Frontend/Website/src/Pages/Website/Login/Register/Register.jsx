import React, {useEffect, useState } from 'react';
import './Register.scss';
import axios from 'axios';

function RegisterPage() {
  useEffect(() => {
    console.log('Testing localStorage');
    localStorage.setItem('testKey', 'testValue');
    console.log('Stored testKey:', localStorage.getItem('testKey'));
  }, []);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/auth/register', formData);
      console.log(response.data); 
      localStorage.setItem('userEmail', formData.email);
      if(response.status===200){
        
        window.location.href = '/otp';
        alert('Registration successful! Please verify your account using the OTP sent to your email.');
      }
      
    } catch (error) {
      console.error('Error registering user:', error);
      
      alert('Failed to register user. Please try again later.');
    }
  };
  







  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  

  const handleSwitchClick = () => {
    window.location.href = '/login';
  };

  
  return (
    <>
      <div className="box">
      <form onSubmit={handleSubmit} className="box">
        <div className="login-box w-screen sm:w-1/2 md:w-1/2 lg:w-1/3 px-10 lg:px-24 py-5">
          <img className="logo" src={require("../../../../assets/Logo.svg")} alt="" ></img>
          <label className="switch">
            <input type="checkbox" onClick={handleSwitchClick} />
            <span className="slider"></span>
          </label>
          <p className="welcome-text text-xs mt-5">Welcome Back !</p>
          <div className="email-div w-full">
            <p className='text-xs'>Username</p>
            <input onChange={handleChange} placeholder="Username" name="email" className="email text-xs w-full" type="email" required />
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
          <div className="pswd-div w-full">
            <p className='text-xs'>Confirm Password</p>
            <div className="password-input">
              <input onChange={handleChange} name="confirmPassword" className="pswd text-xs w-full" type={passwordVisible ? "text" : "password"} required />
              <span className="toggle-password" onClick={togglePasswordVisibility}>
                <span id="mdi--eye-off" style={{ display: passwordVisible ? 'none' : 'inline-block' }}></span>
                <span id="mdi--eye" style={{ display: passwordVisible ? 'inline-block' : 'none' }}></span>
              </span>
            </div>
          </div>
          <div className='w-full'>
            <button className='login-btn text-xs w-full' type='submit'>Sign up</button>
          </div>
        </div>
        </form>
        <img className="image" src={require("../../../../assets/BGVector.png")} alt="" ></img>
        <img className="image-right" src={require("../../../../assets/Vector 1.png")} alt="" ></img>
      </div>
    </>
  );
}

export default RegisterPage;