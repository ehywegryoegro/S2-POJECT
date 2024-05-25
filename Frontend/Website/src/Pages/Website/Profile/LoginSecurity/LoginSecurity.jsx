import React ,{ useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'
export default function LoginSecurity() {


  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      const response = await axios.put(
        "http://localhost:4000/auth/updatePassword",
        { password, confirmPassword },
        { withCredentials: true }
      );
      if (response.data.status === 'success') {
      
        window.location.reload()
        
      }
      console.log(response.data);
      // Handle success response here
    } catch (error) {
      console.error("Error updating password:", error.message);
      // Handle error response here
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mt-16 mb-8 grid-cols-1 md:grid-cols-1">
              <div className="w-3/6">
                <label htmlFor="pswd" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password"  value={password}
                onChange={(e) => setPassword(e.target.value)} id="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" required />
              </div>
              <div className="w-3/6">
                <label htmlFor="confirm-pswd" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                <input type="password" value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} id="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mb-6 gap-3">
              <button type="submit" className="text-white bg-[#F4683C] hover:bg-[#f4683ccc] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Confirm Password</button>
            </div>
          </form>
        </div>
    </motion.div>
  )
}
