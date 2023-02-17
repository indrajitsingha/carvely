import React, { useEffect, useState } from 'react'
import { getFirestore, addDoc, collection, getDocs} from "firebase/firestore";
import { getStorage, uploadBytes, ref } from "firebase/storage";
import { app } from '../../Firebase/Firebaseapp';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import CategoryCard from '../components/CategoryCard';


const fireStoreDb = getFirestore(app);
const fireStorage = getStorage(app);


const AddCategory = () => {
    const { user } = useSelector((state) => state.FirebaseAuth)
    const [input, setInput] = useState("")
    const [BrandLogo, setLogo] = useState("")
    const [Category, setCategory] = useState("")
    const [reRender, setRender] = useState(false)


    const GetCategory = () => {
        return getDocs(collection(fireStoreDb, 'Category'));
    }

    const SubmitData = () => {
        RegisterBrand(input,BrandLogo)
        console.log(input)
        setRender(!reRender)
        setInput("")
        setLogo("")
    }

    const RegisterBrand = async (input,BrandLogo) => {

        const imageRef = ref(fireStorage, `uploads/CategoryLogo/${uuidv4()}-${BrandLogo.name}`)
        const uploadImg = await uploadBytes(imageRef, BrandLogo);

        await addDoc(collection(fireStoreDb, 'Category'), {
            id: uuidv4(),
            Category: input,
            CategoryLogo: uploadImg.ref.fullPath,
            SuperAdmin: user,
        })
    }

    useEffect(() => {
        GetCategory().then((brands) => setCategory(brands.docs));

        console.log("I am AddCategory")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reRender])


    const refresh = () => {
        setRender(!reRender)
        console.log(reRender)
    }

    return (
        <div className='w-[100%] h-auto flex justify-center items-center flex-col lg:flex-row mb-11 mt-11'>
            <div className=" h-auto lg:min-h-screen  py-6 flex flex-col justify-center sm:py-12  w-[90%] lg:w-[50%] m-11 lg:m-0">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-red-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Add New Category </h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input autoComplete="off" id="email" name="email" type="text" value={input} onChange={(e) => setInput(e.target.value)} className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Add Brands </label>
                                    </div>

                                    <div>
                                        <label className="block text-xl font-medium text-black">
                                            Brand Logo
                                        </label>
                                        <div className="mt-1 flex justify-center pt-4 px-2 pr-6 border-2 border-gray-300 border-dashed rounded-md flex-col w-[100%] lg:w-[100%]">
                                                <div className="space-y-1 text-center">                                               
                                                            <input className="form-control" type="file" name='img' onChange={(e) => { setLogo(e.target.files[0]) }} required />
                                                </div>

                                           
                                            <p className="text-xs text-black flex justify-center items-center mt-2">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>

                                    </div>

                                    <div className="relative">
                                        <button className="bg-blue-500 text-white rounded-md px-2 py-1" type='submit' onClick={SubmitData}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="antialiased  text-gray-600 h-auto lg:h-screen w-[100%] lg:w-[50%] " >
                <div className="flex flex-col justify-center h-full">

                    <div className="lg:w-[500px] max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <div className='flex justify-between items-center'>
                                <h2 className="text-[25px] text-gray-800 bg-gradient-to-r from-red-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">Category List</h2>
                                <button className="bg-red-400 py-1 px-4" onClick={refresh}> <i className="fa-solid fa-rotate-right ml-2"></i> Refresh</button>
                            </div>
                        </header>

                        <div className="p-3">

                            <div className='flex justify-evenly items-center flex-row border-b-2 border-teal-200 bg-gradient-to-r from-green-400 to-blue-500 p-2'>

                                <div>
                                    <h1 className='text-xl font-medium'>Id</h1>
                                </div>
                                <div>
                                    <h1 className='text-xl font-medium'>Category Name</h1>
                                </div>
                                <div>
                                    <h1 className='text-xl font-medium'>Action</h1>
                                </div>


                            </div>

                            <div className="overflow-x-auto min-h-[100px] w-[100%] lg:w-[450px]  pl-10">
                                <div>
                                    {
                                        Category && Category.map((x, index) => {
                                            return (

                                               <CategoryCard x={x.data()} index={index} categoryId={x.id} reRender={reRender} key={index}/>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AddCategory