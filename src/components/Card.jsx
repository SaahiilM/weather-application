const Card = () => {
  return (
    <div className="container p-4 flex items-center justify-center shadow-lg rounded-lg bg-white h-1/3 mb-auto">
      <div className="my-auto">
        <p className="font-bold text-5xl text-pink-800 mb-2">&deg;C</p>
        <p className="text-4xl text-gray-800 tracking-widest">
          details
          {/* <img src={weather_icon} className="w-1/4 inline" /> */}
        </p>
        {/* <h1 className=" w-1/4 inline">Weather Image</h1> */}
        <p className="text-gray-400 text-xs uppercase tracking-widest">
          Description
        </p>
        <p className="tracking-wider">Date and time</p>
      </div>
      <div className="my-2 border-l-2 border-gray-100 p-2">
        <p className="text-gray-400 text-lg">RealFeel: &deg;C</p>
        <p className="text-gray-400 text-lg">Humidity: %</p>
        <p className="text-gray-400 text-lg">Cloud Cover: %</p>
        <p className="text-gray-400 text-lg">Min Temp: &deg;C</p>
        <p className="text-gray-400 text-lg">Max Temp: &deg;C</p>
      </div>
    </div>
  );
};

export default Card;
