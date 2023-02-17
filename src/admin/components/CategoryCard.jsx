import React, { useEffect, useState } from 'react'
import { getStorage, getDownloadURL, ref,deleteObject } from "firebase/storage";
import { getFirestore,doc, deleteDoc } from "firebase/firestore";
import { app } from '../../Firebase/Firebaseapp';


const fireStorage = getStorage(app);
const fireStoreDb = getFirestore(app);

const CategoryCard = ({x,index,categoryId,reRender}) => {


    
    const [imageurl, setImageUrl] = useState()

    const getCategoryImg = (path) => {
        return getDownloadURL(ref(fireStorage, path))
      }
      useEffect(() => {
        getCategoryImg(x.CategoryLogo).then((url) => setImageUrl(url))
    
        console.log("I am Show Brand logo")
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [reRender])

      const desertRef = ref(fireStorage, x.CategoryLogo);

      
      const deleteBrand=async(id)=>{
        await deleteDoc(doc(fireStoreDb, "Category",id));

        deleteObject(desertRef).then(() => {
          console.log('File deleted successfully')
        }).catch((error) => {
          console.log('Uh-oh, an error occurred!' + error)
        });

      }

  return (
    <div className="py-2 whitespace-nowrap" key={index}>
    <div className="flex items-center justify-between flex-row">
        <div className="flex items-center justify-start flex-row gap-4">
            <div className="font-medium text-gray-800">{index + 1}.</div>
            <div className="flex items-center justify-evenly flex-row mr-10 w-10 h-10 flex-shrink-0  sm:mr-3"><img className="rounded" src={imageurl} width="40" height="40" alt="logo" />
            </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[40px] w-[100px] lg:w-[150px] mr-10 lg:mr--2 rounded-full">
            {x.Category}
        </button>
        <button onClick={()=>deleteBrand(categoryId)} className="bg-transparent hover:bg-red-500 text-red-300 font-semibold hover:text-white py-1 px-3 mr-10 border border-red-500 hover:border-transparent rounded-full">
            X
        </button>
    </div>
</div>
  )
}

export default CategoryCard