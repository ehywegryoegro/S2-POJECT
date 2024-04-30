import React from 'react';
import './AccountSetting.scss';
import {motion} from 'framer-motion';

export default function AccountSetting() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="account-setting">
        <div className="information flex flex-col lg:flex-row gap-10 lg:gap-24 items-center mb-10 lg:my-16">
          <div className="profile-picture text-center">
            <p className='text-sm'>Your Profile Picture</p>
            <img src={require('../../../../assets/avatar.png')} className='mx-auto my-3' alt="" />
            <span className='upload'>Upload New photo</span>
          </div>
        </div>
        <div className="form">

          <form>
            <div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2">
              <div>
                <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                <input type="text" id="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Name Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="Exemple@gmail.com" required />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                <div className="flex">
                  <button type='text' disabled style={{ borderRadius: '0.5rem 0 0 0.5rem' }} className='border border-gray-300 text-gray-900 text-sm px-2'>+213</button>
                  <input style={{ borderRadius: '0 0.5rem 0.5rem 0' }} type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="785 96 00 00" pattern="[0-9]{9}" required />
                </div>
              </div>

            </div>
            <div className="mb-6">
              <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bio</label>
              <textarea id="bio" className="resize-none	bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none min-h-32" placeholder="I'm a Student" required />
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
