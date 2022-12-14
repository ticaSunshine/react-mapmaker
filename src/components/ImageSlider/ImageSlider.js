import React, { useState, useEffect } from "react";
import SpotsContainer from "../MapComponents/SpotsContainer";
import "./ImageSlider.css";
import spots from "../api/spots.json";
import Services from "../pages/Services";

const Thumbnail = ({ arr, image, index }) => {
  return (
    <div className="tumbnail">
      {arr &&
        arr.map((imgsrc, i) => (
          <img
            key={i}
            alt="imagetumbanil"
            height="50"
            src={imgsrc}
            onClick={() => image(i)}
            className={index === i ? "active" : ""}
          />
        ))}
    </div>
  );
};

const SLideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs && imgs[index]} alt="img" />
      <div className="actions">
        <button onClick={prev}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  );
};

export default function ImageSlider(props) {
  let activeMarker = <Services>{props.activeMarker}</Services>;
  console.log(activeMarker);

  return (
    <div className="imageSlider">
      <h1>SlideShow</h1>

      <SLideshow imgs={activeMarker.props.children.Fotke} />
    </div>
  );
}

/*[
          "https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
          "https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
          "https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
          "https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
          "https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
          "https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
          "https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500"
        ]*/
/*<Services>{props.activeMarker.spot.Fotke}</Services>*/
