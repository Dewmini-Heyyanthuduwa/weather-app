import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import './App.css';
import React, { useState } from "react";
import Login from "./components/Login";
import Weather from "./components/Weather";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
    console.log(currentWeather);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="weather"
            element={<Weather onSearchChange={handleOnSearchChange} />}
          />
        </Routes>
      </Router>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
