import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
// import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import { useState, useRef, useEffect } from "react";

const UserInput = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, []);
  const handleSearch = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
    console.log(city);
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat, lon });
      });
    } else {
      alert("Please allow location permission to get current location.");
    }
  };

  const handleUnitChange = (e) => {
    const unitSelected = e.currentTarget.name;

    if (units !== unitSelected) {
      setUnits(unitSelected);
    }
  };

  return (
    <div className=" container flex flex-row shadow-lg rounded-lg bg-gray-50 justify-center my-6 text-black">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4 p-2">
        <input
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-stone-700 capitalize rounded-lg bg-transparent"
          placeholder="Search city..."
          value={city}
          ref={searchInput}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <FaSearchLocation
          size={25}
          className=" cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearch}
        />
        <BiCurrentLocation
          size={25}
          className=" cursor-pointer transition ease-out hover:scale-125 hover:text-red-500"
          onClick={handleCurrentLocation}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl  font-light hover:scale-125 transition ease-out focus:text-blue-600"
          onClick={handleUnitChange}
        >
          {/* <TbTemperatureCelsius size={25} /> */}
          °C
        </button>
        <p className="text-xl  mx-1">&nbsp;|&nbsp;</p>
        <button
          name="imperial"
          className="text-xl  font-light hover:scale-125 transition ease-out focus:text-blue-600"
          onClick={handleUnitChange}
        >
          °F
          {/* <TbTemperatureFahrenheit size={25} /> */}
        </button>
      </div>
    </div>
  );
};

export default UserInput;
