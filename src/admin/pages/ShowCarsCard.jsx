import React, { useState, useEffect } from 'react'
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { app } from '../../Firebase/Firebaseapp';
import { getFirestore, deleteDoc, doc } from "firebase/firestore";
import UpdateForm from "../components/UpdateForm";
import { updateRef } from '../../Redux/Slice/AuthSlice';
import { useDispatch } from 'react-redux';



const fireStoreDb = getFirestore(app);
const fireStorage = getStorage(app);


const ShowCarsCard = ({ x, carsId, index }) => {
  const [updateModal, setupdateModal] = useState(false);
  const dispatch=useDispatch()

  const [imageurl, setImageUrl] = useState()

  const getCarImg = (path) => {
    return getDownloadURL(ref(fireStorage, path))
  }
  useEffect(() => {
    getCarImg(x.carImage).then((url) => setImageUrl(url))

    console.log("I am Show Cars Card")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteData = async (carsId) => {
    await deleteDoc(doc(fireStoreDb, "CarInfo", carsId));
    dispatch(updateRef())
  }

  const UpdateData = async (carsId) => {
    setupdateModal(true);
  };

  return (
    <>
      <tr key={index}>
        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
          <img
            src={imageurl}
            className="h-[50px] w-[100px] bg-white"
            alt="..."
          />
          <span className="ml-3 font-bold text-white">
            {" "}
            {x.Name}{" "}
          </span>
        </th>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {x.DrivingRange}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <i className="fas fa-circle text-orange-500 mr-2"></i>{x.Brand}
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <h1>₹ {x.Price}</h1>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Active
            </button>
        </td>
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right ">
          <li className=" h-[102px] md:h-[50px] w-[33%] md:w-[100%] flex justify-center items-center flex-col md:flex-row">
            <button className="h-[50px] min-w-[50%] text-pink-600  text-[25px] md:pl-2" onClick={() => UpdateData(carsId)}>
              <i className="fa-regular fa-pen-to-square text-green-500"></i>
            </button>
            <button className="h-[50px] min-w-[50%] text-red-600 text-[25px] md:pl-2" onClick={() => deleteData(carsId)}>
              <i className="fa-solid fa-trash text-yellow-500"></i>
            </button>
          </li>
        </td>
      </tr>



      {updateModal === true ? (
        <UpdateForm carsId={carsId} x={x} modal={setupdateModal} />
      ) : (
        ""
      )}
    </>
  )
}

export default ShowCarsCard