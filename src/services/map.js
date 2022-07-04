// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from "!mapbox-gl";
import React, { useEffect, useRef, useState } from "react";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FhaGlpbG0xMiIsImEiOiJjbDUxeDZvbGUwYTFpM2NwamphbGtiZGJxIn0.QLOzF6J0OrH1mGRtUFhl1g";

const MapBox = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className=" my-6">
      <div className=" bg-green-200 text-black px-1 py-3 font-mono z-[1] absolute top-0 left-0 m-3 rounded">
        Longitude:{lng} | Latitude:{lat} | Zoom:{zoom}
      </div>
      <div ref={mapContainer} className=" h-[400px] rounded" />
    </div>
  );
};

export default MapBox;
