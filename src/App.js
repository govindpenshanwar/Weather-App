import React, { useState, useEffect } from "react";
import "./App.css";
import CountryCard from "./components/CountryCard";
import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";
import france from "./Assets/images/france.jpg";
import other from "./Assets/images/other2.jpg";
import qatar from "./Assets/images/qatar.jpeg";
import italy2 from "./Assets/images/italy3.jpg";
import japan2 from "./Assets/images/jpn2.jpg";

const API_KEY = "b543da68018a588fb6d38cc7890d0310";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("France");
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    fetchWeatherData(selectedCountry);
  }, [selectedCountry]);

  const fetchWeatherData = async (country) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
      setBackgroundImage(getBackgroundImage(data.name) ?? other);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleSearch = (query) => {
    setSelectedCountry(query);
  };

  const getBackgroundImage = (countryName) => {
    switch (countryName) {
      case "France":
        return france;
      case "Italy":
        return italy2;
      case "Qatar":
        return qatar;
      case "Japan":
        return japan2;
      default:
        return other;
    }
  };

  return (
    <div className="App ">
      <div
        className="background-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {weatherData && <WeatherDisplay data={weatherData} />}
      </div>

      <div className="mt-10 mb-16">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="  flex flex-row gap-3  font-semibold cursor-pointer  mt-6 justify-center items-center ">
        <div className="bg-violet-400 rounded-lg hover:scale-105 transition-all  ">
          <CountryCard country="France" onSelect={handleCountrySelect} />
        </div>

        <div className=" bg-cyan-300  rounded-lg hover:scale-105 transition-all">
          <CountryCard country="Italy" onSelect={handleCountrySelect} />
        </div>
        <div className="bg-red-400  rounded-lg hover:scale-105 transition-all">
          <CountryCard country="Qatar" onSelect={handleCountrySelect} />
        </div>
        <div className="bg-orange-300  rounded-lg hover:scale-105 transition-all">
          <CountryCard country="Japan" onSelect={handleCountrySelect} />
        </div>
      </div>
    </div>
  );
}

export default App;
