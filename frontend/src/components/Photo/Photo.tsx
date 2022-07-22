import * as React from "react";
import "./Photo.css";

interface PhotoProps {
  imagePath: string;
  name: string;
}

function Photo({ imagePath, name }: PhotoProps) {
  return (
    <div
      className="app-photo"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 80%, black 99%), url(${imagePath})`,
        width: "250px",
        height: "250px",
      }}
    >
      <span className="app-photo-name">{name}</span>
    </div>
  );
}

export default Photo;
