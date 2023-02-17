import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../Firebase/Firebaseapp";


export const options = {
    title: "Car Brands",
    sliceVisibilityThreshold: 0.2,
    is3D: true,
  };

const fireStoreDb = getFirestore(app);

const PieChartBrand = () => {

  const [Cars, setCars] = useState([])

  const allCars = () => {
    return getDocs(collection(fireStoreDb, 'CarInfo'));
  }


  useEffect(() => {

    allCars().then((cars) => setCars(cars.docs));

    console.log("I am Pie Chart")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const reducerResult = Cars.map((x) => x.data().Brand).reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++
    } else {
      acc[curr] = 1
    }
    return acc
  }, [])

  const result = Object.entries(reducerResult).map(([key, value]) => [key, value]);


  const data = [
    ["Task", "Hours per Day"],
    ...[...result]
  ];


  return (


    <div className='w-[90%] lg:w-[30%] bg-white hover:scale-105 transition duration-300 shadow-xl rounded-lg'>

      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  )
}


export default PieChartBrand

