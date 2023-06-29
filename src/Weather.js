import React from "react";
import axios from "axios";

export default function Weather({ city }) {
  function updateWeather(response) {
    let temp = Math.round(response.data.main.temp);
    let name = response.data.name;
    alert(`The Temperature in ${name} is ${temp}`);
  }

  let apiKey = "32e12816b7e874a17bd13105b642a985";
  let unit = "metric";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(url).then(updateWeather);
  return <h2>This is from the weather component </h2>;
}
