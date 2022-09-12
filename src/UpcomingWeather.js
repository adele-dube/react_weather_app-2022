import React, { useState } from "react";
import Api from "./Api";
import "bootstrap/dist/css/bootstrap.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function UpcomingWeather(props) {
  return (
    <div class="row justify-content-center" id="upcoming-weather">
      <span class="card col-2 shadow-sm" id="card-1">
        <div class="card-day pb-3" id="card-day-1">
          Fri
        </div>
        <div>
          <ReactAnimatedWeather
            icon="SLEET"
            color="#48484a"
            size={36}
            animate={true}
          />
        </div>
        <div className="pt-3">
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

      {/* REPEATED FOR SHECODES WEEK 4 HOMEWORK ONLY- CODE WILL BE DRY IN FINAL */}
      <span class="card col-2 shadow-sm" id="card-1">
        <div class="card-day pb-3" id="card-day-1">
          Sat
        </div>
        <div>
          <ReactAnimatedWeather
            icon="RAIN"
            color="#48484a"
            size={36}
            animate={true}
          />
        </div>
        <div className="pt-3">
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
      <span class="card col-2 shadow-sm" id="card-1">
        <div class="card-day pb-3" id="card-day-1">
          Sun
        </div>
        <div>
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="#48484a"
            size={36}
            animate={true}
          />
        </div>
        <div className="pt-3">
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

      <span class="card col-2 shadow-sm" id="card-1">
        <div class="card-day pb-3" id="card-day-1">
          Mon
        </div>
        <div>
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="#48484a"
            size={36}
            animate={true}
          />
        </div>
        <div className="pt-3">
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

      <span class="card col-2 shadow-sm" id="card-1">
        <div class="card-day pb-3" id="card-day-1">
          Tue
        </div>
        <div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#48484a"
            size={36}
            animate={true}
          />
        </div>
        <div className="pt-3">
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
