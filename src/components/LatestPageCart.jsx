import React, { useEffect, useState } from 'react'
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { app } from '../Firebase/Firebaseapp';
import { Link, useNavigate } from 'react-router-dom';


const fireStorage = getStorage(app);
const LatestPageCart = ({x,CarsId,index}) => {
    const [imageurl, setImageUrl] = useState()
    const Navigate=useNavigate()

    const getCarImg = (path) => {
        return getDownloadURL(ref(fireStorage, path))
      }
      useEffect(() => {
        getCarImg(x.carImage).then((url) => setImageUrl(url))
    
        console.log("I am frontEnd car Image")
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
  return (
    <div className="w-[90%] lg:w-[22%] flex-col" key={index}>
    <Link to={`/${CarsId}`}>
    <img
       src={imageurl}
       className="aspect-video w-full object-cover"
       alt=""
     />
     <div className="p-4">
       <h3 className="text-xl font-medium text-gray-900">{x.Name}</h3>
       <h3 className="text-xl font-medium text-gray-900">{x.Price}</h3>
       <p className="mt-1 text-gray-500">The Hyundai Verna is priced from Rs 9.44 lakh to Rs 15.53 lakh (ex-showroom Delhi)</p>
       <div className="mt-4 flex gap-2">
         <span
           className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
         >
           Design
         </span>
         <span
           className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
         >
           Product
         </span>
         <span
           className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600"
           onClick={()=>Navigate(`/${CarsId}`)}
         >
           See More
         </span>
       </div>
     </div>
     </Link>
   </div>
  )
}

export default LatestPageCart