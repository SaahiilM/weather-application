import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

import React, { useRef, useState, useEffect } from "react";
const API_KEY = "8n0WF3i7x5ikVvGR4TLXjoP7xvwGlEAW";
const WEATHER_API = "f4f34b9e6fe5b364b6f00b5099d98f93";
// const MAX_ZOOM = 17;
const MapTom = () => {
  const mapElement = useRef();
  // eslint-disable-next-line no-unused-vars
  const [mapLongitude, setMapLongitude] = useState(-121.91599);
  // eslint-disable-next-line no-unused-vars
  const [mapLatitude, setMapLatitude] = useState(37.36765);
  // eslint-disable-next-line no-unused-vars
  const [mapZoom, setMapZoom] = useState(13);
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = useState({});

  // const increaseZoom = () => {
  //   if (mapZoom < MAX_ZOOM) {
  //     setMapZoom(mapZoom + 1);
  //   }
  // };

  // const decreaseZoom = () => {
  //   if (mapZoom > 1) {
  //     setMapZoom(mapZoom - 1);
  //   }
  // };

  useEffect(() => {
    let map = tt.map({
      key: API_KEY,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    let cloudSource = {
      type: "raster",
      tiles: [
        `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${WEATHER_API}`,
      ],
      tileSize: 256,
      minZoom: 0,
      maxZoom: 12,
      attribution: "OpenWeatherMap.org",
    };

    let rainSource = {
      type: "raster",
      tiles: [
        `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${WEATHER_API}`,
      ],
      tileSize: 256,
      minZoom: 0,
      maxZoom: 12,
      attribution: "OpenWeatherMap.org",
    };

    let tempSource = {
      type: "raster",
      tiles: [
        `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${WEATHER_API}`,
      ],
      tileSize: 256,
      minZoom: 0,
      maxZoom: 12,
      attribution: "OpenWeatherMap.org",
    };

    let cloudLayer = {
      id: "cloud_layer",
      type: "raster",
      source: "cloud_source",
      layout: { visibility: "visible" },
    };

    let rainLayer = {
      id: "rain_layer",
      type: "raster",
      source: "rain_source",
      layout: { visibility: "visible" },
    };

    let tempLayer = {
      id: "temp_layer",
      type: "raster",
      source: "temp_source",
      layout: { visibility: "visible" },
    };

    setMap(map);
    map.on("load", () => {
      map.addSource("cloud_source", cloudSource);
      map.addLayer(cloudLayer);
      map.addSource("rain_source", rainSource);
      map.addLayer(rainLayer);
      map.addSource("temp_source", tempSource);
      map.addLayer(tempLayer);
    });
    return () => map.remove();
  }, [mapLatitude, mapLongitude, mapZoom]);

  // const updateMap = () => {
  //   map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
  //   map.setMapZoom(mapZoom);
  // };

  return (
    <div className=" my-6">
      <div ref={mapElement} className=" h-[400px] rounded-lg" />
    </div>
  );
};

export default MapTom;