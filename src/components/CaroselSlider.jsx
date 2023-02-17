import React from 'react'
import { useEffect } from 'react'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useState } from 'react';
import { app } from '../Firebase/Firebaseapp';


const fireStorage = getStorage(app);

const CaroselSlider = ({compCar}) => {

    
  const [imgaeUrl, setUrl] = useState(null)
  const [imgaeUrlTwo, setUrlTwo] = useState(null)
  const [imgaeUrlThree, setUrlThree] = useState(null)

  const Data=compCar

  console.log(Data)

    const getCArImg = (path) => {
        return getDownloadURL(ref(fireStorage, path))
      }
    
      
    
      useEffect(() => {
        window.scrollTo(0,700);
    
        if (Data) {
          const imgUrl = Data[0].carImage
          const imgUrlTwo = Data[0].carImageTwo
          const imgUrlThree = Data[0].carImageThree
    
          getCArImg(imgUrl).then((url) => setUrl(url))
          getCArImg(imgUrlTwo).then((url) => setUrlTwo(url))
          getCArImg(imgUrlThree).then((url) => setUrlThree(url))
        }
        console.log("Get Image frontEnd")
      }, [Data])

    
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
    

    
      const handlePrevClick = () => {
        setCurrentIndex((currentIndex + images.length - 1) % images.length);
      };
    
      const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
      };
    
      const handlePreviewClick = (index) => {
        setCurrentIndex(index);
      };
    
  return (
    
    <div className="relative bg-gray-900 h-[360px] lg:h-[400px] w-[100%] lg:w-[100%]">
          <div>
          <img
              className="h-[300px] lg:h-[400px] w-[99%] lg:w-[100%] object-cover object-center"
              src={images[currentIndex].src}
              alt=""
            />
            <button
              className="hidden lg:block absolute left-0 bottom-0  m-2 p-1 text-black font-semibold text-[20px] bg-slate-400 rounded-md"
              onClick={handlePrevClick}
            >
              Prev
            </button>
            <button
              className="hidden lg:block absolute right-0 bottom-0  m-2 p-1 text-black font-medium text-[20px] bg-slate-400  rounded-md"
              onClick={handleNextClick}
            >
              Next
            </button>

          </div>
            
            <div className="bottom-0 p-2 bg-gray-900 flex w-[100%]">
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
  )
}

export default CaroselSlider