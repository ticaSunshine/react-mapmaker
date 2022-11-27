import React from "react";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "../../App.css";
import "../MapComponents/MapContainer.css";
import { MapContainer, TileLayer } from "react-leaflet";
import SpotsContainer from "../MapComponents/SpotsContainer.js";
import LocationMarker from "../MapComponents/LocationMarker";
import FullscreenBtn from "../MapComponents/FullscreenBtn";
import { map } from "leaflet";

export default function Services() {
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <div className="services">
      <MapContainer
        className={() =>
          ///zapeo na full screen modu
          "leaflet-container " +
          (fullScreen ? "leaflet-container--fullScrn" : "")
        }
        center={{ lat: 41.505, lng: 2.17 }}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FullscreenBtn fullScreen={fullScreen} setFullScreen={setFullScreen} />
        <LocationMarker />
        <SpotsContainer />
      </MapContainer>
    </div>
  );
}
