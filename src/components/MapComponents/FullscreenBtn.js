import React from "react";
import { useState } from "react";
import "./FullscreenBtn.css";

export default function FullscreenBtn() {
  const [fullScreen, setFullScreen] = useState(false);

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
