import "./App.css";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <form class="search-form" id="search-form" autocomplete="off">
            <input
              type="search"
              placeholder="Enter a city"
              required
              class="search-input"
              id="search-input"
            />
            <input type="submit" value="Search" class="search-button" />
          </form>
        </header>
        <div class="weather-app">
          <div class="weather-data">
            <div>
              <h1 id="city"></h1>
              <p>
                <span class="current-conditions">
                  <span id="time"></span>,{" "}
                  <span id="weather-description"></span>
                </span>
                <br />
                <span class="current-conditions">Humidity: </span>
                <span id="humidity"></span>
                <span class="current-conditions">, Wind: </span>
                <span id="wind"></span>
              </p>
            </div>
            <div class="current-temperature">
              <div id="icon"></div>
              <div class="current-degrees" id="current-degrees"></div>
              <div class="current-degrees-unit">°C</div>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </div>
        <footer>
          <span class="footer-text">This project was coded by</span>
          <a
            href="https://github.com/nourgm10"
            target="_blank"
            class="footer-links"
          >
            Nour Ghallale
          </a>
          <span class="footer-text">, is open-sourced on</span>
          <a
            href="https://github.com/nourgm10/nour-weather-app"
            target="_blank"
            class="footer-links"
          >
            GitHub
          </a>
          <span class="footer-text">and hosted on</span>
          <a
            href="https://nours-weather-app.netlify.app/"
            target="_blank"
            class="footer-links"
          >
            Netlify
          </a>
        </footer>
        <script src="src/index.js"></script>
      </body>
    </div>
  );
}

export default App;
