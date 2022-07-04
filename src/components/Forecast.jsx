import React from "react";
import { iconURLFrom } from "../services/openweather";

const Forecast = ({ title, items }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg text-black px-2 mb-auto">
      <div className="flex items-center justify-start mt-6 ">
        <p className="  font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className=" flex flex-row items-center justify-between ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className=" font-light text-sm">{item.title}</p>
            <img src={iconURLFrom(item.icon)} className=" w-12 my-1" alt="" />
            <p className=" font-medium"> {`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>

      {/* <div className='flex flex-col items-center justify-center'>
          <p className=' font-light text-sm'>
            4:00 PM
          </p>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" className=' w-12 my-1' alt="" />
          <p className=' font-medium'> 22°</p>
        </div>
       
        <div className='flex flex-col items-center justify-center'>
          <p className=' font-light text-sm'>
            4:00 PM
          </p>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" className=' w-12 my-1' alt="" />
          <p className=' font-medium'> 22°</p>
        </div>
       
        <div className='flex flex-col items-center justify-center'>
          <p className=' font-light text-sm'>
            4:00 PM
          </p>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" className=' w-12 my-1' alt="" />
          <p className=' font-medium'> 22°</p>
        </div>
       
        <div className='flex flex-col items-center justify-center'>
          <p className=' font-light text-sm'>
            4:00 PM
          </p>
          <img src="http://openweathermap.org/img/wn/10d@2x.png" className=' w-12 my-1' alt="" />
          <p className=' font-medium'> 22°</p>
        </div> */}
    </div>
  );
};

export default Forecast;
