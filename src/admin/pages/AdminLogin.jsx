import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {singinUser} from '../../Redux/Slice/AutSlice'

import {app} from "../../Firebase/Firebaseapp"
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";


const AdminLogin = () => {
    const Navigate=useNavigate()
    const [user, setuser] = useState({email:"",password:""})
    const authinfo=useSelector((x)=>x.FirebaseAuth)
    const dispatch =useDispatch()


    const handleChange=(e)=>{
        setuser((oldvalue)=>{
            return{
                ...oldvalue,[e.target.name]:e.target.value
            }
        })
    }


    const login=(e)=>{
        e.preventDefault()

        dispatch(singinUser(user))

        
        // Navigate('/admin')
    }



  return (
    <div>
<div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-[90vh]">
            <div class="hidden bg-cover lg:block lg:w-2/3 login" >
                <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 class="text-4xl font-bold text-white">Admin Login</h2>
                        
                        <p class="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                    </div>
                </div>
            </div>
            
            <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div class="flex-1">
                    <div class="text-center">
                        <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Admin Login</h2>
                        
                        <p class="mt-3 text-gray-500 dark:text-gray-300">Carvely Sign in to access your account</p>
                    </div>
                    <form >

                    <div class="mt-8">
                   
                            <div>
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input type="email" name="email" value={user.email} onChange={handleChange} id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                            </div>

                            <div class="mt-6">
                                <div class="flex justify-between mb-2">
                                    <label for="password" class="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a href="#" class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                </div>

                                <input type="password" name="password" value={user.password} onChange={handleChange} id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" required />
                            </div>

                            <div class="mt-6">
                                <button onClick={login}
                                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                                <button class="flex flex-wrap justify-center w-full border bg-white mt-2 border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                                      <img class="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/>
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