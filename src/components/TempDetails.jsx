import React from "react";
import {
  FaTemperatureHigh,
  FaTemperatureLow,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import {
  TbTemperatureCelsius,
  TbTemperatureFahrenheit,
  TbTemperature,
} from "react-icons/tb";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { BiWind } from "react-icons/bi";
import { BsDroplet } from "react-icons/bs";
import { formatToLocaleTime, iconURLFrom } from "../services/openweather";

const TempDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div className="container p-4 flex flex-col items-center justify-center shadow-xl rounded-xl bg-white mb-auto h-1/3">
      <div className="flex items-center justify-center py-6 text-2xl ">
        <p>{details}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between  py-3">
        <img src={iconURLFrom(icon)} alt="" className="w-20" />
        {/* add condition for displaying units */}
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>

        <div className="flex sm:flew-row md:flex-col md:space-y-2 ">
          <div className="flex sm:flex-row font-light text-sm items-center justify-center">
            <TbTemperature size={25} className="md:mr-1" />
            Feels like:
            <span className="font-medium md:ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <BsDroplet size={25} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <BiWind size={25} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/ph`}</span>
          </div>
        </div>
      </div>
      <div className="flex  gap-x-2 md:gap-x-8 2xl:gap-20 sm: md:w-3/4 items-center justify-center space-x-2  text-sm md:text-base py-3">
        <div className=" flex flex-row gap-2">
          <div className="shrink">
            <FiSunrise size={25} />
          </div>
          <div>
            <p className="font-light shrink">
              Rise:
              <span className="font-medium ml-1">
                {formatToLocaleTime(sunrise, timezone, "hh:mm a")}
              </span>
            </p>
          </div>
        </div>

        <div className=" flex flex-row gap-2">
          <div>
            <FiSunset size={25} />
          </div>
          <div>
            <p className="font-light">
              Set:
              <span className="font-medium ml-1">
                {formatToLocaleTime(sunset, timezone, "hh:mm a")}
              </span>
            </p>
          </div>
        </div>

        <div className=" flex flex-row gap-2">
          <div>
            <FaArrowUp size={25} />
          </div>
          <div>
            <p className="font-light">
              High:
              <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
            </p>
          </div>
        </div>
        <div className=" flex flex-row gap-2">
          <div>
            <FaArrowDown size={25} />
          </div>
          <div>
            <p className="font-light">
              Low:
              <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempDetails;
