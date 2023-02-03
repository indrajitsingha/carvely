import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { logoutAuth,sessionChecking } from '../../Redux/Slice/AuthSlice';
import {onAuthStateChanged,getAuth} from "firebase/auth";
import { app } from '../../Firebase/Firebaseapp';


const auth =getAuth(app)


const AdminNavbar = () => {
  const { user } = useSelector((state) => state.FirebaseAuth)

  const dispatch=useDispatch()
  const Navigate=useNavigate()

  const Logout=()=>{
    dispatch(logoutAuth())
    Navigate('/adminlogin')
  }

useEffect(()=>{
    onAuthStateChanged (auth ,(user)=>{
        if(user){
            console.log('you log in');
            dispatch(sessionChecking(user))
        }
        else{
            Navigate('/adminlogin')
        }
    })     
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <div className="flex flex-wrap place-items-center ">
        <section className="relative mx-auto ">

          <nav className="flex justify-between bg-green-500 text-white w-screen h-[10vh]">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading" href="#none">
                {/* <img className="h-9" src="logo.png" alt="logo"/>  */}
                Carvely Admin
              </a>

              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 adminNav">
                <li><NavLink className="hover:text-gray-200" to="/admin">Dashboard</NavLink></li>
                <li><NavLink className="hover:text-gray-200" to="/admin/addcar">Addcar</NavLink></li>
                <li><NavLink className="hover:text-gray-200" to="/admin/showcars">Showcars</NavLink></li>
                <li><NavLink className="hover:text-gray-200" to="/admin/AddAdmin">AddAdmin</NavLink></li>


              </ul>


            </div>

            <div className='flex justify-center items-center flex-row'>
           <button>
            email:{user.email}
           </button>

           <button className='h-[50px] w-[100px] bg-red-700' onClick={Logout}>
            logout
           </button>

           </div>

          </nav>

        </section>

        <Outlet />
      </div>

    </>
  )
}

export default AdminNavbar