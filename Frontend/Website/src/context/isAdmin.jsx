import React, { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import NotFound from './notFound';
const ProtectedAdminRoute = () => {

  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await axios.get('http://localhost:4000/auth/admin', { withCredentials: true });
        console.log("Auth check response:", response);
        setIsAdmin(response.status === 200);
      } catch (error) {
        console.log("Auth check error:", error);
        setIsAdmin(false);
      }
    };

    checkAdmin();
  }, []);

  if (isAdmin === null) {
    return <div>Loading...</div>;
  }

  return isAdmin ? <Outlet /> : <NotFound />;
};

export default ProtectedAdminRoute;