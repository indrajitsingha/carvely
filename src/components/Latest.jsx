/* eslint-disable array-callback-return */
import React from 'react'
import LatestPageCart from './LatestPageCart';
import { useSelector } from "react-redux";



const Latest = () => {

  const { Cardetails } = useSelector((state) => state.CarData)

  return (
    <div className=" flex justify-center items-start w-[100%] mt-2 gap-2 flex-wrap">
      {
        Cardetails && Cardetails.map((x, index) => {

          if(index <4){
            return (
            <LatestPageCart x={x} CarsId={x.id} index={index} />
          )

          }
      
        })
      }
    </div>
  );
};

export default Latest;






