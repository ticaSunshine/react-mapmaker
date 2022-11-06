import React from "react";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "../../App.css";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup
} from "react-leaflet";
import SpotsContainer from "../../MapComponents/SpotsContainer";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    }
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
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
        <LocationMarker />
        <SpotsContainer />
      </MapContainer>
    </>
  );
}
