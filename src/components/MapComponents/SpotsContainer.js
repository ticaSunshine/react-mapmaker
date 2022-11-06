import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Spot

let Spots = [
  {
    Name: "Mimara",
    Description: "7 stairs",
    Address: "Rooseveltov trg 5, 10000, Zagreb",
    Coordinates: [45.80817, 15.967346],
    Tags: "Stairs, DIY, Ledges ",
    Fotke: [
      "/0_helpers/Spotovi/Mimara/0.JPG",
      "/0_helpers/Spotovi/Mimara/1.JPG",
      "/0_helpers/Spotovi/Mimara/2.JPG",
      "/0_helpers/Spotovi/Mimara/3.JPG",
      "/0_helpers/Spotovi/Mimara/4.JPG",
      "/0_helpers/Spotovi/Mimara/5.JPG",
      "/0_helpers/Spotovi/Mimara/5.JPG"
    ]
  },
  {
    Name: "Đamija",
    Description: "Ledges and stairs",
    Address: "Trg žrtava fašizma, 10000, Zagreb",
    Coordinates: [45.8102, 15.9867],
    Tags: "Ledges, Stairs, Gaps ",
    Fotke: [
      "/0_helpers/Spotovi/Đamija/0.JPG",
      "/0_helpers/Spotovi/Đamija/1.JPG",
      "/0_helpers/Spotovi/Đamija/2.JPG",
      "/0_helpers/Spotovi/Đamija/3.JPG",
      "/0_helpers/Spotovi/Đamija/4.JPG",
      "/0_helpers/Spotovi/Đamija/5.JPG",
      "/0_helpers/Spotovi/Đamija/5.JPG"
    ]
  },
  {
    Name: "h",
    Description: "Lairs",
    Address: "Trg žrtava fašizma, 10000, Zagreb",
    Coordinates: [45.81, 15.98],
    Tags: "Ledges, Stairs, Gaps ",
    Fotke: [
      "/0_helpers/Spotovi/Đamija/0.JPG",
      "/0_helpers/Spotovi/Đamija/1.JPG",
      "/0_helpers/Spotovi/Đamija/2.JPG",
      "/0_helpers/Spotovi/Đamija/3.JPG",
      "/0_helpers/Spotovi/Đamija/4.JPG",
      "/0_helpers/Spotovi/Đamija/5.JPG",
      "/0_helpers/Spotovi/Đamija/5.JPG"
    ]
  }
];

const markerIcon = new L.Icon({
  iconUrl: require("../../pins/red_pin.png"),
  iconSize: [35, 45]
});

export default function SpotsContainer() {
  return Spots.map((spot, index) => {
    return (
      <div key={index}>
        <Marker position={spot.Coordinates} icon={markerIcon}>
          <Popup>{spot.Name}</Popup>
        </Marker>
      </div>
    );
  });
}
