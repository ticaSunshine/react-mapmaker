import React from "react";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "../../App.css";
import L from "leaflet";
import { useMapEvents, Marker, Popup } from "react-leaflet";

const locationIcon = new L.Icon({
  iconUrl: require("../../pins/blue_pin.png"),
  iconSize: [35, 45]
});

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
    <Marker position={position} icon={locationIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default LocationMarker;
