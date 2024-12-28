import React from 'react'
import { Line } from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const Graph = ({weatherData}) => {
    const labels = weatherData.time;
    const datasets = [
      {
        label: "Max Temp (°C)",
        data: weatherData.temperature_2m_max,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Min Temp (°C)",
        data: weatherData.temperature_2m_min,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Mean Temp (°C)",
        data: weatherData.temperature_2m_mean,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Apparent Max Temp (°C)",
        data: weatherData.apparent_temperature_max,
        borderColor: "rgb(255, 165, 0)",
        backgroundColor: "rgba(255, 165, 0, 0.5)",
      },
      {
        label: "Apparent Min Temp (°C)",
        data: weatherData.apparent_temperature_min,
        borderColor: "rgb(255, 0, 0)",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
      },
      {
        label: "Apparent Mean Temp (°C)",
        data: weatherData.apparent_temperature_mean,
        borderColor: "rgb(224, 0, 224)",
        backgroundColor: "rgb(224, 0, 224, 0.5)",
      },
      
    ];

    

    return <Line data={{ labels, datasets }}/>;
}

export default Graph
