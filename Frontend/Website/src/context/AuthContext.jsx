import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import NotFound from './notFound';

const ProtectedRoute = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:4000/auth/check', { withCredentials: true });
        console.log("Auth check response:", response);
        setIsAuth(response.status === 200);
      } catch (error) {
        console.log("Auth check error:", error);
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  return isAuth ? <Outlet /> : <NotFound />;
};

export default ProtectedRoute;
