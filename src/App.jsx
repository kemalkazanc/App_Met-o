import { useEffect, useState } from "react";
import loader from "../src/assets/loader.svg";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
  useEffect(() => {
    fetch(
      `http://api.airvisual.com/v2/nearest_city?lat={{LATITUDE}}&lon={{LONGITUDE}}&key=${APIKEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData({
          city: data.data.city,
          country: data.data.country,
          iconId: data.data.current.weather.ic,
          temperature: data.data.current.weather.tp,
        });
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert("Error");
      });
  }, []);

  return (
    <main>
      <div className={`loader-container ${!weatherData && "active"}`}>
        <img src={loader} alt="Loading icon" />
      </div>
      {weatherData && (
        <>
          <p className="city-name">{weatherData.city}</p>
          <p className="country-name">{weatherData.country}</p>
          <p className="temperature">{weatherData.temperature}°</p>
          <div className="info-icon-container">
            <img
              src={`/icons/${weatherData.iconId}.svg`}
              className="info-icon"
              alt="weather icon"
            />
          </div>
        </>
      )}
    </main>
  );
}

export default App;
