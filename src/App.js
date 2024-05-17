import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [city, setCity] = useState("Paris");

  useEffect(() => {
    const searchCity = async (city) => {
      let apiKey = "2dbe7af4434o3f6bf61f8t7c0caf3496";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
      getForecast(city);
    };
    searchCity(city);
  }, [city]);

  function getForecast(city) {
    let apiKey = "2dbe7af4434o3f6bf61f8t7c0caf3496";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then((response) => {
      setForecastData(response.data);
    });
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    setCity(searchInput);
    setSearchInput("");
  }

  return (
    <div className="App">
      <header>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            class="search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" class="search-button">
            Search
          </button>
        </form>
      </header>
      {weatherData && (
        <div className="weather-app">
          <div className="weather-data">
            <div>
              <h1>{weatherData.city.toUpperCase()}</h1>
              <p>
                <span className="current-conditions">
                  {formatDate(new Date())}, {weatherData.condition.description}
                </span>
                <br />
                <span className="current-conditions">
                  Humidity: {weatherData.temperature.humidity}%, Wind:{" "}
                  {weatherData.wind.speed} km/h
                </span>
              </p>
            </div>
            <div className="current-temperature">
              <div id="icon">
                <img
                  src={weatherData.condition.icon_url}
                  alt={weatherData.condition.description}
                />
              </div>
              <div className="current-degrees">
                {Math.round(weatherData.temperature.current)}
              </div>
              <div className="current-degrees-unit">°C</div>
            </div>
          </div>
          {forecastData && (
            <div className="weather-forecast">
              {forecastData.daily.slice(1, 6).map((day, index) => (
                <div key={index} className="day-1">
                  <div className="forecast-day">{formatDay(day.time)}</div>
                  <img
                    src={day.condition.icon_url}
                    alt={day.condition.description}
                    className="forecast-icon"
                  />
                  <div className="forecast-temperature">
                    <div>
                      <span className="min-max-forecast">Min: </span>
                      <span id="min-forecast-temperature">
                        {Math.round(day.temperature.minimum)}°C
                      </span>
                    </div>
                    <div>
                      <span className="min-max-forecast">Max: </span>
                      <span id="max-forecast-temperature">
                        {Math.round(day.temperature.maximum)}°C
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <footer>
        <span class="footer-text">This project was coded by </span>
        <a
          href="https://github.com/nourgm10"
          target="_blank"
          rel="noreferrer"
          class="footer-links"
        >
          Nour Ghallale
        </a>
        <span class="footer-text">, is open-sourced on </span>
        <a
          href="https://github.com/nourgm10/nours-react-weather"
          target="_blank"
          rel="noreferrer"
          class="footer-links"
        >
          GitHub
        </a>
        <span class="footer-text"> and hosted on </span>
        <a
          href="https://nours-react-weather.netlify.app/"
          target="_blank"
          rel="noreferrer"
          class="footer-links"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

export default App;
