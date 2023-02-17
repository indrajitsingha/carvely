import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { carSearchQuery, GetSearchData } from '../Redux/Slice/DataSlice'



const SearchBar = () => {

  const { Brands, Category, searchQuery,Cardetails } = useSelector((state) => state.CarData)
  const Dispatch = useDispatch()
  const [searchData, setsearchData] = useState({
    carName: searchQuery.carName,
    Category: searchQuery.Category,
    Brand: searchQuery.Brand,
    Price: searchQuery.Price
  })


  const handelChange = (e) => {
    const { name, value } = e.target
    setsearchData((oldValue) => {
      return {
        ...oldValue, [name]: value
      }
    })

  }

  const SearchButton = () => {
    Dispatch(carSearchQuery(searchData))
    Dispatch(GetSearchData(searchData))
  }


  return (
    <div className=" sm:h-[10vh] h-auto w-screen bg-black flex justify-center items-center">
      <div className="w-[100%] lg:w-[60%]  text-center">

        <div className="mt-2 flex flex-col sm:-mx-2 sm:flex-row lg:justify-center sm:space-y-0 w-[100%] lg:w-[100%]">
          <input id="email" list="Cars"  name='carName' value={searchData.carName} onChange={handelChange} type="search" className=" rounded-md cursor-pointer border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2" placeholder="Search Cars" />

          <datalist id="Cars">
          { Cardetails && Cardetails.map((x)=>{
               return (
                <option value={x.Name}>{x.Name}</option>
               )
          })
                
                }
            </datalist>

          <div className="flex flex-row m-2 justify-evenly  items-center w-[100%]">
            <div className="m-1 w-[40%] lg:w-[30%]">
              <select name="Category" className='rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ' value={searchData.Category} onChange={handelChange}>
                <option disabled defaultValue>Select Category</option>
                <option className='p-1 bg-black' value="" >All Category</option>
                {
                  Category && Category.map((x,index) => {
                    return (
                      <option value={x.Category} className="p-1 bg-black" key={index} >{x.Category}</option>
                    )
                  })
                }

              </select>


            </div>




            <div className="m-1 w-[40%] lg:w[30%]">
              <select name="Brand" className='rounded-md border border-transparent bg-white/20 px-2 lg:px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ' value={searchData.Brand} onChange={handelChange}>
                <option disabled defaultValue>Select Brand</option>
                <option className='p-1 bg-black text-white' value="" >All Brand</option>
                {
                  Brands && Brands.map((x,index) => {
                    return (
                      <option value={x.Brand} className="p-1 bg-black  text-white" key={index} >{x.Brand}</option>
                    )
                  })
                }
              </select>

            </div>

            <div className="m-1 w-[30%] hidden lg:block">
              <select name='Price' value={searchData.Price} onChange={handelChange} className="rounded-md border border-transparent bg-white/20 px-2 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2">
                <option className='p-1 bg-black'>Price</option>
                <option className='p-1 bg-black'>1-5 Lakh </option>
                <option className='p-1 bg-black'>5-10 Lakhs</option>
                <option className='p-1 bg-black'>10-15 Lakhs</option>
                <option className='p-1 bg-black'>15-20 Lakhs</option>
                <option className='p-1 bg-black'>20-25 Lakhs</option>
                <option className='p-1 bg-black'>25-30 Lakhs</option>
                <option className='p-1 bg-black'>30-35 Lakhs</option>
                <option className='p-1 bg-black'>35-40 Lakhs</option>
                <option className='p-1 bg-black'>40 Lakhs * above</option>
              </select>
            </div>
          </div>



          <button className=" transform lg:rounded-md bg-green-500 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2" onClick={SearchButton}>Search</button>

        </div>
      </div>


    </div>
  )
}

export default SearchBar