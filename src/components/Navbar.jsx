import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
<div class="flex flex-wrap place-items-center ">
  <section class="relative mx-auto ">
  
    <nav class="flex justify-between bg-gray-900 text-white w-screen h-[10vh]">
      <div class="px-5 xl:px-12 py-6 flex w-full items-center">
        <a class="text-3xl font-bold font-heading" href="#">
           {/* <img class="h-9" src="logo.png" alt="logo"/>  */}
           Carvely
        </a>
    
        <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><NavLink class="hover:text-gray-200" to="/">Home</NavLink></li>
          <li><NavLink class="hover:text-gray-200" to="/cars">Cars</NavLink></li>
          <li><NavLink class="hover:text-gray-200" to="/category">Category</NavLink></li>
          <li><a class="hover:text-gray-200" href="#">Contact us </a></li>
        </ul>
   
      
      </div>

      <div className="cars  pt-5 pr-3">
      <img className='h-[5vh] w-[10vh]' src="https://cdn.pixabay.com/photo/2013/07/12/17/17/sports-car-151962_960_720.png" alt="" />
        
      </div>
 
      
    </nav>
    
  </section>

  <Outlet/>
</div>
    
   </>
  )
}

export default Navbar