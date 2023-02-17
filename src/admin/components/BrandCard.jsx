import React, { useEffect, useState } from 'react'
import { getStorage, getDownloadURL, ref,deleteObject } from "firebase/storage";
import { getFirestore,doc, deleteDoc } from "firebase/firestore";
import { app } from '../../Firebase/Firebaseapp';


const fireStorage = getStorage(app);
const fireStoreDb = getFirestore(app);

const BrandCard = ({x,index,categoryId,reRender}) => {


    const [imageurl, setImageUrl] = useState()

    const getBrandImg = (path) => {
        return getDownloadURL(ref(fireStorage, path))
      }
      useEffect(() => {
        getBrandImg(x.BrandLogo).then((url) => setImageUrl(url))
    
        console.log("I am Show Brand logo")
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [reRender])

      const desertRef = ref(fireStorage, x.BrandLogo);


      const deleteBrand=async(id)=>{
        await deleteDoc(doc(fireStoreDb, "Brands",id));

        deleteObject(desertRef).then(() => {
          console.log('File deleted successfully')
        }).catch((error) => {
          console.log('Uh-oh, an error occurred!')
        });

      }

  return (
    <div className="p-2 whitespace-nowrap " key={index}>
    <div className="flex items-center justify-between flex-row">
        <div className="flex items-center justify-start flex-row gap-4">
            <div className="font-medium text-gray-800">{index + 1}.</div>
            <div className="flex items-center justify-evenly flex-row mr-10 w-10 h-10 flex-shrink-0  sm:mr-3"><img className="rounded" src={imageurl} width="40" height="40" alt="logo" />
            </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[40px] w-[150px] rounded-full">
            {x.Brand}
        </button>
        <button onClick={()=>deleteBrand(categoryId)} className="bg-transparent hover:bg-red-500 text-red-300 font-semibold hover:text-white py-1 px-3 border border-red-500 hover:border-transparent rounded-full ">
            X
        </button>
    </div>
</div>
  )
}

export default BrandCard