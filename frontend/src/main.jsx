import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import './index.css'

import Navbar from "./components/Navbar.jsx"
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Order from './pages/Order.jsx'
import Cart from './pages/Cart.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Footer from './components/Footer.jsx'
// import HomeAfterLogin from './pages/HomeAfterLogin.jsx'
import Admin from './pages/Admin.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}  />
      <Route path='/signup' element={<Signup />}  />
      <Route path='/login' element={<Login />}  />
      <Route path='/orders' element={<Order />}  />
      <Route path='/addtocart' element={<Cart />}  />
      <Route path='/aboutus' element={<AboutUs />}  />
      
      <Route path='/admin' element={<Admin />}  />
    </Routes>
    <Footer />
  </BrowserRouter>
  
   
  
)
