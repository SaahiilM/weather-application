import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { TbTemperature } from "react-icons/tb";
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
    <div className="flex-1">
      <div className="p-4 flex flex-col items-center justify-center shadow-xl rounded-xl bg-white mb-auto h-1/3 ">
        <div className="flex flex-row items-center gap-4 md:gap-16 ">
          <div className="flex flex-col  pt-8 pb-0 mr-4">
            <div className=" flex flex-row items-center pb-0">
              {/* iconURLFrom is responsible for taking the icon code and returning the icon using the api */}
              <img src={iconURLFrom(icon)} alt="" className="w-22" />

              <p className="text-5xl">{`${temp.toFixed()}°`}</p>
            </div>
            <div className="flex items-center justify-center py-2 text-2xl ">
              <p>{details}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-2 pt-8 ">
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

        <div className="flex flex-row gap-2 my-2 space-x-4 flex-shrink md:w-full md:gap-8 md:space-x-8 justify-center">
          <div className=" flex flex-col items-center gap-2">
            <div className="">
              <FiSunrise size={25} />
            </div>
            <div>
              <p>Sunrise</p>
            </div>
            <div className="">
              <p className="font-medium">
                {formatToLocaleTime(sunrise, timezone, "hh:mm a")}
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center gap-2">
            <div>
              <FiSunset size={25} />
            </div>
            <div>
              <p>Sunset</p>
            </div>
            <div className="">
              <p className="font-medium">
                {formatToLocaleTime(sunset, timezone, "hh:mm a")}
              </p>
            </div>
          </div>

          <div className=" flex flex-col items-center gap-2">
            <div>
              <FaArrowUp size={25} />
            </div>
            <div>
              <p>High</p>
            </div>
            <div className="">
              <p className="font-medium">{`${temp_max.toFixed()}°`}</p>
            </div>
          </div>

          <div className=" flex flex-col items-center gap-2">
            <div>
              <FaArrowDown size={25} />
            </div>
            <div>
              <p>High</p>
            </div>
            <div className="">
              <p className="font-medium">{`${temp_min.toFixed()}°`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempDetails;
