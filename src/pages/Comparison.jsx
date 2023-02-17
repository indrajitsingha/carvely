import React from 'react'
import { useSelector } from 'react-redux'
import CaroselSlider from '../components/CaroselSlider'
import ComparisionHeader from '../components/ComparisionHeader'
import { v4 } from 'uuid'
import Spineer from '../components/Spineer'
import { STATUS } from '../Redux/Slice/DataSlice'

const Comparison = () => {


    const { firstCompCar, secondCompCar,status } = useSelector((state) => state.CarData)


    if (status === STATUS.LOADING) return <Spineer/>


    return (

        <div className='w-[100%]'>

            <ComparisionHeader />

            {firstCompCar && firstCompCar ?
                <div className='flex w-[100%] justify-around bg-gray-900 lg:h-[65vh]' id='#comparisionSection'>

                    <CaroselSlider compCar={firstCompCar} key={v4()} />

                    <CaroselSlider compCar={secondCompCar} key={v4()} />

                </div> : ""}


            {firstCompCar && firstCompCar ?

                <div class="w-[100%]  flex justify-center items-center flex-row comparisionBackground ">

                    <div className='flex justify-start items-center dark:text-white w-[70%] h-auto flex-col '>

                        <div className='flex justify-evemly items-center bg-gray-900 dark:border-gray-700 dark:text-white w-[100%] h-[10vh]'>
                            <div className='flex justify-around items-center w-[100%]'>
                                <h1 className='flex justify-around items-center text-[15px] lg:text-[20px] text-orange-400 font-bold'>Features</h1>

                                <h1 className='flex  justify-around items-center text-[15px] lg:text-[20px] text-cyan-300 font-bold'>{firstCompCar && firstCompCar[0].Name}</h1>
                            </div>

                        </div>
                        {
                            firstCompCar && firstCompCar.map((x, index) => {
                                if (index < 1) {
                                    return (
                                        <div key={index + 4000} className='w-[100%] flex justify-center items-center flex-row px-0 lg:px-10'>

                                            <div className='flex justify-center items-center flex-col w-[100%]'>

                                                <div className='flex justify-center items-center w-[100%] cssBroder'>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-gray-200  font-bold'>Price</h1>
                                                    </div>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold'>{x.Price}</h1>
                                                    </div>
                                                </div>

                                                <div className='flex justify-center items-center w-[100%] cssBroder'>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-gray-200  font-bold'>Battery Capacity</h1>
                                                    </div>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold'>{x.BatteryCapacity}</h1>
                                                    </div>
                                                </div>


                                                <div className='flex justify-center items-center w-[100%] cssBroder'>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-gray-200  font-bold'>Driving Range</h1>
                                                    </div>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold'>{x.DrivingRange}</h1>
                                                    </div>
                                                </div>

                                                <div className='flex justify-center items-center w-[100%] cssBroder'>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-gray-200  font-bold'>Body Type</h1>
                                                    </div>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold'>{x.BodyType}</h1>
                                                    </div>
                                                </div>

                                                <div className='flex justify-center items-center w-[100%] cssBroder'>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-gray-200  font-bold'>Max Power</h1>
                                                    </div>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold'>{x.MaxPower}</h1>
                                                    </div>
                                                </div>

                                                <div className='flex justify-center items-center w-[100%] cssBroder'>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-gray-200  font-bold'>Seating Capacity</h1>
                                                    </div>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold'>{x.SeatingCapacity}</h1>
                                                    </div>
                                                </div>

                                                <div className='flex justify-center items-center w-[100%] cssBroder'>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-gray-200  font-bold'>Max Torque</h1>
                                                    </div>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold'>{x.MaxTorque}</h1>
                                                    </div>
                                                </div>


                                                <div className='flex justify-center items-center w-[100%] cssBroder'>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-gray-200  font-bold'>Transmission</h1>
                                                    </div>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold'>{x.Transmission}</h1>
                                                    </div>
                                                </div>

                                                <div className='flex justify-center items-center w-[100%] cssBroder'>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-gray-200  font-bold'>Power</h1>
                                                    </div>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold'>{x.Power}</h1>
                                                    </div>
                                                </div>

                                                <div className='flex justify-center items-center w-[100%] cssBroder'>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-gray-200  font-bold'>Brand</h1>
                                                    </div>

                                                    <div className='flex justify-center items-center  w-[50%]'>
                                                        <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold'>{x.Brand}</h1>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    )
                                }
                                return index
                            })
                        }
                    </div>


                    <div className='flex justify-start items-center dark:text-white h-auto w-[30%] flex-col'>


                        <div className='flex justify-between items-center bg-gray-900 dark:border-gray-700 dark:text-white w-[100%] h-[10vh]'>
                            <div className='flex justify-around items-center w-[100%]'>
                                <h1 className='flex justify-around items-center text-[15px] lg:text-[20px] text-green-500 font-semibold'>{secondCompCar && secondCompCar[0].Name}</h1>

                            </div>

                        </div>
                        {

                            secondCompCar && secondCompCar.map((x, index) => {
                                if (index < 1) {

                                    return (
                                        <div className='flex justify-around items-center w-[100%] flex-col'>
                                            <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold cssBroder w-[100%]'>{x.Price}</h1>
                                            <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold cssBroder w-[100%]'>{x.BatteryCapacity}</h1>
                                            <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold cssBroder w-[100%]'>{x.DrivingRange}</h1>
                                            <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold cssBroder w-[100%]'>{x.BodyType}</h1>
                                            <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold cssBroder w-[100%]'>{x.MaxPower}</h1>
                                            <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold cssBroder w-[100%]'>{x.SeatingCapacity}</h1>
                                            <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold cssBroder w-[100%]'>{x.MaxTorque}</h1>
                                            <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold cssBroder w-[100%]'>{x.Transmission}</h1>
                                            <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold cssBroder w-[100%]'>{x.Power}</h1>
                                            <h1 className='flex justify-around items-center text-[12px] lg:text-[20px] text-yellow-200 font-semibold cssBroder w-[100%]'>{x.Brand}</h1>
                                        </div>
                                    )
                                }
                                return index

                            })

                        }
                    </div>

                </div> : ""}

        </div>

    )
}

export default Comparison