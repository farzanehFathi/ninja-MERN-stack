import React from "react";
import "./Weather.css";
// import axios from "axios";

export default function Weather({}) {
  return (
    <div className="Weather">
      <h1>Lisbon </h1>
      <div className="weather-detail__text">Friday 17:30</div>
      <div className="weather-detail__text">Clear</div>
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
