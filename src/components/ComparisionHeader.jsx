import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getFisrtCompCar, getSecondCompCar } from '../Redux/Slice/DataSlice';


const ComparisionHeader = () => {

    const { Cardetails } = useSelector((state) => state.CarData)


    const [firstQuery, setQueryFirst] = useState()
    const [secondQuery, setQuerySecond] = useState()
    const dispatch = useDispatch()

    const handelSubmit = () => {
        dispatch(getFisrtCompCar(firstQuery))
        dispatch(getSecondCompCar(secondQuery))
        
    }


    return (
        <section className="bg-gray-900 text-white">
            <div
                className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
                <div className="mx-auto max-w-3xl text-center">

                    <div className='flex justify-center items-center mb-10 flex-col'>
                        <h1
                            className="tracking-widest bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                        >
                            Compare Your Dream Cars
                        </h1>
                        <h2 className="font-extrabold text-green-500 sm:block mt-10 text-3xl "> Choose What's Fit's you </h2>

                    </div>
                    <div className='flex flex-col lg:flex-row'>
                        <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0 w-[97%] ">
                            <div className='w-[100%]'>
                                <input id="email" name='carName' list="Cars" type="search" className="rounded-md border border-transparent bg-white/20 px-4 lg:px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2 w-[100%] lg:w-[90%]" placeholder="Search Cardetails" value={firstQuery} onChange={(e) => setQueryFirst(e.target.value)} />

                                <datalist id="Cars">
                                    {Cardetails && Cardetails.map((x) => {
                                        return (
                                            <option value={x.Name}>{x.Name}</option>
                                        )
                                    })

                                    }
                                </datalist>
                            </div>
                        </div>


                        <div className='w-[300px] flex justify-center items-center text-center flex-col '>

                            <img src="https://www.freeiconspng.com/uploads/king-head-gaming-logo-png-27.png " className='hidden lg:block ' alt="" width='500' />
                            <span className='text-[30px] flex justify-center items-center text-center text-red-300 drop-shadow-lg '>vs</span>
                        </div>



                        <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0 w-[97%] ">
                            <div className='w-[100%]'>
                                <input id="email" name='carName' list="Cars" type="search" className="rounded-md border border-transparent bg-white/20 px-4 lg:px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2 w-[100%] lg:w-[90%]" placeholder="Search Cardetails" value={secondQuery} onChange={(e) => setQuerySecond(e.target.value)} />

                                <datalist id="Cars">
                                    {Cardetails && Cardetails.map((x) => {
                                        return (
                                            <option value={x.Name}>{x.Name}</option>
                                        )
                                    })

                                    }
                                </datalist>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">

                        <button
                            className="block w-[80%] rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            onClick={handelSubmit}
                        >
                        <a href='#comparisionSection'>let's Go</a>
                            
                        </button>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ComparisionHeader