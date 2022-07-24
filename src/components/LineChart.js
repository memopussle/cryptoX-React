import React, { useState, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({  timeStamp, price }) => {
  const data = () => {
    return {
      labels: timeStamp,
      datasets: [
        {
          label: "Coin Chart",
          data: price,
          fill: "start",
          backgroundColor: (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 1000);
            gradient.addColorStop(0.4, "#9f14a328");
             gradient.addColorStop(0.8, "#23b8e514");

            return gradient;
          },
          borderColor: "#12698362",
          pointRadius: 0,
        },
      ],
    };
  };
   
  

  return <Line data={data()}  />;
};

export default LineChart;
