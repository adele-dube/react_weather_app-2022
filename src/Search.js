import React, { useState } from "react";
import Api from "./Api";
import Heading from "./Heading";
import UpcomingWeather from "./UpcomingWeather";

export default function Search(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setTemperature(<Api city={city} />);
  }

  function updateCity(event) {
    event.preventDefault();

    setCity(event.target.value);
  }

  return (
    <div className="row align-items-center">
      <form
        onSubmit={handleSubmit}
        class="d-flex"
        role="search"
        id="search-form"
      >
        <div class="col-8 justify-content-center">
          <input
            className="form-control me-2 shadow-sm"
            type="search"
            placeholder="Enter a city..."
            autoFocus={true}
            onChange={updateCity}
          />
        </div>
        <div class="col-3 justify-content-center">
          <input
            type="submit"
            value="Search"
            className="btn btn-success shadow-sm"
            id="search-button"
          />
        </div>
      </form>

      <div>{temperature}</div>
      <Heading />
      <UpcomingWeather />
    </div>
  );
}
