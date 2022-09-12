import React, { useState } from "react";
import axios from "axios";

export default function Api(props) {
  let [temp, setTemp] = useState("");
  let [description, setDescription] = useState("");
  let [humdity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function showTemp(response) {
    setTemp(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  if (temp !== null) {
    {
      /* DISABLED FOR SHECODES WEEK 4 HOMEWORK ONLY- CODE WILL BE IN FINAL PROJECT */
    }

    // let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=1a915758c5fb84c9ee7377f6039e76a7&units=metric`;

    // axios.get(apiUrl).then(showTemp);

    // console.log(apiUrl);

    return (
      {
        /* DISABLED FOR SHECODES WEEK 4 HOMEWORK ONLY- CODE WILL BE IN FINAL PROJECT */
      } <
      {
        /*div >
       <ul>
          <li>Temperature: {temp}°C</li>
          <li>Description: {description}</li>
          <li>Humidity:{humdity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>
            <img
              src="http://openweathermap.org/img/wn/{icon}@2x.png"
              alt={description}
              title={description}
            />
          </li>
        </ul> 

         <h3>Hello {props.city}!! </h3> 
      </div>*/
      }
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
