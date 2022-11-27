import React from "react";

import "./FullscreenBtn.css";
import "./MapContainer.css";

export default function FullscreenBtn({ fullScreen, setFullScreen }) {
  const toggle = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <button
      onClick={toggle}
      className={"toggle--button " + (fullScreen ? "toggle--close" : "")}
    ></button>
  );
}
