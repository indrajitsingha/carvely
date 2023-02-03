import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cars from './pages/Cars';
import Category from './pages/Category';
// import GetDetils from './pages/GetDetils';
import Home from "./pages/Home"

////admin
import AdminLogin from './admin/pages/AdminLogin'
import AdminNavbar from './admin/components/AdminNavbar'
import AdminDashboard from './admin/pages/AdminDashboard'

import Addcar from './admin/pages/Addcar'
import ShowCars from './admin/pages/ShowCars'
import AddAdmin from './admin/pages/AddAdmin'

function App() {
  return (
    <div className="App">

    <BrowserRouter>

      <Routes>
      
        <Route path ="/" element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path ="/cars" element={<Cars/>}/>
        <Route path ="/category" element={<Category/>}/>
        </Route>

        <Route path='/adminlogin' element={<AdminLogin/>}/>
        
        <Route path ="/admin" element={<AdminNavbar/>}>
        <Route index element={<AdminDashboard/>}/>
        <Route path='/admin/addcar' element={<Addcar/>}/>
        <Route path='/admin/showcars' element={<ShowCars/>}/>
        <Route path='/admin/AddAdmin' element={<AddAdmin/>}/>

        </Route>

      </Routes>
      <Footer/>
    </BrowserRouter> 

    
    {/* <GetDetils/> */}

    </div>
  );
}

export default App;
