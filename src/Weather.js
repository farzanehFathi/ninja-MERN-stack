import React from "react";
import "./Weather.css";
// import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-header">
        <h1>Lisbon </h1>
        <div className="weather-detail__text">Friday 17:30</div>
        <div className="weather-detail__text">Clear</div>
      </div>
      <div className="row">
        <div className="col-sm-6 temperature">
          <div className="weather-icon">icon</div>
          <div className="weather-temp">28</div>
          <div className="weather-temp-unit">°C</div>
        </div>

        <div className="col-sm-6">
          {" "}
          <div className="weather-detail__text">Precipitation: 42%</div>
          <div className="weather-detail__text">Wind: 12km/h</div>
        </div>
      </div>
    </div>
  );
}

// Saved for further functions ...

//  function updateWeather(response) {
//    let temp = Math.round(response.data.main.temp);
//    let name = response.data.name;
//    alert(`The Temperature in ${name} is ${temp}`);
//  }

//  let apiKey = "32e12816b7e874a17bd13105b642a985";
//  let unit = "metric";
//  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
//  axios.get(url).then(updateWeather);
