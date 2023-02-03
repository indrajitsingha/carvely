import React from 'react'

const BrandAll = () => {
  return (
  <>
  <h2 className="text-2xl font-extrabold text-gray-900 text-center p-5 w-full">Popular Brands</h2>
    <div className="min-h-[30vh] sm:h-[50vh] w-[100%] flex  flex-col sm:flex-row justify-center items-center mt-5 mb-12  text-black sm:gap-1 gap-2">


    <div className="card  h-[30vh] sm:w-[20%] w-[80%] rounded border-4">
        <div className="img h-[80%] w-[100%]">
          <img
            src="https://www.carlogos.org/car-logos/ford-logo.png "
            className="h-[100%] w-[100%] object-contain"
            alt=""
          />
        </div>
        <div className="des  h-[20%] w-[100%] pt-2 ">
          <div className=" text-center text-[20px]">ford</div>
         
        </div>
       
      </div>


      <div className="card  h-[30vh] sm:w-[20%] w-[80%] rounded border-4">
        <div className="img h-[80%] w-[100%]">
          <img
            src="https://www.carlogos.org/logo/Mercedes-Benz-logo-2011-1920x1080.png "
            className="h-[100%] w-[100%] object-contain"
            alt=""
          />
        </div>
        <div className="des  h-[20%] w-[100%] pt-2 ">
          <div className=" text-center text-[20px]">Mercedes Benz</div>
         
        </div>
       
      </div>





      <div className="card  h-[30vh] sm:w-[20%] w-[80%] rounded border-4">
        <div className="img h-[80%] w-[100%]">
          <img
            src="https://www.citypng.com/public/uploads/preview/hd-renault-logo-transparent-background-11663515845mrdmafwffk.png "
            className="h-[100%] w-[100%] object-contain"
            alt=""
          />
        </div>
        <div className="des  h-[20%] w-[100%] pt-2 ">
          <div className=" text-center text-[20px]">renault</div>
         
        </div>
       
      </div>



      <div className="card  h-[30vh] sm:w-[20%] w-[80%] rounded border-4">
        <div className="img h-[80%] w-[100%]">
          <img
            src="https://listcarbrands.com/wp-content/uploads/2017/10/Tata-Motors-Logo-1988.png "
            className="h-[100%] w-[100%] object-contain"
            alt=""
          />
        </div>
        <div className="des  h-[20%] w-[100%] pt-2 ">
          <div className=" text-center text-[20px]">Tata Motors</div>
         
        </div>
       
      </div>

    </div>
  </>
  )
}

export default BrandAll
