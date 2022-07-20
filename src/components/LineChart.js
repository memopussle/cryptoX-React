import React, {useState} from 'react';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";



const LineChart = ({ coinHistory, timeStamp, price }) => {
    console.log(coinHistory)
    console.log(price)
    
    const [coinData, setCoinData] = useState({
      labels: timeStamp,
      datasets: [
        {
          label: "Chart",
          data: price,
          borderColor: "#10022284",
          color: "#9c9c9c",
          tension: 0.1,
        },
      ],
    });

  return <Line data={coinData}  />
}

export default LineChart;