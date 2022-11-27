import React from "react";
import "leaflet/dist/leaflet.css";
import "../../App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import SpotsContainer from "../MapComponents/SpotsContainer.js";
import LocationMarker from "../MapComponents/LocationMarker";
import FullscreenBtn from "../MapComponents/FullscreenBtn";

export default function Services() {
  return (
    <>
      <MapContainer
        className="services"
        center={{ lat: 41.505, lng: 2.17 }}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FullscreenBtn />
        <LocationMarker />
        <SpotsContainer />
      </MapContainer>
    </>
  );
}
