import React from "react";
import { Chart } from "react-google-charts";


const CalculatorPie = ({InterestData,homeLoan}) => {


  const data = [
    ["Language", "Speakers (in millions)"],
    ["Loan", homeLoan],
    ["Interest", InterestData],
   
  ];
  
   const options = {
    legend: "none",
    pieSliceText: "label",
    title: "Break-up of Total Payment",
    pieStartAngle: 10,
    is3D: true,
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default CalculatorPie