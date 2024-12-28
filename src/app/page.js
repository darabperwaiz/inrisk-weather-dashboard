'use client'

import { useState } from "react";
import Graph from "@/components/Charts/Graph";
import Table from "@/components/Table/Table";

export default function Home() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  
  const fetchWeatherData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean`
      );
      const data = await res.json();
      if (data.daily) {
        setWeatherData(data.daily);
      } else {
        setError("No data available for the provided inputs.");
      }
    } catch (err) {
      setError("Failed to fetch weather data. Please check your inputs.");
    }
    setLoading(false);
  };


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>
      <div className="grid gap-4 p-5 rounded-2xl sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5" style={{backgroundColor: "#FFF"}}>
        <div>
          <label className="block mb-2">Latitude</label>
          <input
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Longitude</label>
          <input
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
        onClick={fetchWeatherData}
        className="mt-4 px-4 py-2 text-white rounded md:w-full"
        style={{backgroundColor: "#FE805D"}}
      >
        Fetch Weather Data
      </button>
      </div>
      

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {weatherData && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Graph</h2>
          <Graph weatherData= {weatherData}/>

          <h2 className="text-xl font-bold mt-6 mb-4">Table</h2>
          <Table weatherData={weatherData} />
        </div>
      )}
    </div>
  );

  
}
