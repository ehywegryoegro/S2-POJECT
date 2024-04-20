import React from 'react';
import '../Website/Login.css';
import image1 from '../Website/Images/image 1.svg';
import vector2 from '../Website/Images/Vector 2.png';
import vector1 from '../Website/Images/Vector 1.png';

class Login extends React.Component {
    
    render() {
        return (
            <div className="box">
                <div className="login-box">
                    <img src={image1} className="logo" alt="Biblos logo" />
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                    <p className="welcome-text">Welcome Back !</p>
                    <div className="email-div">
                        <p>Email</p>
                        <input placeholder="exemple@gmail.com" className="email" type="email" required />
                    </div>
                    <div className="pswd-div">
                        <p>Password</p>
                        <div className="password-input">
                            <input id="passwordInput" className="pswd" type="password" required />
                            <span className="toggle-password" onClick={this.togglePasswordVisibility}>
                                <span id="mdi--eye-off"></span>
                                <span id="mdi--eye" style={{ display: 'none' }}></span>
                            </span>
                        </div>
                    </div>
                    <div className="forgot-pswd">
                        <div className="remeberme">
                            <div className="cont">
                                <input type="checkbox" className="check" name="" checked />
                                <span className="checkbox" onClick={this.toggleCheckbox}></span>
                            </div>
                            <p>Remember me</p>
                        </div>
                        <a href="" target="_blank">Forgot password?</a>
                    </div>
                    <div>
                        <button onClick={this.validateLogin} className="login-btn" type="submit">Login</button>
                    </div>
                </div>
                <img src={vector2} className="image" alt="" />
                <img src={vector1} className="image-right" alt="" />
            </div>
        );
    }
}

export default Login;
