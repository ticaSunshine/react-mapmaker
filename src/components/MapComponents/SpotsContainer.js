import { React } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import spots from "../api/spots.json";
import "../MapComponents/imageSize.css";

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
            <img className="imageSize" src={spot.Fotke[5]} alt={spot.Name} />
            <button className="btn">VIEW</button>
          </Popup>
        </Marker>
      </div>
    );
  });
}
