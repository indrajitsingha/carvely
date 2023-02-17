import React, { useEffect, useState } from 'react'
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { app } from "../Firebase/Firebaseapp";
import { useDispatch } from 'react-redux';
import { carSearchQuery, GetSearchData } from '../Redux/Slice/DataSlice';
import { useNavigate } from 'react-router-dom';

const fireStorage = getStorage(app);

const BrandAll = ({x,key}) => {

  const [imageurl, setImageUrl] = useState()
  const Navigate=useNavigate()

  const Dispatch=useDispatch()

  const getBrandImg = (path) => {
      return getDownloadURL(ref(fireStorage, path))
    }
    useEffect(() => {
      window.scrollTo(0,0)
      getBrandImg(x.BrandLogo).then((url) => setImageUrl(url))
  
      console.log("I am Show Brand logo")
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handelClick=(BrandName)=>{
      Dispatch(carSearchQuery({Brand:BrandName}))
      Dispatch(GetSearchData({Brand:BrandName}))
      Navigate('/cars')
      
    }
  

  return (
    
  <div  name="Brand" className="card  h-[25vh] sm:w-[250px] flex justify-center items-center flex-col w-[30%] rounded shadow-md hover:shadow-lg mix-blend-lighten" key={key} onClick={()=>handelClick(x.Brand)}>
        <div className="img h-[60%] w-[100%]">
          <img
            src={imageurl}
            className="h-[100%] w-[100%] object-contain mix-blend-lighten bg-white"
            alt=""
          />
        </div>
        <div className="text-xl font-bold">
        {x && x.Brand}
        </div>

       
      </div>
      
  )
}

export default BrandAll
