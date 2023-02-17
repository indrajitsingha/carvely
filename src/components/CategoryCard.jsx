import React, { useEffect, useState } from 'react'
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { app } from "../Firebase/Firebaseapp";
import { carSearchQuery, GetSearchData } from '../Redux/Slice/DataSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const fireStorage = getStorage(app);
const CategoryCard = ({x,index}) => {

     
  const Dispatch=useDispatch()
  const Navigate=useNavigate()

    const [imageurl, setImageUrl] = useState()

    const getCategoryImg = (path) => {
        return getDownloadURL(ref(fireStorage, path))
      }
      useEffect(() => {
        getCategoryImg(x.CategoryLogo).then((url) => setImageUrl(url))
    
        console.log("I am Show Brand logo")
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      const handelClick=(Category)=>{
        Dispatch(carSearchQuery({Category:Category}))
        Dispatch(GetSearchData({Category:Category}))
        Navigate('/cars')
        
      }

  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[40%] lg:w-[20%] mt-6" key={index} onClick={()=>handelClick(x.Category)}>
    <a href="#none">
        <img class="rounded-t-lg" src={imageurl} alt="" />
    </a>
    <div class="p-5">
        <a href="#none">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{x && x.Category}</h5>
        </a>
        <a href="#none" class="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Check it out
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
  )
}

export default CategoryCard