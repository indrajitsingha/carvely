import React, { useEffect, useState } from "react";
import { app } from "../../Firebase/Firebaseapp";
import { doc, getFirestore, updateDoc,getDocs,collection } from "firebase/firestore";
import { useSelector,useDispatch } from "react-redux";
import { updateRef } from "../../Redux/Slice/AuthSlice";



const Firestore = getFirestore(app);

const UpdateForm = ({ carsId, modal, x }) => {
    const { user } = useSelector((state) => state.FirebaseAuth)
    const [updateCarInfo, setCarInfo] = useState({});
    const [Brand, setBrands] = useState("")
    const dispatch=useDispatch()


    //   const [carImage, setCarImg] = useState("");

    useEffect(() => {
        console.log("I am updateForm")
        setCarInfo(x)
    }, [carsId, x]);

    const updateCarData = async () => {
        const userRef = doc(Firestore, "CarInfo", carsId);
        await updateDoc(userRef, {
            Name: updateCarInfo.Name,
            Description: updateCarInfo.Description,
            DrivingRange: updateCarInfo.DrivingRange,
            Power: updateCarInfo.Power,
            Transmission: updateCarInfo.Transmission,
            BatteryCapacity: updateCarInfo.BatteryCapacity,
            MaxPower: updateCarInfo.MaxPower,
            MaxTorque: updateCarInfo.MaxTorque,
            SeatingCapacity: updateCarInfo.SeatingCapacity,
            BodyType: updateCarInfo.BodyType,
            Price: updateCarInfo.Price,
            AdminEmail: user,
        });
    };

    const handelChange = (e) => {
        const { name, value } = e.target;
        setCarInfo((oldValue) => {
            return {
                ...oldValue,
                [name]: value,
            };
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        updateCarData();
        modal(false);
        dispatch(updateRef())
    };


    const modelClose=()=>{
        modal(false);
    }

    const BrandsData = () => {
        return getDocs(collection(Firestore, 'Brands'));
      }
    
    
      useEffect(() => {
        BrandsData().then((brands) => setBrands(brands.docs));
    
        console.log("I am Addbrand")
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    
    return (
        <div>
            <section className="w-[95%] sm:w-[100%] p-10 mx-auto backdrop-blur-sm bg-black/50 absolute top-0">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white text-center">
                    Add New Car
                </h1>
                <form onSubmit={onFormSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200">car Name</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Car Name..."
                                name="Name"
                                value={updateCarInfo.Name||""}
                                onChange={handelChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">
                                Driving Range
                            </label>
                            <input
                                id="emailAddress"
                                placeholder="Driving Range"
                                type="text"
                                name="DrivingRange"
                                value={updateCarInfo.DrivingRange ||""}
                                onChange={handelChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Power</label>
                            <input
                                placeholder="Power"
                                type="text"
                                id="email"
                                name="Power"
                                value={updateCarInfo.Power ||""}
                                onChange={handelChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">
                                Transmission
                            </label>
                            <input
                                placeholder="Transmission"
                                type="text"
                                id="phone"
                                name="Transmission"
                                value={updateCarInfo.Transmission ||""}
                                onChange={handelChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200">
                                Battery Capacity
                            </label>
                            <input
                                placeholder="Battery Capacity"
                                type="number"
                                id="email"
                                name="BatteryCapacity"
                                value={updateCarInfo.BatteryCapacity ||""}
                                onChange={handelChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200">
                                Seating Capacity
                            </label>
                            <input
                                placeholder="Seating Capacity"
                                type="Text"
                                id="phone"
                                name="SeatingCapacity"
                                value={updateCarInfo.SeatingCapacity ||""}
                                onChange={handelChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200">Max-Power</label>
                            <input
                                placeholder="Max-Power"
                                type="text"
                                id="phone"
                                name="MaxPower"
                                value={updateCarInfo.MaxPower ||""}
                                onChange={handelChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200">
                                Max-Torque
                            </label>
                            <input
                                placeholder="Max-Torque"
                                type="text"
                                id="email"
                                name="MaxTorque"
                                value={updateCarInfo.MaxTorque ||""}
                                onChange={handelChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Body Type</label>
                            <input
                                placeholder="Body Type"
                                type="text"
                                id="phone"
                                name="BodyType"
                                value={updateCarInfo.BodyType ||""}
                                onChange={handelChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">Price</label>
                            <input
                                placeholder="Price"
                                type="text"
                                id="phone"
                                name="Price"
                                value={updateCarInfo.Price ||""}
                                onChange={handelChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200">
                                Car Description
                            </label>
                            <textarea
                                placeholder="Car Description..."
                                type="textarea"
                                id="email"
                                name="Description"
                                value={updateCarInfo.Description ||""}
                                onChange={handelChange}
                                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            ></textarea>
                        </div>
                        <div>
                <label className="text-white dark:text-gray-200">Brand</label>

                <select name="Brand" className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' value={updateCarInfo.Brand||""} onChange={handelChange}>
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
                        {/* <div>
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      required
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label className="cursor-pointer ml-6 bg-yellow-300 p-1 font-medium text-black hover:text-white hover:bg-red-500 focus-within:outline-none">
                      <span className="">Upload a file</span>
                      <input
                        className="sr-only"
                        type="file"
                        name="img"
                        onChange={(e) => {
                          setCarImg(e.target.files[0]);
                        }}
                        required
                      />
                    </label>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div> */}
                    </div>

                    <div className="flex justify-center mt-6 mb-2 gap-5">
                        <button
                            type="submit"
                            className="w-[300px] h-[40px] leading-5 text-black transition-colors duration-200 transform bg-yellow-300 rounded-md hover:bg-yellow-500 focus:outline-none focus:bg-gray-600"
                        >
                            Update
                        </button>
                        <button
                            type="submit"
                            className="w-[300px] h-[40px] leading-5 text-black transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:bg-gray-600"
                            onClick={modelClose}
                        >
                            Cancel
                        </button>
                    </div>

                   
                </form>
            </section>
        </div>
    );
};

export default UpdateForm;
