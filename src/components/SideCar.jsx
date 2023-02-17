import React from 'react'

const SideCar = () => {
  return (
    <div className='flex justify-between items-center w-[70%] h-[35vh] m-10 px-10 bg-slate-300 '>

    <div className='w-[30%]'>
        <img src="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
    </div>

    <div className='w-[60%]'>

    <h1 className='text-[20px] font-semibold'>Hundai Name</h1>

    <h2 className='text-[18px] font-semibold'>Rs.9.64 Lakh*</h2>
    

    <div>
    <span className='text-[25px] font-semibold'>Diesel/Petrol</span>

    <span className='text-[25px] font-semibold'>17.7 to 25.0 kmpl</span>

    <span className='text-[25px] font-semibold'>Manual/Automatic</span>
    </div>

    

    <button className='w-[200px] h-[40px] mt-10 bg-red-500'>see More</button>

    </div>


    </div>
  )
}

export default SideCar