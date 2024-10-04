import React, { useState, useEffect } from "react";

export default function WeatherDigit() {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch(
      `https://us-weather-by-city.p.rapidapi.com/getweather?city=${city}&state=WA`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": "Sign Up for Key",
          "x-rapidapi-host": "us-weather-by-city.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setWeather(JSON.stringify(data)));
  }, [city]);

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <select value={city} onChange={handleCityChange}>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
        <option value="Chicage">Chicago</option>
      </select>
      {weather && (
        <div>
          <p>Temperature: {weather?.main?.temp ?? ""}</p>
          <p>Description: {weather?.weather?.[0]?.description ?? ""}</p>
        </div>
      )}
    </div>
  );
}