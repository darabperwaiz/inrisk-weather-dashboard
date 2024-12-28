'use client'

import React, { useState } from 'react'

const Table = ({weatherData}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
  
    const totalPages = Math.ceil(weatherData.time.length / rowsPerPage);
  
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentData = weatherData.time.slice(startIndex, endIndex);
  
    const rows = currentData.map((date, index) => (
      <tr key={index} className="border-b">
        <td className="p-2">{date}</td>
        <td className="p-2">{weatherData.temperature_2m_max[startIndex + index]}</td>
        <td className="p-2">{weatherData.temperature_2m_min[startIndex + index]}</td>
        <td className="p-2">{weatherData.temperature_2m_mean[startIndex + index]}</td>
      </tr>
    ));
  
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };
  
    return (
      <div>
        <table className="w-full border-collapse border border-gray-200 bg-slate-100">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Max Temp (°C)</th>
              <th className="p-2 border">Min Temp (°C)</th>
              <th className="p-2 border">Mean Temp (°C)</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
  
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-4 py-2 border ${currentPage === 1 ? "text-gray-400" : "text-blue-500"} `}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="mx-4">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-4 py-2 border ${currentPage === totalPages ? "text-gray-400" : "text-blue-500"} `}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    );
}

export default Table
