import React, { useState } from "react";
import Api from "./Api";

export default function UpcomingWeather(props) {
  return (
    <div class="row justify-content-center" id="upcoming-weather">
      <span class="card col-2 shadow-sm" id="card-1">
        <div class="card-day" id="card-day-1">
          Friday
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
    </div>
  );
}
