import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

import React, { useRef, useState, useEffect } from "react";
const API_KEY = "8n0WF3i7x5ikVvGR4TLXjoP7xvwGlEAW";
const WEATHER_API_KEY = "f4f34b9e6fe5b364b6f00b5099d98f93";

const MapTom = ({ latLong: { lng, lat } }) => {
  const mapElement = useRef();
  // eslint-disable-next-line no-unused-vars
  const [mapLongitude, setMapLongitude] = useState(-73.935242);
  // eslint-disable-next-line no-unused-vars
  const [mapLatitude, setMapLatitude] = useState(40.73061);
  // eslint-disable-next-line no-unused-vars
  const [mapZoom, setMapZoom] = useState(5);
  // eslint-disable-next-line no-unused-vars

  const sourceObject = (layerType) => {
    return {
      type: "raster",
      tiles: [
        `https://tile.openweathermap.org/map/${layerType}/{z}/{x}/{y}.png?appid=${WEATHER_API_KEY}`,
      ],
      tileSize: 256,
      minZoom: 0,
      maxZoom: 12,
      attribution: "OpenWeatherMap.org",
    };
  };

  useEffect(() => {
    const map = tt.map({
      key: API_KEY,
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom,
    });
    const cloudSource = sourceObject("clouds_new");

    const rainSource = sourceObject("precipitation_new");

    const tempSource = sourceObject("temp_new");

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

    map.on("load", () => {
      map.addSource("cloud_source", cloudSource);
      map.addLayer(cloudLayer);
      map.addSource("rain_source", rainSource);
      map.addLayer(rainLayer);
      map.addSource("temp_source", tempSource);
      map.addLayer(tempLayer);
    });
    return () => map.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapLatitude, mapLongitude]);

  return (
    <div className=" my-6 rounded-lg">
      <div ref={mapElement} className=" h-[400px] rounded-lg" />
    </div>
  );
};

export default MapTom;
