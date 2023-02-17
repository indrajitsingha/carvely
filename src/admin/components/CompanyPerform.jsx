import React from "react";
import { Chart } from "react-google-charts";




  
export const options = {
  title: "Total Data Summury",
  chartArea: { width: "50%" },
  hAxis: {
    title: "Total Quantity",
    minValue: 0,
  },
  vAxis: {
    title: "Total",
  },
};
const CompanyPerform = ({admin,brands,categories,totalCars}) => {

   const data = [
    ["Items", "No"],
    ["Admin", admin ],
    ["Total Cars",brands],
    ["Total Categories",categories],
    ["Total Brands", totalCars],
  ];


  return (
    <div className="w-[90%] lg:w-[30%] bg-white hover:scale-105 transition duration-300 shadow-xl rounded-lg">
    <Chart
    chartType="BarChart"
    width="100%"
    height="400px"
    data={data}
    options={options}
  />
  </div>
  )
}

export default CompanyPerform