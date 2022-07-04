import React, { useEffect, useState } from "react";
// import Card from "./components/Card";
import Forecast from "./components/Forecast";
import TempDetails from "./components/TempDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import UserInput from "./components/UserInput";
import getformattedWeatherData from "./services/openweather";
import MapTom from "./services/tomtomMap";

const App = () => {
  const [query, setQuery] = useState({ q: "New York" });
  const [units, setUnits] = useState("imperial");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      // const data = await getformattedWeatherData({ q: "London" });
      // console.log(data);
      await getformattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);
  console.log(query);
  const BGURL = "https://cdn.wallpapersafari.com/38/22/skoMHd.jpg";
  const backgroundFormat = () => {
    if (!weather) {
      return "from-cyan-800 to-blue-600";
    }
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) {
      return "from-cyan-800 to-blue-500";
    } else {
      return "from-yellow-700 to-orange-700";
    }
  };

  return (
    // Background style
    <div
      style={{ backgroundImage: `url(${BGURL})` }}
      className={" bg-fixed bg-center bg-cover m-0 py-3 px-4 "}
    >
      {/* Header Div */}
      <div className=" text-white font-semibold text-3xl text-center ">
        <header>
          <span className=" font-light ">Weather</span> Forecast
        </header>
      </div>
      {/* <Card /> */}
      {/* Search and Units selection */}
      <UserInput setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />

          {/* <div>Current weather</div> */}
          <TempDetails weather={weather} />
          {/* <div>Weather forecast</div> */}

          <Forecast title="Hourly Forecast" items={weather.hourly} />
          <Forecast title="Daily Forecast" items={weather.daily} />
        </div>
      )}
      {/* <div ref={mapContainer} className=" h-64" /> */}
      {/* Display map
      </div> */}
      {/* <MapBox /> */}
      <MapTom />
    </div>
  );
};

export default App;
