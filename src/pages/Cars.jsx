/* eslint-disable array-callback-return */
import React, { useState } from "react";
import CarProduct from '../components/CarProduct'
import '../assets/css/Homestyle.css'
import SearchBar from '../components/SearchBar'
import BrandAll from '../components/BrandAll'
import Pagination from '../components/Pagination'
import { useSelector } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import { STATUS } from "../Redux/Slice/DataSlice";
import Spineer from "../components/Spineer";

const Cars = () => {

  const { Brands, Cardetails, searchReasult, status } = useSelector((state) => state.CarData)
  const [to, setTo] = useState(0)
  const [form, setForm] = useState(4)


  console.log(to, form)
  return (
    <>

      {status === STATUS.LOADING ?

        <Spineer />
        :
        <div className=" overflow-hidden">
          <SearchBar />

          <div className="min-h-[50vh] w-[100%]  flex sm:flex-row flex-col  mb-12  text-black sm:gap-1 gap-2 ">

            <div className="sm:w-[100%] w-[100%] flex justify-start items-center  flex-col">
              {searchReasult.length === 0 ?

                Cardetails && Cardetails.slice(to, form).map((x, index) => {
                  return (
                    <CarProduct car={x} key={index} />
                  )
                })
                :
                searchReasult.map((x, index) => {
                  return (
                    <CarProduct car={x} key={index} />
                  )
                })
              }

            </div>



            <div className="  flex items-center sm:flex-col flex-row justify-around  flex-wrap mt-5 w-[100%]">
              <h1 className=' font-bold font-serif text-[20px] hidden sm:block'>BRANDS</h1>

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


          </div>

          <Pagination setTo={setTo} setForm={setForm} form={form} to={to} />

          <ScrollToTop smooth color="black" width="40" style={{ backgroundColor: "#F273E6" }} />

        </div>
      }
    </>
  )
}

export default Cars