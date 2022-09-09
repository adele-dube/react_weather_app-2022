import React, { useState } from "react";
import Api from "./Api";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          autoFocus={true}
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>

      <div>{temperature}</div>
    </div>
  );
}
