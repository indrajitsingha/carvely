import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {singinUser} from '../../Redux/Slice/AuthSlice'
import { getAuth,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { app } from '../../Firebase/Firebaseapp'


const auth =getAuth(app)
const provider = new GoogleAuthProvider();

const AdminLogin = () => {
    const Navigate=useNavigate()
    const [input, setinput] = useState({email:"",password:""})
    const {userEmail}=useSelector((state)=>state.FirebaseAuth)
    const dispatch =useDispatch()


    const handleChange=(e)=>{
        setinput((oldvalue)=>{
            return{
                ...oldvalue,[e.target.name]:e.target.value
            }
        })
    }

    console.log(userEmail)

    const login=(e)=>{
        e.preventDefault()

        signInWithEmailAndPassword(auth,input.email,input.password).then(()=>{
            Navigate('/admin')
        }).then((err)=>
        console.log(err))
        dispatch(singinUser(input))
    }

    const googleSignIN=()=>{
        signInWithPopup(auth, provider)
    }


    



  return (
    <div>
<div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-[90vh]">
            <div className="hidden bg-cover lg:block lg:w-2/3 login" >
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 className="text-4xl font-bold text-white">Admin Login</h2>
                        
                        <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Admin Login</h2>
                        
                        <p className="mt-3 text-gray-500 dark:text-gray-300">Carvely Sign in to access your account</p>
                    </div>
                    <form >

                    <div className="mt-8">
                   
                            <div>
                                <label for="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input type="email" name="email" value={input.email} onChange={handleChange} id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label for="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a href="#none" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>

                                <input type="password" name="password" value={input.password} onChange={handleChange} id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                            </div>

                            <div className="mt-6">
                                <button onClick={login}
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                                <button className="flex flex-wrap justify-center w-full border bg-white mt-2 border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md" onClick={googleSignIN}>
                                      <img className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt=''/>
                                      Sign in with Google
                                </button>
                              
                                
                            </div>

                            

                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    
    
    </div>
  )
}

export default AdminLogin