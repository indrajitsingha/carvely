import React, { useState, useEffect } from "react";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { app } from "../Firebase/Firebaseapp";
import { Link } from "react-router-dom";


const fireStorage = getStorage(app);

const CarProduct = ({ car }) => {
  const [imageurl, setImageUrl] = useState();


  const getCarImg = (path) => {
    return getDownloadURL(ref(fireStorage, path))
  }
  useEffect(() => {
    getCarImg(car.carImage).then((url) => setImageUrl(url))

    console.log("I am frontEnd car Image")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
        <Link to={`/${car.id}`}>
        <div className="flex justify-between items-center flex-col lg:flex-row w-[100%] lg:min-w-[1200px] lg:w-[100%] h-auto lg:h-[35vh] overflow-hidden rounded-lg bg-white shadow lg:mt-5 lg:m-2">
     <div className="sm:w-[40%] w-[100%]  sm:h-[100%] h-[100%] ">
      <img
        src={imageurl}
        className="aspect-video sm:w-[100%] w-[100%] h-[100%] lg:h-[100%]  lg:object-cover object-cover "
        alt=""
      />
      </div>
      <div className="p-4 h-[100%] sm:w-[60%] w-[100%] text-left ">
        <h3 className="text-xl font-medium text-gray-900"> {car.Name }</h3>
        <h3 className=" text-md lg:text-xl font-medium text-gray-900">Price : {car.Price}</h3>
        <p className="mt-1 text-gray-500 sm:block hidden ">{car.Description.slice(0,80)+"......."}</p>
        <h4 className="sm:text-l font-sm text-gray-900 hidden lg:block ">Transmission : {car.Transmission}</h4>
        <h4 className="sm:text-l font-sm  text-gray-900  ">Power : {car.DrivingRange}</h4>
        <h4 className="sm:text-l font-medium text-gray-900 hidden lg:block ">SeatingCapacity : {car.SeatingCapacity}</h4>
        <div className="mt-4 flex gap-2">
          <span
            className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
          >
           {car.BodyType}
          </span>
          <span
            className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
          >
            {car.Brand}
          </span>
          <span
            className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600"
          >
            See More
          </span>
        </div>
      </div>
    </div>
    </Link>

    // <Link to={`/${car.id}`}>


    //   <div className='flex justify-between items-center w-[90%] lg:w-[90%] h-[35vh] lg:mx-10 lg:my-4 px-10  rounded-lg bg-white shadow gap-4'>

    //     <div className='w-[30%]'>
    //       <img src={imageurl} alt=""  height='400'/>
    //     </div>

    //     <div className='w-[60%]'>

    //       <h1 className='text-[10px] lg:text-[20px] font-semibold'>{car.Name}</h1>

    //       <h2 className='text-[10px] lg:text-[20px] font-semibold'>{car.Price}</h2>


    //       <div>
    //         <span className='text-[10px] lg:text-[20px] font-semibold'>{car.Description.slice(0,80)+"......."}</span>

    //         <span className='text-[10px] lg:text-[20px] font-semibold'>Transmission : {car.Transmission}</span>

    //         <span className='text-[10px] lg:text-[20px] font-semibold'>Power : {car.DrivingRange}</span>
    //       </div>



    //       <button className='w-[200px] h-[40px] mt-10 bg-red-500'>see More</button>

    //     </div>


    //   </div>

    // </Link>
  )
}

export default CarProduct