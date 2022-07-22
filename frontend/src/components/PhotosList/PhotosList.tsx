import * as React from "react";
import { PhotoEntity } from "../../models";
import { Photo } from "../Photo";
import "./PhotosList.css";

interface photosList {
  photos: PhotoEntity[];
}

function PhotosList({ photos }: photosList) {
  return (
    <div className="app-photos-list">
      {photos.map((photo: PhotoEntity) => {
        return (
          <Photo key={photo.id} imagePath={photo.imagePath} name={photo.name} />
        );
      })}
    </div>
  );
}

export default PhotosList;
