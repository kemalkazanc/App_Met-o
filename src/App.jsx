import loader from "../src/assets/loader.svg";
import "./App.css";

function App() {
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
