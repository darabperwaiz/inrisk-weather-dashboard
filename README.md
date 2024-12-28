## Getting Started


# InRisk Weather Dashboard 🌦️

A responsive and interactive weather dashboard built using **Next.js** and **Tailwind CSS**. This application integrates the **Open-Meteo Historical Weather API** to fetch weather data for a specific location and date range. Users can view the data in a graph and a paginated table.

## Features

- **Dashboard Inputs**:
  - Latitude and Longitude input fields with validation.
  - Start Date and End Date pickers.
  
- **Weather Data**:
  - Maximum Temperature (2m)
  - Minimum Temperature (2m)
  - Mean Temperature (2m)
  - Maximum Apparent Temperature (2m)
  - Minimum Apparent Temperature (2m)
  - Mean Apparent Temperature (2m)

- **Data Display**:
  - Interactive graph (powered by Chart.js).
  - Paginated table (10 rows per page).

- **Responsive Design**:
  - Works seamlessly across devices (desktop, tablet, and mobile) with creative styling using **Tailwind CSS**.

- **Additional Features**:
  - Loading indicator while fetching data.
  - Error handling for invalid inputs or API failures.
  - Optimized API calls to avoid excessive requests.

## Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/), [React.js](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Graph**: [Chart.js](https://www.chartjs.org/), [react-chartjs-2](https://react-chartjs-2.js.org/)
- **Weather API**: [Open-Meteo Historical Weather API](https://open-meteo.com/)

## Installation

### Prerequisites
- Node.js >= 16.x
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

