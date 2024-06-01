import React from 'react';
import './AccountSetting.scss';
import {motion , AnimatePresence} from 'framer-motion';
import  { useState , useEffect } from 'react';
import axios from 'axios';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";

export default function AccountSetting() {
  const [user, setUSER] = useState([]);
  useEffect(() => {

    const fetchData = async () => {
      try {
         
          const response = await axios.get(`http://localhost:4000/auth`, { withCredentials: true });
         console.log(response)
          if (response.data.data) {
              setUSER(response.data.data);
          } else {
              console.log('User data not found');
          }
      } catch (error) {
          console.error('Error fetching user data:', error);
         
      }
  };

  fetchData();

}, []);

  const [formData, setFormData] = useState({
    username: " " ,
    email:" ",
    phoneNumber: "",
    bio: "",
     profileImg: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profileImg: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('username', formData.username);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    formDataToSend.append('bio', formData.bio);
     formDataToSend.append('profileImg', formData.profileImg);

    try {
      const response = await axios.post('http://localhost:4000/auth/updateProfile', formDataToSend,{withCredentials: true} );
      console.log(response.data.data);
      setUSER(response.data.data);
      setIsEditing(false);
      setSuccessMessage(true);
      setErrorMessage(false);
      setTimeout(() => setSuccessMessage(false), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setErrorMessage(true);
      setTimeout(() => setErrorMessage(false), 3000);
    }
  };
  
 


  // return (
  //   <form onSubmit={handleSubmit}>
  //     {/* Input fields for username, email, phoneNumber, bio */}
  //     <input type="file" name="profileImg" onChange={handleFileChange} />
  //     <button type="submit">Update Profile</button>
  //   </form>
  // );
  return (
    <>
    {isEditing ? (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="account-setting">
          <div className="form">

      <form onSubmit={handleSubmit}>
        <div className="information flex flex-col lg:flex-row gap-10 lg:gap-24 items-center mb-10 lg:my-16">
          <div className="profile-picture text-center">
            <p className='text-sm'>Your Profile Picture</p>
            <img src={user.profileImg} className='mx-auto my-3' alt="" />
            <label htmlFor="profileImg" style={{ display: 'inline-block', backgroundColor: '#ffffff', color: '#333333', border: '1px solid #cccccc', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
    <input type="file" id="profileImg" name="profileImg" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
    Choose photo
  </label>
          </div>
          <div className="info flex flex-col md:flex-row gap-3">
            <div className="reading p-4 text-white">
              <div className='flex gap-3'>
                <img src={require('../../../../assets/book.svg')} alt="" />
                <span className='text-2xl mt-1'>120</span>
              </div>
              <p className='text-xl'>Reading</p>
            </div>
            <div className="contribution p-4 text-white">
              <div className='flex gap-3'>
                <img src={require('../../../../assets/hand.svg')} alt="" />
                <span className='text-2xl mt-1'>10</span>
              </div>
              <p className='text-xl'>Contribution</p>
            </div>
          </div>
        </div>
        
            <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
              <div>
                <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                <input onChange={handleChange} value={formData.username} type="text" id="full_name" name='username' className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-black " placeholder={user.username} required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input onChange={handleChange} value={formData.email} type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-black" placeholder={user.email}  />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                <div className="flex">
                  <button type='text' disabled style={{ borderRadius: '0.5rem 0 0 0.5rem' }} className='border border-gray-300 text-gray-900 text-sm px-2'>+213</button>
                  <input onChange={handleChange} value={formData.phoneNumber} name='phoneNumber' style={{ borderRadius: '0 0.5rem 0.5rem 0' }} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none placeholder:text-black" placeholder={user.phoneNumber} pattern="[0-9]{9}" required />
                </div>
              </div>

            </div>
            <div className="mb-6">
              <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
              <textarea onChange={handleChange} value={formData.bio} name='bio' id="bio" className="resize-none	bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none min-h-32 placeholder:text-black" placeholder="your bio"  />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mb-6 gap-3">
              <button type="submit" className="text-white bg-[#F4683C] hover:bg-[#f4683ccc] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update Profile</button>
              <button onClick={() => setIsEditing(false)} className="text-black font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">Cancel</button>
            </div>
            <AnimatePresence>
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className='w-64 flex justify-center items-center rounded bg-red-200 h-9 mt-3'
                  >
                    <p className='text-sm text-red-600 w-full flex items-center justify-items-start ml-2'>
                      <IoIosCloseCircleOutline className='mr-1' /> Failed to update profile
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className='w-64 flex justify-center items-center rounded bg-green-200 h-9 mt-3'
                  >
                    <p className='text-sm text-green-600 w-full flex items-center justify-items-start ml-2'>
                      <CiCircleCheck className='mr-1' /> Profile updated successfully
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
          </form>

        </div>
        </motion.div>):(
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="account-setting">
    <div className="form">

<form onSubmit={handleSubmit}>
  <div className="information flex flex-col lg:flex-row gap-10 lg:gap-24 items-center mb-10 lg:my-16">
    <div className="profile-picture text-center">
      
      <img src={user.profileImg} className='mx-auto my-3' alt="" />
      
    </div>
    <div className="info flex flex-col md:flex-row gap-3">
      <div className="reading p-4 text-white">
        <div className='flex gap-3'>
          <img src={require('../../../../assets/book.svg')} alt="" />
          <span className='text-2xl mt-1'>120</span>
        </div>
        <p className='text-xl'>Reading</p>
      </div>
      <div className="contribution p-4 text-white">
        <div className='flex gap-3'>
          <img src={require('../../../../assets/hand.svg')} alt="" />
          <span className='text-2xl mt-1'>10</span>
        </div>
        <p className='text-xl'>Contribution</p>
      </div>
    </div>
  </div>
  
      <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
        <div>
          <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
          {/* <input onChange={handleChange} value={formData.username} type="text" id="full_name" name='username' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Name Name" required /> */}
          <span className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none">{user.username} </span>
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          {/* <input onChange={handleChange} value={formData.email} type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Exemple@gmail.com" required /> */}
          <span className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none">{user.email}</span>
        </div>
        <div>
          <p htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</p>
          <div className="flex">
            {/* <button type='text' disabled style={{ borderRadius: '0.5rem 0 0 0.5rem' }} className='border border-gray-300 text-gray-900 text-sm px-2'>+213</button> */}
            {/* <input onChange={handleChange} value={formData.phoneNumber} name='phoneNumber' style={{ borderRadius: '0 0.5rem 0.5rem 0' }} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="785 96 00 00" pattern="[0-9]{9}" required /> */}
            <span className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none">{user.phoneNumber}</span>
          </div>
        </div>

      </div>
      <div className="mb-6">
        <span htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</span>
        {/* <textarea onChange={handleChange} value={formData.bio} name='bio' id="bio" className="resize-none	bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none min-h-32" placeholder="I'm a Student" required /> */}
        <span className="resize-none	bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none min-h-32">{user.bio}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mb-6 gap-3">
        <button onClick={() => setIsEditing(true)} className="text-white bg-[#F4683C] hover:bg-[#f4683ccc] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update Profile</button>
        {/* <button type="reset" className="text-black font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">Reset</button> */}
      </div>
      {successMessage && (
                <p className="text-green-600">{successMessage}</p>
              )}
    </form>

  </div>
      </motion.div>)}
    </>
  )
}
