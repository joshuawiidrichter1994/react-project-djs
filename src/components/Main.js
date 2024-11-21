import './Main.css';
import React, { useEffect, useState } from 'react';

function Main() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch weather data
    const fetchWeather = async () => {
      try {
        const apiKey = '70bb90db40a4a99461ea11963b348e4a'; // Replace with your actual API key
        const lat = -33.918861; // Latitude for Cape Town
        const lon = 18.4233; // Longitude for Cape Town
        const exclude = 'minutely,hourly,daily,alerts'; // Exclude unnecessary data
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(
            `Error fetching weather data: ${response.statusText}`
          );
        }

        const data = await response.json();
        setWeather(data.current); // Extract the `current` weather object
      } catch (err) {
        setError(err.message);
      }
    };

    fetchWeather();
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div className="Main">
      <h1>Weather in Cape Town</h1>
      {error && <p className="error">Error: {error}</p>}
      {weather ? (
        <div className="weather-info">
          <p>Temperature: {weather.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Humidity: {weather.humidity}%</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default Main;
