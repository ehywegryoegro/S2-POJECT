import { useState } from 'react'
import './App.scss'
import { Route, Routes, Outlet } from 'react-router-dom'
import Profile from './Pages/Website/Profile/Profile';
import HomePage from './Pages/Website/homePage/HomePage';
import AccountSetting from './Pages/Website/Profile/accountSetting/AccountSetting';
import LoginSecurity from './Pages/Website/Profile/LoginSecurity/LoginSecurity';
import MyShelf from './Pages/Website/myShelf/MyShelf';
import HomeBooks from './Pages/Website/homeBooks/HomeBooks';
import Login from './Pages/Website/Login/Login/Login';
import RegisterPage from './Pages/Website/Login/Register/Register';
import BookPreview from './Pages/Website/bookPreview/BookPreview';
import OtpPage from './Pages/Website/Login/Otp/OtpPage';
import VerifPage from './Pages/Website/Login/Verif/Verif';


function App() {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='otp' element={<OtpPage />} />
        <Route path='verif' element={<VerifPage/>} />
        <Route path='/' element={<HomePage />}>
          <Route index element={<HomeBooks />} />
          <Route path='bookpreview' element={<BookPreview />} />
          <Route path='account' element={<Profile />}>
            <Route path='accountsetting' element={<AccountSetting />} />
            <Route path='loginsecurity' element={<LoginSecurity />} />
          </Route>
          <Route path='myshelf' element={<MyShelf />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;