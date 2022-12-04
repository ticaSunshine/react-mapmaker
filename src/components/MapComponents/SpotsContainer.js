import { React, useState } from "react";
import { Marker, Popup, Image } from "react-leaflet";
import L from "leaflet";

import spots from "../../api/spots.json";

// Spot

const markerIcon = new L.Icon({
  iconUrl: require("../../pins/red_pin.png"),
  iconSize: [35, 45]
});

export default function SpotsContainer() {
  return spots.map((spot, index) => {
    return (
      <div key={index}>
        <Marker position={spot.Coordinates} title={spot.Name} icon={markerIcon}>
          <Popup>
            {spot.Name}
            <img src={spot.Fotke[0]} alt="spotImg" />
            <button className="btn">VIEW</button>
          </Popup>
        </Marker>
      </div>
    );
  });
}
