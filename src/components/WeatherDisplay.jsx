// components/WeatherDisplay.js

import React from "react";
function WeatherDisplay({ data }) {
  if (!data) {
    return <div>Loading..</div>;
  }
  const temperatureCelsius = (data.main.temp - 273.15).toFixed(1);

  return (
    <div className=" mt-40 pb-14 flex flex-row text-zinc-700 -ml-80">
      {data.main && (
        <div className="flex flex-row gap-20 -ml-60 ">
          <div className="flex flex-col gap-3">
            <h2 className="text-6xl font-extrabold mb-3 font-mono">
              {data.name}
            </h2>
            <p className="text-3xl">{temperatureCelsius}°C</p>
            <span className="text-2xl font-semibold uppercase">
              {data.weather[0].description}
            </span>
          </div>

          <div className="mt-20 flex gap-20">
            <p className="flex flex-col gap-2 text-2xl font-semibold">
              <span className="text-2xl uppercase">Humidity</span>
              {data.main.humidity}%
            </p>

            <p className="flex flex-col gap-2 text-2xl font-semibold">
              <span className="text-2xl uppercase"> Wind</span>
              {data.wind.speed} K/M
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
