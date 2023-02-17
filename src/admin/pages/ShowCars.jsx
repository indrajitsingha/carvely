/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../../Firebase/Firebaseapp';
import ShowCarsCard from "./ShowCarsCard";
import { useDispatch, useSelector } from "react-redux";
import { updateRef } from "../../Redux/Slice/AuthSlice";


const fireStoreDb = getFirestore(app);


const ShowCars = () => {
  const { updateRefresh } = useSelector((state) => state.FirebaseAuth)
  const dispatch=useDispatch()

  const [Cars, setCars] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [serchQuery,setQuery]=useState("")

  const allCars = () => {
    return getDocs(collection(fireStoreDb, 'CarInfo'));
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 800)
    allCars().then((cars) => setCars(cars.docs));

    console.log("I am ShowCars")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateRefresh])


  const refresh=()=>{
    dispatch(updateRef())
    setQuery("")
  }

  return (
    <>

      {

        isLoading ?
          <div className="w-[100%] h-[82vh] flex justify-center items-center">
            <div className="loader w-[20%] ">
              <div className="square-item"></div>
              <div className="square-item"></div>
              <div className="square-item"></div>
              <div className="square-item"></div>
            </div>
          </div>
          :
          <section className="relative py-16 bg-blueGray-50 w-[100%] min-h-[95vh] ShowcarsBack">
            <div className="w-full mb-12 px-4">
              <div
                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
             bg-pink-900 text-white mx-auto backdrop-blur-sm bg-black/50"
              >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between items-center flex-row ">
                      <h3 className="font-semibold text-lg text-white">Cars Data
                      <span className="ml-5  lg:bg-yellow-200 py-1 px-4 lg:text-black rounded-sm">{Cars && "Total Cars "+ Cars.length}</span>
                       </h3>

                       <button className="bg-red-400 py-1 px-4"  onClick={refresh}> <i className="fa-solid fa-rotate-right ml-2"></i> Refresh</button>
                    </div>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto ">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                          Car Name
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                          Range
                        </th>
                        <th className="px-2x align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                              <select name="menu" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 pl-6 text-[17px] rounded-full outline-none'  value={serchQuery} onChange={(e)=>setQuery(e.target.value)}>
                              <option disabled defaultValue>Select Company</option>
                              <option value="" >All Brands</option>
                              {               
                                Cars && Cars.map((x,index)=>{
                                  return(
                                    <option value={x.data().Brand} className=" bg-blue-900 hover:bg-blue-900" key={index} >{x.data().Brand}</option>  
                                  )
                                })
                              }
                              
                              </select>
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                          Price
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                          status
                        </th>
                        <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-pink-800 text-pink-300 border-pink-700">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        Cars && Cars.filter((x)=>{
                                if(serchQuery===''){
                                    return x
                                }else if (x.data().Brand.toLowerCase().includes(serchQuery.toLowerCase())){
                                    return x
                                }}).map((x, index) => {
                        return (
                          <ShowCarsCard x={x.data()} carsId={x.id} index={index} key={index} />

                        )
                      })
                      }

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

      }
    </>
  );
};

export default ShowCars;
