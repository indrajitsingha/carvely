import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate=useNavigate()
  return (
    <div>
    <footer class="footer footer-center  w-full p-4 bottom-0 text-white bg-black">
      <div class="text-center">
        <p>
          Copyright © 2022 -
          <p onClick={()=>navigate("/adminlogin")} >Login</p>
          
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer