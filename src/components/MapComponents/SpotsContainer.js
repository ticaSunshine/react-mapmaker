import { React, useState } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import spots from "../api/spots.json";
import "../MapComponents/imageSize.css";

// Spot

const markerIcon = new L.Icon({
  iconUrl: require("../../pins/red_pin.png"),
  iconSize: [35, 45]
});

export default function SpotsContainer(props) {
  const [activeMarker, setActiveMarker] = useState({});

  return spots.map((spot, index) => {
    const set = () => {
      setActiveMarker(spot);
      props.handleActiveMarker(activeMarker);
    };
    return (
      <div key={index}>
        <Marker
          position={spot.Coordinates}
          title={spot.Name}
          icon={markerIcon}
          value={activeMarker.position}
        >
          <Popup>
            {spot.Name}
            <img className="imageSize" src={spot.Fotke[1]} alt={spot.Name} />
            <button className="btn" onClick={set}>
              VIEW
            </button>
          </Popup>
        </Marker>
      </div>
    );
  });
}
