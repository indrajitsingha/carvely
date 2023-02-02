import React from 'react'
import CarProduct from '../components/CarProduct'
import '../assets/css/Homestyle.css'

const Cars = () => {
  return (
    <>
      <section class=" h-[70vh] w-[100%]  carslider ">
  

  <div class="flex h-full w-[100%] items-center justify-center container mx-auto px-8">
    <div class="max-w-2xl text-center">
      <h1 class="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-4xl">Search Your Dream CAR</h1>

      <div class="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
        <input id="email" type="text" class="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2" placeholder="Search Cars" />

        <div class="flex flex-row m-2">
                        <div class="m-1">
                            <select class="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ">
                                <option selected className='bg-black '>Vehical Types</option>
                                <option className='p-1 bg-black'>Hatchback</option>
                                <option className='p-1 bg-black'>Sedan</option>
                                <option className='p-1 bg-black'>Hatchback</option>
                                <option className='p-1 bg-black'>SUV</option>
                                <option  className='p-1 bg-black'>MUV</option>
                                <option className='p-1 bg-black'>Luxary</option>
                                <option className='p-1 bg-black'>Super Luxury</option>
                                <option className='p-1 bg-black'>Convertible</option>
                                <option className='p-1 bg-black'>Hybrid</option>
                                <option className='p-1 bg-black'>Coupe</option>
                                <option className='p-1 bg-black'>Pickup Truck</option>
                               
                            </select>
                        </div>
                     


                       
                        <div class="m-1">
                            <select class="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2">
                                <option selected className='p-1 bg-black'>Brand</option>
                                <option  className='p-1 bg-black'>Maruti</option>
                                <option  className='p-1 bg-black'>Hyundai</option>
                                <option  className='p-1 bg-black'>Honda</option>
                                <option  className='p-1 bg-black'>Tata</option>
                                <option  className='p-1 bg-black'>Renault</option>
                                <option className='p-1 bg-black' >Mahindra</option>
                                <option  className='p-1 bg-black'>Ford</option>
                                <option  className='p-1 bg-black'>Nissan</option>
                                <option  className='p-1 bg-black'>Datsun</option>
                            </select>
                        </div>

                        
                        


                        <div class="m-1">
                        <select class="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2">
                                <option  className='p-1 bg-black'>Price</option>
                                <option  className='p-1 bg-black'>1-5 Lakh </option>
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

        <button class="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">Search</button>
      </div>
    </div>
  </div>

  
</section>
 
    <div className="min-h-[50vh] w-[100%] flex  flex-col flex-wrap sm:flex-row justify-center items-center mt-5 mb-12  text-black sm:gap-1  gap-2">




    <CarProduct/>
    <CarProduct/>
    <CarProduct/>
    <CarProduct/>
    <CarProduct/>
    <CarProduct/>
   
    </div>
    </>
  )
}

export default Cars