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
      <div className="loader-container">
        <img src={loader} alt="Loading icon" />
      </div>
      <p className="city-name">Istanbul</p>
      <p className="country-name">Turquie</p>
      <p className="temperature">23°</p>
      <div className="info-icon-container">
        <img src="/icons/01d.svg" className="info-icon" alt="weather icon" />
      </div>
    </main>
  );
}

export default App;
