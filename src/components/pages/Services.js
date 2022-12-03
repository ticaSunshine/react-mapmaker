import React from "react";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "../../App.css";
import "../MapComponents/LeafletContainer.css";
import { MapContainer, TileLayer } from "react-leaflet";
import SpotsContainer from "../MapComponents/SpotsContainer.js";
import LocationMarker from "../MapComponents/LocationMarker";
import FullscreenBtn from "../MapComponents/FullscreenBtn";
import ImageSlider from "../ImageSlider/ImageSlider";
import "../ImageSlider/ImageSliderContainer.css";

export default function Services() {
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <div className="services">
      <div
        className={
          "leaflet-container " +
          (!fullScreen ? "leaflet-container--fullScrn" : "")
        }
      >
        <MapContainer
          className="map-container"
          center={{ lat: 45.46611, lng: 16.37833 }}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <FullscreenBtn
            fullScreen={fullScreen}
            setFullScreen={setFullScreen}
          />
          <LocationMarker />
          <SpotsContainer />
        </MapContainer>
      </div>

      <ImageSlider className="ImageSliderContainer" />
    </div>
  );
}
