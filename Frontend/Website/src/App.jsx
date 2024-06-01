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
//import VerifPage from './Pages/Website/Login/Verif/Verif';
import Favourite from './Pages/Website/myShelf/favourite/Favourite';
import Wrapper from './Pages/Website/myShelf/wrapper/Wrapper';
import Cart from './Pages/Website/myShelf/cart/Cart'
import Ebooks from './Pages/Website/myShelf/ebooks/Ebooks'
import Search from './Pages/Website/search/Search'
import ProtectedRoute from './context/AuthContext'
import Support from './Pages/Website/moreLinks/Support';
import AboutUs from './Pages/Website/moreLinks/aboutUs';
import TermsAndConditions from './Pages/Website/moreLinks/termsAndConditions';
import ProtectedAdminRoute from './context/isAdmin'
import NotFound from './context/notFound';
import PaymentGateway from './Pages/Website/payment_gateway/payment';
import AdminHomePage from './Pages/Website/adminHomePage/AdminHomePage';
import AdminHomeBooks from './Pages/Website/adminHomeBooks/AdminHomeBooks';
// import AddBook from './Pages/Website/addBook/AddBook';
import BookRead from './Pages/Website/bookPreview/Read';



function App() {

  return (
    <>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='otp' element={<OtpPage />} />
        {/* <Route path='verif' element={<VerifPage/>} /> */}
        <Route path='/' element={<HomePage />}>
          <Route index element={<HomeBooks />} />
          <Route path='bookpreview/:id' element={<BookPreview />} />
          <Route element={<ProtectedRoute />}>
          <Route path='account' element={<Profile />}>
            <Route path='accountsetting' element={<AccountSetting />} />
            <Route path='loginsecurity' element={<LoginSecurity />} />
          </Route>
          </Route>
          <Route element={<ProtectedRoute />}>
          <Route path='myshelf' element={<Wrapper />} >
            <Route index element={<MyShelf />} />
            <Route path='favourite' element={<Favourite />} />
            <Route path='ebooks' element={<Ebooks />} />
            <Route path='cart' element={<Cart />} >
              <Route path='Payment' element={<PaymentGateway />} />
            </Route>
          </Route>
          </Route>
          <Route path='search' element={<Search />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='support' element={<Support />} />
          <Route path='termsandconditions' element={<TermsAndConditions />} />
          
          <Route path='Read/:id' element={<BookRead />} />
          

        </Route>
        <Route element={<ProtectedAdminRoute />}>
        <Route path='/admin'  element={<AdminHomePage/>}>
          <Route index element={<AdminHomeBooks/>} />
          {/* <Route path='addbook' element={<AddBook />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;