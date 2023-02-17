import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { adminCheck, logoutAuth, sessionChecking, singinUser } from '../../Redux/Slice/AuthSlice';
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app } from '../../Firebase/Firebaseapp';
import { getFirestore, collection,getDocs,query,where} from "firebase/firestore";
import 'react-toastify/dist/ReactToastify.css';


const auth = getAuth(app)
const fireStoreDb = getFirestore(app);


const AdminNavbar = () => {
  const { user, adminPerks } = useSelector((state) => state.FirebaseAuth)

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [dropDown, setDropdown] = useState(false)


  const dispatch = useDispatch()
  const Navigate = useNavigate()

  const Logout = () => {
    dispatch(logoutAuth())
    dispatch(adminCheck(""))
    dispatch(singinUser(""))
    Navigate('/adminlogin')
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(singinUser(user.email))
        dispatch(sessionChecking(user.email))
        console.log("i am nav")
      }
      else {
        Navigate('/')
      }
    })

    if(user){
      getdata_with_query(user)
    }
    console.log("I am Nab bar"+ user)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

 
  
  const getdata_with_query = async () => {
    const userRef = collection(fireStoreDb, "AdminData");
    const qu =  query(userRef, where("Email", "==", user));
    const Data = await getDocs(qu);
    let admin = [];
    Data.forEach((element) => {
      admin = [element.data()];
    });
    console.log(admin)
    if (admin.length >0) {
       dispatch(adminCheck(admin))
      //  dispatch(singinUser(email))
        console.log(user);
      }
      else{
        Navigate('/')
      }
    }


  return (
    <>
      <div className="flex flex-wrap place-items-center  ">
        <section className="relative w-[100%]">

          <nav className="nav flex flex-wrap items-center justify-between w-[100%] p-2 bg-white shadow-2xl">
            <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
              <svg className="fill-current h-8 mr-2 w-8" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" clipRule="evenodd" viewBox="0 0 716 895">
                <path d="M357.776 0l357.77 178.885v536.657l-357.77 178.89L0 715.542V178.885"></path>
                <path className="text-white fill-current" d="M357.776 804.982l268.32-134.16v-178.89l-89.44-44.72 89.44-44.72V223.606L357.776 89.442v626.1l-178.89-89.44V178.885l-89.443 44.721v447.216l268.333 134.16z"></path>
                <path d="M447.216 670.822l89.44-44.72v-89.45l-89.44-44.72v178.89zM447.216 402.492l89.44-44.721v-89.443l-89.44-44.722"></path>
              </svg>
              <span className="font-semibold text-xl tracking-tight">Carvely</span>
            </div>

            <input className={"menu-btn hidden" + (navbarOpen ? " flex" : " hidden")} type="checkbox" id="menu-btn" />
            <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" htmlFor="menu-btn">
              <span className="navicon bg-grey-darkest flex items-center relative"></span>
            </label>

            <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
              <li className="border-t md:border-none ml-0 lg:ml-4" type="checkbox" onClick={() => setNavbarOpen(!navbarOpen)}>
                <NavLink to="/admin" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Dashboard</NavLink>
              </li>

              <li className="border-t md:border-none ml-0 lg:ml-4" onClick={() => setNavbarOpen(!navbarOpen)}>
                <NavLink to="/admin/addcar" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Addcar</NavLink>
              </li>

              <li className="border-t md:border-none ml-0 lg:ml-4" onClick={() => setNavbarOpen(!navbarOpen)}>
                <NavLink to="/admin/showcars" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Showcars</NavLink>
              </li>

              <li className="border-t md:border-none ml-0 lg:ml-4" onClick={() => setNavbarOpen(!navbarOpen)}>
                <NavLink to="/admin/addbrands" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Add Brands</NavLink>
              </li>

              <li className="border-t md:border-none ml-0 lg:ml-4" onClick={() => setNavbarOpen(!navbarOpen)}>
                <NavLink to="/admin/Category" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Add Category</NavLink>
              </li>

              { adminPerks && adminPerks[0].Perks ==="SuperAdmin"? 
                <li className="border-t md:border-none ml-0 lg:ml-4 mr-0 lg:mr-10" >
                  <NavLink to="/admin/AddAdmin" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">AddAdmin</NavLink>
                </li>
                 :""}

              <div className='relative flex justify-end lg:justify-center items-center flex-col lg:flex-row ml-0 lg:ml-4'>
                <button className='bg-yellow-300 text-black p-2  font-semibold w-[100%] lg:w-auto lg:ml-0' onClick={() => setDropdown(!dropDown)}>
                  {user} ▶️
                </button>

                <button className={'h-[40px] w-[100%] lg:w-[100px] bg-red-400 lg:ml-0 mt-2 lg:mt-0' + (dropDown ? " bg-red-400 rounded-sm ml-2" : "block lg:hidden")} onClick={Logout}>
                  logout
                </button>

              </div>


            </ul>
          </nav>

        </section>

        <Outlet />
      </div>


    </>
  )
}

export default AdminNavbar