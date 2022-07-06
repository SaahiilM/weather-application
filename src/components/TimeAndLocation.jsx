import React from "react";
import { formatToLocaleTime } from "../services/openweather";

// displays the location and the local time on the top
const TimeAndLocation = ({ weather: { dt, timezone, name, country } }) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-lg md:text-xl font-light">
          {formatToLocaleTime(dt, timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {/* {" "} */}
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
