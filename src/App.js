import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search";
import Api from "./Api";
import Heading from "./Heading";

function App() {
  return (
    <div className="container">
      <div class="card" id="main-card">
        <div class="card-body shadow">
          <Search />
          {/* <div class="row justify-content-center" id="heading-container">
            <div
              class="col-3 align-self-center"
              name="main-emoji"
              id="main-emoji"
            >
              <img
                src="media/1530392_weather_sun_sunny_temperature.png"
                alt="Sunny"
                id="icon"
                width="100px"
              />
            </div>

             <div class="col-3 align-self-center" name="today" id="today">
              <div class="heading">
                <h3 class="current-city" id="current-city">
                  Nicosia
                </h3>
                <span class="current-temperature" id="current-temp">
                  23
                </span>
                <span class="units">
                  <a href="#" id="temp-celsius" class="active">
                    °C{" "}
                  </a>{" "}
                  |
                  <a href="#" id="temp-farenheit">
                    °F
                  </a>
                </span>

                <h4 class="current-date" id="current-date">
                  Thursday, 23/06/2 2
                </h4>
              </div>
            </div> 

            <div
              class="col-3 align-self-center"
              name="today-details"
              id="today-details"
            >
              <ul>
                <li id="description">Cloudy</li>
                <li id="windspeed">Windspeed: 19.6 km/h</li>
                <li id="humidity">Humidity: 47%</li>
              </ul>
            </div>
          </div> */}
          {/*  START #Upcoming Weather  */}
          {/* <div class="row justify-content-center" id="upcoming-weather">
            <span class="card col-2 shadow-sm" id="card-1">
              <div class="card-day" id="card-day-1">
                Fri
              </div>
              <div>
                <img
                  src="media/dead/1530364_rain_storm_shower_weather.png"
                  alt="Rain Storm"
                  id="weekday-icon-1"
                  width="70px"
                />
              </div>
              <div>
                <span class="daily-minimum" id="daily-minimum-1">
                  {" "}
                  23°
                </span>
                /
                <span class="daily-maximum" id="daily-maximum-1">
                  {" "}
                  38°{" "}
                </span>
              </div>
            </span>
          </div> */}
          {/* END #Upcoming Weather */}
          <button
            class="btn btn-success"
            type="button"
            id="current-city-button"
          >
            Current City
          </button>
          <p class="footer">
            <a
              href="https://github.com/adele-dube/react_weather_app-2022"
              id="footer-link"
              target="_blank"
            >
              Open-Source Code
            </a>
            by Adele_D ©2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
