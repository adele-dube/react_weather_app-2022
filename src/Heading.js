import React, { useState } from "react";
import Api from "./Api";
import ReactAnimatedWeather from "react-animated-weather";

export default function Heading(props) {
  return (
    <div class="row justify-content-center" id="heading-container">
      <div class="col-3 align-self-center" name="main-emoji" id="main-emoji">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="#48484a"
          size={56}
          animate={true}
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
            Monday, 12/09/22
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
