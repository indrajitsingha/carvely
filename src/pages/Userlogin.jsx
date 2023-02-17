import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { app } from '../Firebase/Firebaseapp';



const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const Userlogin = () => {
     const Navigate = useNavigate()
    const [input, setinput] = useState({ email: "", password: "" })

    const [inputSignin, setInputSignin] = useState({
        username: "",
        passsword: "",
        cpassword: ""
    })
    const [isModel, setModel] = useState(false)

    const RegisterUser = (username, passsword) => {
        createUserWithEmailAndPassword(auth, username, passsword)
    }

    const singinUser = (username, passsword) => {
        signInWithEmailAndPassword(auth, username, passsword)
    }



    const [error, setError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setinput(() => {
            return {
                ...input, [name]: value
            }
        })
    }

    const formSubmitLogin = (e) => {
        e.preventDefault()
        console.log(input);
        singinUser(input.email, input.password)
        Navigate(-1)
       
    }

    const handelChangeIn = (e) => {
        const { name, value } = e.target
        setInputSignin((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const submitLogin = (e) => {
        e.preventDefault()
        if (inputSignin.passsword === inputSignin.cpassword) {
            RegisterUser(inputSignin.username, inputSignin.passsword)

        }
        else {
            console.log("Password Not Matched");
        }
        console.log(inputSignin);
    }


    const modelChange=()=>{
        setModel(!isModel)
    }


    const googleSignIN=()=>{
        signInWithPopup(auth, googleProvider)
    }
    


    return (
        <div className='min-h-[93vh] w-[100%]'>
            <div className="bg-white dark:bg-gray-900">
                <div className="flex justify-center h-[93vh]">
                    <div className="hidden bg-cover lg:block lg:w-2/3 loginUser" >
                        <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-4xl font-bold text-white">User Login</h2>

                                <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                            </div>
                        </div>
                    </div>
                    {
                        isModel && isModel ?


                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">User SignIn</h2>

                                <p className="mt-3 text-gray-500 dark:text-gray-300">Carvely Sign in to access your account</p>
                            </div>
                            {
                                error.length > 0 ?
                                    <div className="flex justify-center items-center h-[30px] w-[100%] bg-red-300">
                                        <h1 className="mr-6">{error}</h1>
                                        <span className='altButton bg-red-500  px-4 text-white rounded-full my-2 cursor-pointer' onClick={() => setError("")}>Close</span>
                                    </div> : ""
                            }
                            <form >


                                <div className="mt-8">

                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                        <input type="email" name="username" value={inputSignin.username} onChange={handelChangeIn} id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                            <a href="#none" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                        </div>

                                        <input type="password" name="passsword" value={inputSignin.passsword} onChange={handelChangeIn} id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                                    </div>
                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                            <a href="#none" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                        </div>

                                        <input type="password" name="cpassword" value={inputSignin.cpassword} onChange={handelChangeIn} id="password2" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                                    </div>

                                    <div className="mt-6">
                                        <button onClick={submitLogin}
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Sign in
                                        </button>

                                            <div className='flex justify-center items-center text-white'>
                                                <div>
                                                <i class="fa-solid fa-arrow-up"></i>
                                                </div>
                                                <div>
                                                <i class="fa-solid fa-arrow-down-long"></i>
                                                </div>
                                            </div>

                                        <button onClick={modelChange}
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-300 rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-600 focus:ring focus:ring-red-600 focus:ring-opacity-50">
                                            Login
                                        </button>

                                        <button onClick={()=>googleSignIN()}
                                            className="w-full mt-5  px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-600 focus:ring focus:ring-green-500 focus:ring-opacity-50">
                                            <i className="fab fa-google"></i> SignIn with Google
                                        </button>

                                    </div>



                                </div>
                            </form>
                        </div>
                    </div>
:
                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">User Login</h2>

                                <p className="mt-3 text-gray-500 dark:text-gray-300">Carvely Sign in to access your account</p>
                            </div>
                            {
                                error.length > 0 ?
                                    <div className="flex justify-center items-center h-[30px] w-[100%] bg-red-300">
                                        <h1 className="mr-6">{error}</h1>
                                        <span className='altButton bg-red-500  px-4 text-white rounded-full my-2 cursor-pointer' onClick={() => setError("")}>Close</span>
                                    </div> : ""
                            }
                            <form >


                                <div className="mt-8">

                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                        <input type="email" name="email" value={input.email} onChange={handleChange} id="email3" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                            <a href="#none" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                        </div>

                                        <input type="password" name="password" value={input.password} onChange={handleChange} id="password3" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                                    </div>

                                    <div className="mt-6 ">
                                        <button onClick={formSubmitLogin}
                                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Login
                                        </button>
                                        <div className='flex justify-center items-center text-white'>
                                                <div>
                                                <i class="fa-solid fa-arrow-up"></i>
                                                </div>
                                                <div>
                                                <i class="fa-solid fa-arrow-down-long"></i>
                                                </div>
                                            </div>
                                        <button onClick={modelChange}
                                            className="w-full  px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-300 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-600 focus:ring focus:ring-red-500 focus:ring-opacity-50">
                                            SignIn
                                        </button>

                                        <button onClick={()=>googleSignIN()}
                                            className="w-full mt-5  px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-400 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-600 focus:ring focus:ring-green-500 focus:ring-opacity-50">
                                            <i className="fab fa-google"></i> SignIn with Google
                                        </button>


                                    </div>



                                </div>
                            </form>
                        </div>
                    </div>

                    }
                </div>
            </div>



        </div>
    )
}

export default Userlogin
