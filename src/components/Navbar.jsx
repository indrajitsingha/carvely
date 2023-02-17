import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { logoutAuth, singinUser } from '../Redux/Slice/AuthSlice'
import { featchCarData, getlatestCar } from '../Redux/Slice/DataSlice'
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from '../Firebase/Firebaseapp'


const auth = getAuth(app)

const Navbar = () => {
  const { user } = useSelector((state) => state.FirebaseAuth)
  const Dispatch = useDispatch()
  const [dropDown, setDropdown] = useState(false)


  const Navigate = useNavigate()

  useEffect(() => {

    Dispatch(featchCarData())
      .then(() => { Dispatch(getlatestCar()) })


    console.log("I am frontend search Bar")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        Dispatch(singinUser(user.email))
      }
    })

    console.log("I am Nab bar")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const Logout = () => {
    Dispatch(logoutAuth())
    Navigate('/')
  }


  return (
    <>
      <div className="flex flex-wrap place-items-center ">

        <nav className="nav flex flex-wrap items-center justify-between w-[100%] p-2 bg-white shadow-2xl">
          <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">

            <svg className="fill-current h-8 mr-2 w-8" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" clipRule="evenodd" viewBox="0 0 716 895">
              <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
              <path className="text-white fill-current" d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"></path>
              <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
            </svg>
            <span className="font-semibold text-xl tracking-tight cursor-pointer" onClick={() => Navigate('/')}>Carvely</span>
          </div>

          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
            <span className="navicon bg-grey-darkest flex items-center relative"></span>
          </label>

          <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-[100%] md:w-auto">
            <li className="border-t md:border-none " type="checkbox" >
              <NavLink to="/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold ">Home</NavLink>
            </li>

            <li className="border-t md:border-none">
              <NavLink to="/cars" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Cars</NavLink>
            </li>

            <li className="border-t md:border-none">
              <NavLink to="/category" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Category</NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink to="/comparison" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">HeadTOHead</NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink to="/emicalculator" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">EmiCalculator</NavLink>
            </li>
            <li className="border-t md:border-none">
              <NavLink to="/about" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">About Us</NavLink>
            </li>
            { user && user ? "" :    
            <li className="border-t md:border-none">
              <NavLink to="/login" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Login</NavLink>
            </li>
            }

            { user && user ?

              <div className='relative flex justify-end lg:justify-center items-center flex-col lg:flex-row ml-0 lg:ml-4'>
                <button className='bg-yellow-300 text-black p-2  font-semibold w-[100%] lg:w-auto lg:ml-0' onClick={() => setDropdown(!dropDown)}>
                  {user && user} ▶️
                </button>

                <button className={'h-[40px] w-[100%] lg:w-[100px] bg-red-400 lg:ml-0 mt-2 lg:mt-0' + (dropDown ? " bg-red-400 rounded-sm ml-2" : "block lg:hidden")} onClick={Logout}>
                  logout
                </button>

              </div> : ""
            }
          </ul>
        </nav>

        <Outlet />
      </div>

    </>
  )
}

export default Navbar