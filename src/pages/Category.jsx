import React from 'react'
import { useSelector } from 'react-redux'
import BrandAll from '../components/BrandAll'
import Categories from '../components/Categories'


const Category = () => {

  const { Brands } = useSelector((state) => state.CarData)


  return (
    <div  className='w-[100%] flex justify-center items-center flex-col min-h-[90vh] mt-10'>
        <h1 className="text-[30px] font-semibold font-serif text-red-900 text-center">Top Category</h1>
      <Categories />
      <div className="flex justify-center items-center w-[100%] m-10">

        <h1 className="text-[30px] font-semibold font-serif text-red-900 text-center">Top Brands</h1>

      </div>

      <div className="my-10 px-2 flex  justify-evenly items-center flex-row flex-wrap">

        {
          Brands && Brands.map((x, index) => {
            return (

              <BrandAll x={x} brandId={x.id} key={index} />

            )
          })
        }
      </div>


    </div>
  )
}

export default Category