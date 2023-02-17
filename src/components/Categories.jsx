import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from './CategoryCard'


const Categories = () => {

    const { Category } = useSelector((state) => state.CarData)



    return (
        <div className='w-[100%] flex justify-evenly items-center flex-wrap gap-11 h-[auto] mt-[2] '>

{
    Category && Category.map((x,index)=>{

        return (

          <CategoryCard x={x} index={index} categoryId={x.id} key={index}/>
        )
    })

           }

        </div>

    )
}

export default Categories