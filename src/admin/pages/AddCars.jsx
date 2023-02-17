import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { app } from '../../Firebase/Firebaseapp';
import { getStorage, uploadBytes, ref } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';



const fireStoreDb = getFirestore(app);
const fireStorage = getStorage(app);

const AddCars = () => {

  const { user } = useSelector((state) => state.FirebaseAuth)
  const [Brand, setBrands] = useState("")
  const [category,setCategory]=useState("")

  const [carInfo, setCarInfo] = useState({
    id: uuidv4(),
    Name: "",
    Description: "",
    DrivingRange: "",
    Power: "",
    Transmission: "",
    BatteryCapacity: "",
    MaxPower: "",
    MaxTorque: "",
    SeatingCapacity: "",
    BodyType: "",
    Price: "",
    Brand: "",
  })

  const [carImage, setCarImg] = useState("")
  const [carImageTwo, setCarImgTwo] = useState("")
  const [carImageThree, setCarImgThree] = useState("")
  const [isModel, setModel] = useState(false)

  const handelChange = (e) => {
    const { name, value } = e.target
    setCarInfo((oldValue) => {
      return {
        ...oldValue, [name]: value
      }
    })

  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    RegisterNewBook(carInfo, carImage, carImageTwo, carImageThree)
    setModel(true)
  }


  const RegisterNewBook = async (carInfo, carImage, carImageTwo, carImageThree) => {

    const imageRef = ref(fireStorage, `uploads/CarsImages/${carInfo.id}-${carImage.name}`)
    const imageRefTwo = ref(fireStorage, `uploads/CarsImages/${carInfo.id}-${carImageTwo.name}`)
    const imageRefThree = ref(fireStorage, `uploads/CarsImages/${carInfo.id}-${carImageThree.name}`)
    const uploadImg = await uploadBytes(imageRef, carImage);
    const uploadImgTwo = await uploadBytes(imageRefTwo, carImageTwo);
    const uploadImgThree = await uploadBytes(imageRefThree, carImageThree);

    await addDoc(collection(fireStoreDb, 'CarInfo'), {
      id:carInfo.id,
      Name: carInfo.Name,
      carImage: uploadImg.ref.fullPath,
      carImageTwo: uploadImgTwo.ref.fullPath,
      carImageThree: uploadImgThree.ref.fullPath,
      Description: carInfo.Description,
      DrivingRange: carInfo.DrivingRange,
      Power: carInfo.Power,
      Transmission: carInfo.Transmission,
      BatteryCapacity: carInfo.BatteryCapacity,
      MaxPower: carInfo.MaxPower,
      MaxTorque: carInfo.MaxTorque,
      SeatingCapacity: carInfo.SeatingCapacity,
      BodyType: carInfo.BodyType,
      Price: carInfo.Price,
      Brand: carInfo.Brand,
      AdminEmail: user,
    })
  }

  const  GetBrands= () => {
    return getDocs(collection(fireStoreDb, 'Brands'));
  }

  const GetCategory = () => {
    return getDocs(collection(fireStoreDb, 'Category'));
}


  useEffect(() => {
    GetBrands().then((brand) => setBrands(brand.docs));
    GetCategory().then((category) => setCategory(category.docs));

    console.log("I am AddCars")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])





  return (
    <div className='w-[100%]'>
      <div className='flex justify-center items-center w-[100%] py-10 sm:p-10  Addcarsback'>
        <section className="w-[95%] sm:w-[80%] p-10 mx-auto backdrop-blur-sm bg-black/50">
          <h1 className="text-xl font-bold text-white capitalize dark:text-white text-center">Add New Car</h1>
          <form onSubmit={onFormSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-white dark:text-gray-200">car Name</label>
                <input id="username" type="text"
                  placeholder="Car Name..."
                  name="Name"
                  value={carInfo.Name}
                  onChange={handelChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
              </div>

              <div>
                <label className="text-white dark:text-gray-200" >Driving Range</label>
                <input id="emailAddress"
                  placeholder="Driving Range"
                  type="text"
                  name="DrivingRange"
                  value={carInfo.DrivingRange}
                  onChange={handelChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
              </div>

              <div>
                <label className="text-white dark:text-gray-200">Power</label>
                <input
                  placeholder="Power"
                  type="text"
                  id="email"
                  name="Power"
                  value={carInfo.Power}
                  onChange={handelChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
              </div>

              <div>
                <label className="text-white dark:text-gray-200" >Transmission</label>
                <input
                  placeholder="Transmission"
                  type="text"
                  id="phone"
                  name="Transmission"
                  value={carInfo.Transmission}
                  onChange={handelChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
              </div>
              <div>
                <label className="text-white dark:text-gray-200" >Battery Capacity</label>
                <input
                  placeholder="Battery Capacity"
                  type="number"
                  id="email"
                  name="BatteryCapacity"
                  value={carInfo.BatteryCapacity}
                  onChange={handelChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
              </div>
              <div>
                <label className="text-white dark:text-gray-200">Seating Capacity</label>
                <input
                  placeholder="Seating Capacity"
                  type="Text"
                  id="phone"
                  name="SeatingCapacity"
                  value={carInfo.SeatingCapacity}
                  onChange={handelChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />

              </div>
              <div>
                <label className="text-white dark:text-gray-200">Max-Power</label>
                <input
                  placeholder="Max-Power"
                  type="text"
                  id="phone"
                  name="MaxPower"
                  value={carInfo.MaxPower}
                  onChange={handelChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
              </div>
              <div>
                <label className="text-white dark:text-gray-200">Max-Torque</label>
                <input
                  placeholder="Max-Torque"
                  type="text"
                  id="email"
                  name="MaxTorque"
                  value={carInfo.MaxTorque}
                  onChange={handelChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required />
              </div>

              <div>
                <label className="text-white dark:text-gray-200" >Category</label>
                
                <select name="BodyType" className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' value={carInfo.BodyType} onChange={handelChange}>
                  <option disabled defaultValue>Select Category</option>
                  <option value="Kia" >Select Category</option>
                  {
                    category && category.map((x, index) => {
                      return (
                        <option value={x.data().Category} className=" bg-blue-900 hover:bg-blue-900" key={index} >{x.data().Category}</option>
                      )
                    })
                  }

                </select>
              </div>

              <div>
                <label className="text-white dark:text-gray-200">Brand</label>

                <select name="Brand" className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' value={carInfo.Brand} onChange={handelChange}>
                  <option disabled defaultValue>Select Brand</option>
                  <option value="Kia" >Select Brand</option>
                  {
                    Brand && Brand.map((x, index) => {
                      return (
                        <option value={x.data().Brand} className=" bg-blue-900 hover:bg-blue-900" key={index} >{x.data().Brand}</option>
                      )
                    })
                  }

                </select>
              </div>


              <div>
                <label className="text-white dark:text-gray-200">Car Description</label>
                <textarea
                  placeholder="Car Description..."
                  type="textarea"
                  id="email"
                  name="Description"
                  value={carInfo.Description}
                  onChange={handelChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
              </div>
              <div>
                <label className="text-white dark:text-gray-200">Price</label>
                <input
                  placeholder="Car Price..."
                  type="text"
                  id="email"
                  name="Price"
                  value={carInfo.Price}
                  onChange={handelChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-white">
                  Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md flex-col w-[100%] lg:w-[200%]">
                  <div className='flex justify-center items-center flex-col lg:flex-row'>
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" required />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="cursor-pointer ml-6 bg-teal-300 p-1 font-medium text-black hover:text-white hover:bg-red-500 focus-within:outline-none">
                          <span className="">Upload Img 1</span>
                          <input className="form-control" type="file" name='img' onChange={(e) => { setCarImg(e.target.files[0]) }} required />
                        </label>
                      </div>
                    </div>
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" required />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="cursor-pointer ml-6 bg-teal-300 p-1 font-medium text-black hover:text-white hover:bg-red-500 focus-within:outline-none">
                          <span className="">Upload Img 2</span>
                          <input className="form-control" type="file" name='img' onChange={(e) => { setCarImgTwo(e.target.files[0]) }} required />
                        </label>
                      </div>
                    </div>
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" required />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="cursor-pointer ml-6 bg-teal-300 p-1 font-medium text-black hover:text-white hover:bg-red-500 focus-within:outline-none">
                          <span className="">Upload Img 3</span>
                          <input className="form-control" type="file" name='img' onChange={(e) => { setCarImgThree(e.target.files[0]) }} required />
                        </label>
                      </div>
                    </div>

                  </div>
                  <p className="text-xs text-white flex justify-center items-center mt-2">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>

              </div>
            </div>

            <div className="flex justify-end mt-6 mb-2">
              <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
            {isModel ?
              <section className=' flex justify-center items-center bg-yellow-200 p-2 rounded-full'>
                <div className='alttext'>
                  <span className='text-20px  px-4'>THis Car Data Has been Added</span>
                  <span className='altButton bg-red-500  px-4 text-white rounded-full py-1 cursor-pointer' onClick={() => setModel(false)}>Close</span>
                </div>
              </section>
              : ''}
          </form>
        </section>
      </div>
    </div>
  )
}

export default AddCars