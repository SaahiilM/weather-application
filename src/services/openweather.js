import { DateTime } from "luxon";

const WEATHER_API_KEY = "f4f34b9e6fe5b364b6f00b5099d98f93";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getformattedWeatherData = async (serachParams) => {
  const formattedCurrentWeather = await getOpenWeatherData(
    "weather",
    serachParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedForcecastWeather = await getOpenWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: serachParams.units,
  }).then(formatForecastWeather);

  return { ...formattedCurrentWeather, ...formattedForcecastWeather };
};

const getOpenWeatherData = (info, serachParams) => {
  const url = new URL(BASE_URL + "/" + info);
  url.search = new URLSearchParams({ ...serachParams, appid: WEATHER_API_KEY });
  console.log(url.href);
  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((eachDaily) => {
    return {
      title: formatToLocaleTime(eachDaily.dt, timezone, "ccc"),
      temp: eachDaily.temp.day,
      icon: eachDaily.weather[0].icon,
    };
  });
  hourly = hourly.slice(1, 6).map((eachHour) => {
    return {
      title: formatToLocaleTime(eachHour.dt, timezone, "hh:mm a"),
      temp: eachHour.temp,
      icon: eachHour.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

const formatToLocaleTime = (
  secs,
  zone,
  format = "cccc, dd,LLL yyyy' | Local time:'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconURLFrom = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

const askLocationPermission = () => {
  if (!navigator.geolocation) {
    console.log("Ask for permission");
  } else {
    navigator.geolocation.getCurrentPosition((position) => {
      let { longitude, latitude } = position.coords;
      return { longitude, latitude };
    });
  }
};

export default getformattedWeatherData;

export { formatToLocaleTime, iconURLFrom, askLocationPermission };
