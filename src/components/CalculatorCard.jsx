import React from 'react'
import { useState } from 'react'
import CalculatorPie from './CalculatorPie'


const CalculatorCard = ({setLoanData,setInterestData,setPayment,InterestData}) => {

    const [homeLoan, setLoan] = useState(5000000)
    const [Interest, setInterest] = useState(9)
    const [loanYear, setLoanYear] = useState(10)

    const handelSubmit = () => {

        const p = parseFloat(homeLoan);
        const r = parseFloat(Interest) / 1200;
        const n = parseFloat(loanYear) * 12; 
        const e = Math.round(p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalenterest=Math.round(((e*12)*loanYear)-p)
        const Payment=(totalenterest+p)

        setLoan(p)
        setLoanData(e)
        setInterestData(totalenterest)
        setPayment(Payment)

        console.log(e)

    }

    return (
        <div className='flex justify-center items-center w-[100%] lg:w-[80%] flex-col lg:flex-row  h-[100%] lg:p-4 lg:h-[60vh] '>
            <div className='flex justify-center items-center w-[100%] lg:w-[60%] h-[60vh] lg:h-[60vh] flex-col'>

                <div className='flex justify-evenly items-center w-[100%] h-[30%] bg-black flex-col '>
                    <div className='flex justify-center items-center w-[100%]'>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-green-400 text-[15px] lg:text-[28px]">Home Loan Amount: <span className=' text-red-600 text-[30px]'>₹ </span></label>
                        <input type="text" id="company" value={homeLoan} onChange={(e) => setLoan(e.target.value)} className="text-[20px] font-semibold bg-gray-50 border lg:ml-10 border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] lg:w-[30%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Car Loan Amount" required />
                    </div>
                    <div className='flex justify-center items-center flex-row w-[100%]'>
                        <input className="w-[75%] bg-red-300" value={homeLoan} onChange={(e) => setLoan(e.target.value)} id="weight" type="range" min="300000" max="20000000" step="500000" name="weight" />
                    </div>
                </div>



                <div className='flex justify-evenly items-center w-[100%] h-[25%]  bg-black  flex-col '>
                    <div className='flex justify-center items-center w-[100%]'>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-green-400 text-[15px] lg:text-[28px]">Interest Rate: <span className=' text-red-600 text-[18px]'>per %</span></label>
                        <input type="text" id="company" value={Interest} onChange={(e) => setInterest(e.target.value)} className="text-[20px] font-semibold bg-gray-50 border lg:ml-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[56%] lg:w-[40%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                    </div>
                    <div className='flex justify-center items-center flex-row w-[100%]'>
                        <input className="w-[75%]" id="weight" value={Interest} onChange={(e) => setInterest(e.target.value)} type="range" min="0" max="20" step="1" name="weight" />

                    </div>
                </div>


                <div className='flex justify-evenly items-center w-[100%] h-[30%]  bg-black flex-col '>
                    <div className='flex justify-center items-center w-[100%]'>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-green-400 text-[15px] lg:text-[28px]">Loan Tenure :</label>
                        <input type="text" id="company" value={loanYear} onChange={(e) => setLoanYear(e.target.value)} className="text-[20px] font-semibold bg-gray-50 border ml-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[59%] lg:w-[48%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                    </div>
                    <div className='flex justify-center items-center flex-row w-[100%]'>
                        <input className="w-[75%]" id="weight" value={loanYear} onChange={(e) => setLoanYear(e.target.value)} type="range" min="0" max="30" step="1" name="weight" />

                    </div>
                </div>

                <button type="button" onClick={handelSubmit} className="inline-block w-[100%] py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Check</button>

            </div>

            <div className='h-auto lg:h-[60vh] w-[90%] lg:w-[40%] flex justify-center items-center flex-col'>

                <CalculatorPie  InterestData={InterestData} homeLoan={homeLoan}/>


            </div>

        </div>
    )

}

export default CalculatorCard