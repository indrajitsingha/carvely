import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { carSearchQuery, GetSearchData } from '../Redux/Slice/DataSlice';


const SearchHeader = () => {

  const Dispatch = useDispatch()
  const Navigate = useNavigate()
  const { Cardetails } = useSelector((state) => state.CarData)
  const [searchData, setsearchData] = useState({
    carName: "",
    Category: "",
    Brand: "",
    Price: ""
  })


  const handelChange = (e) => {
    const { name, value } = e.target
    setsearchData((oldValue) => {
      return {
        ...oldValue, [name]: value
      }
    })

  }

  const onSearchClick = () => {
    Dispatch(carSearchQuery(searchData))
    Dispatch(GetSearchData(searchData))
    Navigate('/cars')

  }


  return (
    <section className=" h-[70vh] w-[100%]  carslider ">


      <div className="flex h-full w-[90%] items-center justify-center container mx-auto lg:px-8">
        <div className="max-w-[100%] text-center">
          <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-4xl">Search Your Dream CAR</h1>

          <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0 w-[97%] ">
            <div className='w-[100%]'>
              <input id="email" name='carName' list="Cars"  type="search" className="rounded-md border border-transparent bg-white/20 ml-2 px-4 lg:px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2 w-[100%] lg:w-[90%]" placeholder="Search Cardetails" value={searchData.carName} onChange={handelChange} />

              <datalist id="Cars">
                {Cardetails && Cardetails.map((x) => {
                  return (
                    <option value={x.Name}>{x.Name}</option>
                  )
                })

                }
              </datalist>
            </div>
            <div className="flex flex-row m-2  w-[100%]">
              <div className="m-1 w-[50%]">
                <select name="Brand" className=' rounded-md border border-transparent bg-white/20 px-2 lg:px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40' value={searchData.Brand} onChange={handelChange}>
                  <option disabled defaultValue>Select Company</option>
                  <option value="" className='text-black font-semibold' >All Brands</option>
                  {
                    Cardetails && Cardetails.map((x, index) => {
                      return (
                        <option value={x.Brand} className=" bg-blue-900 hover:bg-blue-900" key={index} >{x.Brand}</option>
                      )
                    })
                  }

                </select>
              </div>

              <div className="m-1 w-[50%]">
                <select name="Category" className='rounded-md border border-transparent bg-white/20 px-2 lg:px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ' value={searchData.Category} onChange={handelChange}>
                  <option disabled defaultValue>Select Company</option>
                  <option value="" className='text-black font-semibold' >All BodyType</option>
                  {
                    Cardetails && Cardetails.map((x, index) => {
                      return (
                        <option value={x.BodyType} className=" bg-blue-900 hover:bg-blue-900" key={index} >{x.BodyType}</option>
                      )
                    })
                  }

                </select>
              </div>
              <div className="m-1 w-[30%] hidden lg:block">
                <select name="Price" className='rounded-md border border-transparent bg-white/20 px--2 lg:px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40' value={searchData.Price} onChange={handelChange}>
                  <option disabled defaultValue>Select Company</option>
                  <option value="" className='text-black font-semibold' >Select Price</option>
                  {
                    Cardetails && Cardetails.map((x, index) => {
                      return (
                        <option value={x.Price} className=" bg-blue-900 hover:bg-blue-900" key={index} >{x.Price}</option>
                      )
                    })
                  }

                </select>
              </div>
            </div>
            <div className="m-1 w-[100%] block lg:hidden">
                <select name="Price" className='w-[100%] rounded-md border border-transparent bg-white/20 px-2 lg:px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40' value={searchData.Price} onChange={handelChange}>
                  <option disabled defaultValue>Select Company</option>
                  <option value="" className='text-black font-semibold' >Select Price</option>
                  {
                    Cardetails && Cardetails.map((x, index) => {
                      return (
                        <option value={x.Price} className=" bg-blue-900 hover:bg-blue-900" key={index} >{x.Price}</option>
                      )
                    })
                  }

                </select>
              </div>

            <button className="transform rounded-md bg-green-500 ml-4 px-8 py-2.5 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2 lg:ml-10" onClick={onSearchClick}>Search</button>
          </div>
        </div>
      </div>


    </section>
  )
}

export default SearchHeader