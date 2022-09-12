import React, { useState } from "react";
import Api from "./Api";

export default function Heading(props) {
  return (
    <div class="row justify-content-center" id="heading-container">
      <div class="col-3 align-self-center" name="main-emoji" id="main-emoji">
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
    </div>
  );
}
