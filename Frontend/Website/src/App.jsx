import { useState } from 'react'
import './App.scss'
import { Route, Routes, Outlet } from 'react-router-dom'
import Profile from './Pages/Website/Profile/Profile';
import HomePage from './Pages/Website/homePage/HomePage';
import AccountSetting from './Pages/Website/Profile/accountSetting/AccountSetting';
import LoginSecurity from './Pages/Website/Profile/LoginSecurity/LoginSecurity';
import MyShelf from './Pages/Website/myShelf/Myshelf';
import AllBooks from './Pages/Website/myShelf/allBooks/allBooks';
import HomeBooks from './Pages/Website/homeBooks/HomeBooks';
import Login from './Pages/Website/Login/Login/Login';
import RegisterPage from './Pages/Website/Login/Register/Register';
import OtpPage from './Pages/Website/Login/Otp/OtpPage';
import VerifPage from './Pages/Website/Login/Verif/VerifPage';
import ArticlesAndJournals from './Pages/Website/myShelf/articlesAndJournals/articlesAndJournals';
import Favourite from './Pages/Website/myShelf/favourite/favourite';
import EBooks from './Pages/Website/myShelf/eBooks/eBooks';
import Support from './Pages/Website/moreLinks/Support';
import AboutUs from './Pages/Website/moreLinks/aboutUs';
import TermsAndConditions from './Pages/Website/moreLinks/termsAndConditions';
import Search from './Pages/Website/Search/search';
import ShoppingCart from './Pages/Website/shoppingCart/ShoppingCart';

import AdminHomePage from './Pages/Website/adminHomePage/AdminHomePage';
import AdminHomeBooks from './Pages/Website/adminHomeBooks/AdminHomeBooks';
import AddBook from './Pages/Website/addBook/AddBook';
import Command from './Pages/Website/command/Command';
import Dashboard from './Pages/Website/Dashboard/Dashboard';
import Users from './Pages/Website/Users/Users';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='otp' element={<OtpPage />} />
        <Route path='verif' element={<VerifPage />} />

        <Route path='/' element={<HomePage />}>
          <Route index element={<HomeBooks />} />
          <Route path='account' element={<Profile />}>
            <Route path='accountsetting' element={<AccountSetting />} />
            <Route path='loginsecurity' element={<LoginSecurity />} />
          </Route>
          <Route path='myshelf' element={<MyShelf />} >
            <Route path='allbooks' element={<AllBooks />} />
            <Route path='articlesandjournals' element={<ArticlesAndJournals />} />
            <Route path='favourite' element={<Favourite />} />
            <Route path='ebooks' element={<EBooks />} />
          </Route>
          <Route path='shoppingcart' element={<ShoppingCart/>} /> 
          <Route path='search' element={<Search />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='support' element={<Support />} />
          <Route path='termsandconditions' element={<TermsAndConditions />} />
        </Route>

        /* admin */

        <Route path='/admin' element={<AdminHomePage/>}>
          <Route index element={<AdminHomeBooks/>} />
          <Route path='addbook' element={<AddBook />} />
          <Route path='command' element={<Command />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='users' element={<Users />} />
        </Route>
      </Routes>
    </>
  )
}