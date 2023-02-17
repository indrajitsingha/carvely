import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CalculatorCard from '../components/CalculatorCard'
import Spineer from '../components/Spineer'
import { STATUS } from '../Redux/Slice/DataSlice'


const Emicalculator = () => {

    const {status } = useSelector((state) => state.CarData)


    const [loan, setLoanData] = useState(500000)
    const [InterestData, setInterestData] = useState(66137)
    const [Payment, setPayment] = useState(0)


    
  if (status === STATUS.LOADING) return <Spineer/>


    return (
        <div className='min-h-screen w-[100%] h-[100%] flex justify-center items-center flex-col p-2 lg:p-10'>

            <div className='mt-3 lg:mb-3'>
                <h1 className='bg-gradient-to-r from-red-400 via-black to-purple-600 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-5xl'>
                    EMI Calculator for  Car Loan  in India
                </h1>
            </div>

            <CalculatorCard setLoanData={setLoanData} setInterestData={setInterestData} setPayment={setPayment} InterestData={InterestData} />



            <div className="flex justify-center lg:justify-evenly items-center w-[100%] lg:mt-10 flex-col lg:flex-row mb-10 lg:border  gap-10">

                <div className='w-[100%] h-[33%]  flex justify-center items-center flex-col border  '>
                    <h1 className='text-[20px] lg:text-[30px] font-normal'>
                        Loan EMI
                    </h1>
                    <h2 className='text-[25px] lg:text-[35px] font-semibold'>
                        ₹{loan.toFixed(0)}
                    </h2>
                </div>


                <div className='w-[100%] h-[33%]  flex justify-center items-center flex-col border '>
                    <h1 className='text-[20px] lg:text-[30px] font-normal text-center'>
                        Total Interest Payable
                    </h1>
                    <h2 className='text-[25px] lg:text-[35px] font-semibold'>
                        ₹{(InterestData)}
                    </h2>
                </div>


                <div className='w-[100%] h-[33%]  flex justify-center items-center flex-col border '>
                    <h1 className='text-[20px] lg:text-[30px] font-normal text-center'>
                        Total Payment<br/>
                        (Principal + Interest)
                    </h1>
                    <h2 className='text-[25px] lg:text-[35px]  font-semibold'>
                        ₹{Payment}
                    </h2>
                </div>




            </div>


        </div>
    )
}

export default Emicalculator