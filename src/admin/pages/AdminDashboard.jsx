import React, { useEffect, useState } from "react";
import CompanyPerform from "../components/CompanyPerform";
import PieChartadmin from "../components/PieChartadmin";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../Firebase/Firebaseapp";
import PieChartBrand from "../components/PieChartBrand";
import { ToastContainer } from 'react-toastify';

const fireStoreDb = getFirestore(app);


const AdminDashboard = () => {
  const [Cars, setCars] = useState([])
  const [Admin, setAdmin] = useState([])
  const [Brands, setBrands] = useState([])
  const [category,setCategory]=useState("")

  const allCars = () => {
    return getDocs(collection(fireStoreDb, 'CarInfo'));
  }

  const AllAdminData = () => {
    return getDocs(collection(fireStoreDb, 'AdminData'));
  }

  const BrandsData = () => {
    return getDocs(collection(fireStoreDb, 'Brands'));
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    allCars().then((cars) => setCars(cars.docs));
    AllAdminData().then((Admin) => setAdmin(Admin.docs));
    BrandsData().then((brands) => setBrands(brands.docs));

    console.log("I am Admin Dashboard")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const GetCategory = () => {
    return getDocs(collection(fireStoreDb, 'Category'));
}

useEffect(() => {
  GetCategory().then((category) => setCategory(category.docs));
  console.log("I am AddCars")
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])



  return (
    <div className="grid min-h-[93vh] w-full mb-4 pb-10 px-8 ">
     <ToastContainer />
      <div className="grid grid-cols-12 gap-6">
        <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
          <div className="col-span-12 mt-8">
            <div className="container px-5 py-2 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">

                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                  <b className=" text-green-500">Carvely</b> DASHBOARD
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-5">
              <a
                className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                href="#none"
              >
                <div className="p-5">
                  <div className="flex justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                      <span className="flex items-center">30%</span>
                    </div>
                  </div>
                  <div className="ml-2 w-full flex-1">
                    <div>
                      <div className="mt-3 text-3xl font-bold leading-8">{Cars && Cars.length}</div>

                      <div className="mt-1 text-base text-gray-600">Total Cars Listed</div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                href="#none"
              >
                <div className="p-5">
                  <div className="flex justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                      <span className="flex items-center">30%</span>
                    </div>
                  </div>
                  <div className="ml-2 w-full flex-1">
                    <div>
                      <div className="mt-3 text-3xl font-bold leading-8">{category && category.length }</div>

                      <div className="mt-1 text-base text-gray-600">Total Categories</div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                href="#none"
              >
                <div className="p-5">
                  <div className="flex justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-pink-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>
                    <div className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                      <span className="flex items-center">30%</span>
                    </div>
                  </div>
                  <div className="ml-2 w-full flex-1">
                    <div>
                      <div className="mt-3 text-3xl font-bold leading-8">{Brands && Brands.length}</div>

                      <div className="mt-1 text-base text-gray-600">Total Brands</div>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                href="#none"
              >
                <div className="p-5">
                  <div className="flex justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                      />
                    </svg>
                    <div className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                      <span className="flex items-center">30%</span>
                    </div>
                  </div>
                  <div className="ml-2 w-full flex-1">
                    <div>
                      <div className="mt-3 text-3xl font-bold leading-8">{Admin && Admin.length}</div>

                      <div className="mt-1 text-base text-gray-600">Total Admin</div>
                    </div>
                  </div>
                </div>
              </a>

            </div>

            <div className="flex justify-between items-center w-[100%] mt-10 flex-col lg:flex-row">

              <PieChartadmin />
              <PieChartBrand/>
              <CompanyPerform  admin={Admin.length} brands={Brands.length}  categories={category.length} totalCars={Cars.length}/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
