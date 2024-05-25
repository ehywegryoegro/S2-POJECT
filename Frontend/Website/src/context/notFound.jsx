
import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss'; 

const NotFound = () => {
  return (
    // <div className="not-found-container">
    //   <div className="not-found-content">
    //     <h1>404 - Not Found</h1>
    //     <p>The page you are looking for does not exist or you do not have access to it.</p>
    //     <Link to="/">Go to Home Page</Link>
    //   </div>
    // </div>
    <div className="not-found-container">
            <div className="not-found-content">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to="/" className="home-link">Go to Home</Link>
            </div>
        </div>
  );
};

export default NotFound;
