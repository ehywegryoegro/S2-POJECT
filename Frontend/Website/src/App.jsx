import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Profile from './Pages/Website/Profile/Profile';
import HomePage from './Pages/Website/homePage/HomePage';
import AccountSetting from './Pages/Website/Profile/accountSetting/AccountSetting';
import LoginSecurity from './Pages/Website/Profile/LoginSecurity/LoginSecurity';
import Notification from './Pages/Website/Profile/Notification/Notification';
import MyShelf from './Pages/Website/myShelf/MyShelf';
import HomeBooks from './Pages/Website/homeBooks/HomeBooks';
import Login from './Pages/Website/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<HomePage />}>
          <Route path='/' element={<HomeBooks />} />
          <Route path='account' element={<Profile />}>
            <Route path='accountsetting' element={<AccountSetting />} />
            <Route path='loginsecurity' element={<LoginSecurity />} />
            <Route path='notification' element={<Notification />} />
          </Route>
          <Route path='myshelf' element={<MyShelf />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
