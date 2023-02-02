import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
 <div class="flex flex-wrap place-items-center ">
   <section class="relative mx-auto ">
   
     <nav class="flex justify-between bg-green-500 text-white w-screen h-[10vh]">
       <div class="px-5 xl:px-12 py-6 flex w-full items-center">
         <a class="text-3xl font-bold font-heading" href="#">
            {/* <img class="h-9" src="logo.png" alt="logo"/>  */}
            Carvely Admin
         </a>
     
         <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 adminNav">
           <li><NavLink class="hover:text-gray-200" to="/admin">Dashboard</NavLink></li>
           <li><NavLink class="hover:text-gray-200" to="/admin/addcar">Addcar</NavLink></li>
           <li><NavLink class="hover:text-gray-200" to="/admin/showcars">Showcars</NavLink></li>
           <li><NavLink class="hover:text-gray-200" to="/admin/AddAdmin">AddAdmin</NavLink></li>

  
         </ul>
    
       
       </div>
 
       <div className="cars pr-3 flex justify-center items-center h-[5vh] ">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=1.5" alt="" className='h-12 w-12 mt-6 mr-3 rounded-full' />
       <div className=" pt-5 pr-3">Indrajitsingha@gmail.com</div>

       </div>
  
       
     </nav>
     
   </section>
 
   <Outlet/>
 </div>
     
    </>
   )
}

export default AdminNavbar