import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate=useNavigate()
  return (
    <div className='mt-auto bg-gray-300'>

    <footer className='flex justify-between items-center min-h-[50px] p-4 border-t border-red border-dashed flex-col lg:flex-row bg-gray-300'>
            <div className='text-sm font-semibold text-black cursor-pointer' onClick={()=>navigate("/adminlogin")}><i className="fa-solid fa-house-lock text-[30px] text-green-400 hover:text-red-400 hover:scale-110 transition ease-in-out" ></i> Copyright &copy; 2022. All rights reserved.</div>    
            <p className="mt-4 text-right text-md text-black lg:mt-0 lg:text-right mb-3 lg:mb-0 cursor-pointer" onClick={()=>navigate("/")}>
               Developed By Indrajit & Arnab
             </p>  
            <div className='flex justify-end items-center gap-6 flex-col lg:flex-row'> 
            
            <div className='hidden lg:block'>
            <h1 className='text-md font-medium text-black'>You can follow me On ➡️</h1>
            </div>
            <div className='flex justify-center items-center flex-row gap-6 pb-6 lg:pb-0'>
            <a href='https://www.instagram.com/singha_arnab_45/'><i className="fa-brands fa-instagram text-[17px] lg:text-[17px] text-pink-600 hover:text-pink-400 hover:scale-110 transition ease-in-out"></i></a>
            <a href='https://www.facebook.com/people/Arnab-Singha/pfbid0hThXzec1ryfqHE6NF4RxK4vpNTMZC9zVT65tYYGSLSbqF9D6shkSfzvFUamP1JB2l/?mibextid=ZbWKwL'><i className="fa-brands fa-facebook text-[17px] lg:text-[17px] text-blue-500 hover:text-blue-700 hover:scale-110 transition ease-in-out"></i></a>
            <a href='https://github.com/SinghaArnab'><i className="fa-brands fa-github text-[17px] lg:text-[17px] text-slate-900 hover:text-slate-900 hover:scale-110 transition ease-in-out"></i></a>
            <a href='https://www.linkedin.com/in/arnab-singha-904268208/'><i className="fa-brands fa-linkedin text-[17px] lg:text-[17px] text-blue-500 hover:text-blue-400 hover:scale-110 transition ease-in-out"></i></a>
            </div>
            </div>
            </footer>

    </div>
  )
}

export default Footer