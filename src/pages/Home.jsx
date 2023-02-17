/* eslint-disable array-callback-return */
import React from "react";
import BrandAll from "../components/BrandAll";
import '../assets/css/Homestyle.css'
import Categories from "../components/Categories";
import Latest from "../components/Latest";
import SearchHeader from "../components/SearchHeader";
import { useSelector } from "react-redux";
import { STATUS } from "../Redux/Slice/DataSlice";
import Spineer from "../components/Spineer";


const Home = () => {

  const { Brands, status } = useSelector((state) => state.CarData)
  



  return (
    <>

      {status === STATUS.LOADING ?

        <Spineer />
        :

        <>
          <SearchHeader />

          <div className="flex justify-center items-center flex-row w-[100%] mt-11">

            <Categories />

          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 text-center p-5 w-full">Latest Cars</h2>
          <div className="w-[100%]">
            <Latest />
          </div>
          <div className="flex justify-center items-center w-[100%] m-10">

            <h1 className="text-[30px] font-semibold font-serif text-red-900 text-center">Top Brands</h1>

          </div>

          <div className="my-10 flex flex-row justify-around flex-wrap items-center w-[100%]">

            {
              Brands && Brands.map((x, index) => {
                if (index < 6) {
                  return (
                    <BrandAll x={x} brandId={x.id} key={index} />
                  )
                } 
              })
            }
          </div>

        </>


      }
    </>
  );


};



export default Home;

