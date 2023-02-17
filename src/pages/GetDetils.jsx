import React, { useEffect, useState } from 'react'
import Latest from '../components/Latest'
import { Navigate, useParams } from 'react-router-dom'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from '../Firebase/Firebaseapp';
import { useDispatch, useSelector } from 'react-redux';
import { featchCarData, getlatestCar, STATUS } from "../Redux/Slice/DataSlice";
import Comment from '../components/Comment';
import Spineer from '../components/Spineer';
import ScrollToTop from "react-scroll-to-top";

const fireStorage = getStorage(app);

const GetDetils = () => {
  const { Cardetails,status } = useSelector((state) => state.CarData)
  const { CarsId } = useParams();
  const Dispatch = useDispatch();

  const [imgaeUrl, setUrl] = useState(null)
  const [imgaeUrlTwo, setUrlTwo] = useState(null)
  const [imgaeUrlThree, setUrlThree] = useState(null)

  const Data = Cardetails.find((x) => x.id === CarsId)

  const getCArImg = (path) => {
    return getDownloadURL(ref(fireStorage, path))
  }


  useEffect(() => {
    window.scrollTo(0, 0)

    if (Data) {
      const imgUrl = Data.carImage
      const imgUrlTwo = Data.carImageTwo
      const imgUrlThree = Data.carImageThree

      getCArImg(imgUrl).then((url) => setUrl(url))
      getCArImg(imgUrlTwo).then((url) => setUrlTwo(url))
      getCArImg(imgUrlThree).then((url) => setUrlThree(url))
    }

    else{
      Navigate('/PageNF')
    }
    console.log("Get Image frontEnd")
  }, [Data])

  useEffect(() => {

    window.scrollTo(0, 0)
    if (Cardetails.length === 0) {

      Dispatch(featchCarData())
        .then(() => { Dispatch(getlatestCar()) })
    }
    console.log("I am frontend rerender")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Cardetails])



  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [

  {
    id: 1,
    src: imgaeUrl
  },
  {
    id: 2,
    src: imgaeUrlTwo
  },
  {
    id: 3,
    src: imgaeUrlThree
  }
   ];


  useEffect(() => {
    const intervalById = setInterval(() => {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }, 2000);

    return () => clearInterval(intervalById);
 
  }, [currentIndex,images.length]);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePreviewClick = (index) => {
    setCurrentIndex(index);
  };



  if (status === STATUS.LOADING) return <Spineer/>

  return (

    
    <div className=' overflow-hidden'>
      <section className="text-gray-700 body-font" key={CarsId}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font lg:text-4xl text-3xl mb-4 font-medium text-gray-900">{Data && Data.Name}
              <br className="hidden lg:inline-block" /> <h2 className='py-3'>{Data && Data.Price}*</h2>
            </h1>
            <p className="mb-8 leading-relaxed">{Data  && Data.Description}</p>
            <div className="flex justify-center">
              <a href='#details'>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" >More Details</button>

              </a>
              <a href='#specification'>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Specification</button>
              </a>
            </div>
          </div>

          <div className="relative bg-gray-900 h-[300px] lg:h-[400px] w-[90%] lg:w-[600px]">
          <div>
          <img
              className="h-[100%] lg:h-[400px] w-[100%] lg:w-[600px] object-cover object-center"
              src={images[currentIndex].src}
              alt=""
            />
            <button
              className="absolute left-0 bottom-0  m-2 p-1 text-black font-semibold text-[20px] bg-slate-400 rounded-md"
              onClick={handlePrevClick}
            >
              Prev
            </button>
            <button
              className="absolute right-0 bottom-0  m-2 p-1 text-black font-medium text-[20px] bg-slate-400  rounded-md"
              onClick={handleNextClick}
            >
              Next
            </button>

          </div>
            
            <div className="bottom-0 p-2 bg-gray-800 flex w-[100%]">
            <div className='flex justify-center items-cente w-[100%]'>
              {images.map((image, index) => (
                <img
                  key={image.id}
                  className="w-12 h-12 object-cover object-center mr-2 cursor-pointer"
                  src={image.src}
                  onClick={() => handlePreviewClick(index)}
                  alt=""
                />
              ))}
            </div>
            </div>
          </div>



        </div>
      </section>

      <section className="text-gray-700 body-font border-t border-gray-200 w-[100%] flex justify-center items-center mt-10 p-10 h-auto" id='details'>
        <div className="container  w-[100%] flex justify-center items-center flex-col mt-10">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Highlight Specification of cars</h2>
            <h1 className="lg:text-3xl text-2xl font-medium title-font text-gray-900">Highlight Specification of {Data && Data.Name}</h1>
          </div>
          <div className="w-[100%] flex justify-center items-center flex-wrap gap-1  ">


            <div className="w-[48%] lg:w-1/6 lg:p-2 ">
              <div className="flex rounded-lg h-[239px] bg-gray-100 p-8 flex-col">
                <div className="flex flex-col justify-center items-center mb-3">
                  <div className="w-11 h-11 mr-3 inline-flex items-center justify-center text-white flex-shrink-0">

                    <img src="https://www.svgrepo.com/show/237125/engine-motor.svg" alt="" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Engine</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-center text-xl font-bold">1197 cc</p>

                </div>
              </div>
            </div>

            <div className="w-[48%] lg:w-1/6 lg:p-2">
              <div className="flex rounded-lg h-[239px] bg-gray-100 p-8 flex-col">
                <div className="flex flex-col justify-center items-center mb-3">
                  <div className="w-8 h-8 mr-1 inline-flex items-center justify-center text-white flex-shrink-0">
                    <svg fill="#d72323" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#d72323"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>battery-black</title> <path d="M14.389 1c-0.89 0-3.223 0.747-3.223 1.67v1.67h-3.193c-1.78 0-3.223 1.493-3.223 3.34v19.981c0 1.847 1.442 3.34 3.223 3.34h16.055c1.78 0 3.223-1.493 3.223-3.34v-19.98c0-1.847-1.442-3.34-3.223-3.34h-3.193v-1.67c0-0.923-2.333-1.67-3.223-1.67l-3.224-0.001zM16 7.68v8.32h6.416l-6.416 11.66v-8.32h-6.416l6.416-11.66z"></path> </g></svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">BHP</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-center text-xl font-bold">{Data && Data.Power}Bhp</p>

                </div>
              </div>
            </div>


            <div className="w-[48%] lg:w-1/6 lg:p-2">
              <div className="flex rounded-lg h-[239px] bg-gray-100 p-8 flex-col">
                <div className="flex flex-col justify-center items-center mb-4">
                  <div className="w-11 h-11 mr-3 inline-flex items-center justify-center  text-white flex-shrink-0">
                    <img src="https://www.svgrepo.com/show/336441/baby-car-seat.svg" alt="" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Seating Capacity</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-center text-xl font-bold">{Data && Data.SeatingCapacity}</p>

                </div>
              </div>
            </div>


            <div className="w-[48%] lg:w-1/6 px--2 lg:p-2">
              <div className="flex rounded-lg h-[239px] bg-gray-100 p-8 flex-col">
                <div className="flex flex-col justify-center items-center mb-3">
                  <div className="w-14 h-14 mr-1 inline-flex items-center justify-center  text-white flex-shrink-0">
                    <img src="https://www.svgrepo.com/show/493482/drive.svg" alt="" />
                  </div>
                  <h2 className="text-gray-900 text-lg text-center title-font font-medium">Drive Type</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-center text-xl font-bold">{Data && Data.Transmission}</p>

                </div>
              </div>
            </div>


            <div className="w-[100%] lg:w-1/6 lg:p-2">
              <div className="flex rounded-lg h-[239px] bg-gray-100 p-8 flex-col">
                <div className="flex flex-col justify-center items-center mb-3">
                  <div className="w-10 h-10 mr-2 inline-flex items-center justify-center  text-white flex-shrink-0">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#f92f2f" className="bi bi-speedometer2" stroke="#f92f2f"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"></path> <path fillRule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"></path> </g></svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Mileage</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-xl text-center font-bold">{Data && [Data.DrivingRange].splice(0,5)}kmpl</p>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


     <div className="container px-2 py-5 lg:mx-auto" id='specification'>
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Full Car Specification</h2>
          <h1 className="lg:text-3xl text-2xl font-medium title-font text-gray-900">Specification of {Data && Data.Name}</h1>
        </div>
      </div>
      <div className="hidden md:hidden lg:flex lg:text-xl w-[100%] flex-wrap  font-semibold  mb-5 justify-center flex-row items-center lg:border-separate lg:border-spacing-2">
        <div className=" lg:w-[90%]  bg-white compare  w-[99%]  flex justify-around items-center my-2 lg:mx-5">
          <div className=" lg:w-[30%] w-[50%]  ">
            <table className='lg:w-[100%] w-[90%]'>
              <thead>
                <tr className=' border-b border-gray-300   ' >
                  <td className='p-5'>BatteryCapacity</td>
                  <td>{Data && Data.BatteryCapacity}</td>
                </tr>
                <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>BodyType</td>
                  <td>{Data && Data.BodyType}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>Brand</td>
                  <td>{Data && Data.Brand}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>Driving Range</td>
                  <td>{Data && Data.DrivingRange}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>MaxPower</td>
                  <td>{Data && Data.MaxPower}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>MaxTorque</td>
                  <td>{Data && Data.MaxTorque}</td>
                </tr>
              </thead>

            </table>
          </div>

          <div className=" lg:w-[30%]  ">
            <table className='lg:w-[100%]'>
              <thead>
                <tr className=' border-b border-gray-300 ' >
                  <td className='p-5 p'>Power</td>
                  <td>{Data && Data.Power}</td>
                </tr>
                <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>Price</td>
                  <td>{Data && Data.Price}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>Seating Capacity</td>
                  <td>{Data && Data.SeatingCapacity}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>Transmission</td>
                  <td>{Data && Data.Transmission}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>Power</td>
                  <td>{Data && Data.Name}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>ARAI Mileage</td>
                  <td>{Data && Data.Name}</td>
                </tr>
              </thead>

            </table>
          </div>

        </div>
      </div> 


      <div className=" lg:hidden flex lg:text-xl w-[98%] flex-wrap  font-semibold  mb-5 justify-center flex-row items-center lg:border-separate lg:border-spacing-2">
        <div className=" lg:w-[80%]  bg-white compare  w-[99%]  flex justify-around items-center my-2 lg:mx-5">
          <div className=" lg:w-[30%] w-[90%]">
            <table className='lg:w-[100%] w-[90%]'>
              <thead>
                <tr className=' border-b border-gray-300' >
                  <td className='p-5'>BatteryCapacity</td>
                  <td>{Data && Data.BatteryCapacity}</td>
                </tr>
                <tr className=' border-b border-gray-300' >
                  <td className='p-5'>BodyType</td>
                  <td>{Data && Data.BodyType}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>Brand</td>
                  <td>{Data && Data.Brand}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>Driving Range</td>
                  <td>{Data && Data.DrivingRange}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>MaxPower</td>
                  <td>{Data && Data.MaxPower}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>MaxTorque</td>
                  <td>{Data && Data.MaxTorque}</td>
                </tr>
                <tr className=' border-b border-gray-300 ' >
                  <td className='p-5 p'>Power</td>
                  <td>{Data && Data.Power}</td>
                </tr>
                <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>Price</td>
                  <td>{Data && Data.Price}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>Seating Capacity</td>
                  <td>{Data && Data.SeatingCapacity}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>Transmission</td>
                  <td>{Data && Data.Transmission}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>Power</td>
                  <td>{Data && Data.Name}</td>
                </tr> <tr className=' border-b border-gray-300 ' >
                  <td className='p-5'>ARAI Mileage</td>
                  <td>{Data && Data.Name}</td>
                </tr>
              </thead>

            </table>
          </div>

        </div>
      </div> 

      


      <section className="text-gray-700 body-font ">
        <div className="container px-5 py-24 lg:mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Related Cars</h2>
            <h1 className="lg:text-3xl text-2xl font-medium title-font text-gray-900">Check them out also</h1>
          </div>


          <div className="flex flex-wrap -m-4">


            <Latest key={Data && Data.id} />

            <Comment key={CarsId+1000} CarsId={CarsId}/>


          </div>
        </div>
      </section> 

      <ScrollToTop smooth color="black" width="40" style={{ backgroundColor: "#F273E6" }} />


    </div>












  )
}

export default GetDetils