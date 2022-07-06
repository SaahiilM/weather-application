import React, { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import TempDetails from "./components/TempratureDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import UserInput from "./components/UserInput";
import getformattedWeatherData, {
  askLocationPermission,
} from "./services/openweather";
import MapTom from "./services/tomtomMap";

const App = () => {
  const [query, setQuery] = useState({ q: "New York" });
  const [units, setUnits] = useState("imperial");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // get data from the weather api
    const fetchWeather = async () => {
      await getformattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);
  useEffect(() => {
    askLocationPermission();
  }, [query]);
  const BGURL = "https://cdn.wallpapersafari.com/38/22/skoMHd.jpg";

  return (
    <div
      style={{ backgroundImage: `url(${BGURL})` }}
      className={
        " bg-fixed bg-center bg-cover m-0 py-3 px-4 items-center justify-center max-w-screen-xl md:px-4 lg:px-24 xl:px-32 mx-auto scroll-smooth"
      }
    >
      <div className=" text-white font-semibold text-3xl text-center ">
        <header>
          <span className=" font-light ">Weather</span> Forecast
        </header>
      </div>
      <UserInput setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TempDetails weather={weather} />
          <Forecast title="Hourly Forecast" items={weather.hourly} />
          <Forecast title="Daily Forecast" items={weather.daily} />
          <MapTom latLong={weather} />
        </div>
      )}
    </div>
  );
};

export default App;
