import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cars from './pages/Cars';
import Category from './pages/Category';
import GetDetils from './pages/GetDetils';
import Home from "./pages/Home"

////admin
import AdminLogin from './admin/pages/AdminLogin'
import AdminNavbar from './admin/components/AdminNavbar'
import AdminDashboard from './admin/pages/AdminDashboard'

// import Addcar from './admin/pages/Addcar'
import ShowCars from './admin/pages/ShowCars'
import AddAdmin from './admin/pages/AddAdmin'
import AddCars from './admin/pages/AddCars';
import AddBrands from './admin/pages/AddBrands';
import AddCategory from './admin/pages/AddCategory';
import { useSelector } from 'react-redux';
import Userlogin from './pages/Userlogin';
import Comparison from './pages/Comparison';
import Emicalculator from './pages/Emicalculator';
import About from './pages/About';
import PageNF from './pages/PageNF';

function App() {
  const { adminPerks } = useSelector((state) => state.FirebaseAuth)

  const RequirePerks = ({ children }) => {
    return  adminPerks && adminPerks[0].Perks === "SuperAdmin" ? children : <Navigate to='/admin' />
  }
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='/:CarsId' element={<GetDetils />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/category" element={<Category />} />
            <Route path="/comparison" element={<Comparison/>} />
            <Route path="/emicalculator" element={<Emicalculator/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/login" element={<Userlogin/>} />
          </Route>

          <Route path='/adminlogin' element={<AdminLogin />} />

          <Route path="/admin" element={<AdminNavbar />}>
            <Route index element={<AdminDashboard />} />
            <Route path='/admin/addcar' element={<AddCars />} />
            <Route path='/admin/showcars' element={<ShowCars />} />
            <Route path='/admin/addbrands' element={<AddBrands />} />
            <Route path='/admin/Category' element={<AddCategory />} />
            <Route path='/admin/AddAdmin' element={<RequirePerks><AddAdmin /></RequirePerks>} />
          </Route>

          <Route path='/PageNF' element={<PageNF/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>


      {/* <GetDetils/> */}

    </div>
  );
}

export default App;
