import React from 'react';
import './AccountSetting.scss';
import {motion} from 'framer-motion';
import  { useState } from 'react';
import axios from 'axios';


export default function AccountSetting() {
  const [formData, setFormData] = useState({
    username: ' ',
    email: '',
    phoneNumber: '',
    bio: '',
     profileImg: "",
  });

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
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error
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
            <img src={require('../../../../assets/avatar.png')} className='mx-auto my-3' alt="" />
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
                <input onChange={handleChange} value={formData.username} type="text" id="full_name" name='username' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Name Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input onChange={handleChange} value={formData.email} type="email" id="email" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Exemple@gmail.com" required />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                <div className="flex">
                  <button type='text' disabled style={{ borderRadius: '0.5rem 0 0 0.5rem' }} className='border border-gray-300 text-gray-900 text-sm px-2'>+213</button>
                  <input onChange={handleChange} value={formData.phoneNumber} name='phoneNumber' style={{ borderRadius: '0 0.5rem 0.5rem 0' }} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="785 96 00 00" pattern="[0-9]{9}" required />
                </div>
              </div>

            </div>
            <div className="mb-6">
              <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
              <textarea onChange={handleChange} value={formData.bio} name='bio' id="bio" className="resize-none	bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none min-h-32" placeholder="I'm a Student" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 mb-6 gap-3">
              <button type="submit" className="text-white bg-[#F4683C] hover:bg-[#f4683ccc] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update Profile</button>
              <button type="reset" className="text-black font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center">Reset</button>
            </div>
          </form>

        </div>
      </motion.div>
    </>
  )
}
