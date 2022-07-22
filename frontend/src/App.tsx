import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import {
  Title,
  Coordinates,
  Button,
  PhotosList,
  Loader,
  ErrorMsg,
} from "./components";
import { CoordinatesEntity, PhotoEntity } from "./models";
import { getPhotos } from "./services";

function App() {
  const [coordinates, setCoordinates] = useState<CoordinatesEntity>({
    latitude: 0,
    longitude: 0,
  });
  const [photos, setPhotos] = useState<PhotoEntity[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setCoordinates({
          latitude,
          longitude,
        });
      },
      function (error) {
        return setError(true);
      }
    );
  }, []);

  useEffect(() => {
    if (!error && coordinates.latitude !== 0 && coordinates.longitude !== 0) {
      setLoading(true);
      getPhotos(coordinates).then((data: PhotoEntity[]) => {
        setPhotos(data);
        setLoading(false);
      });
    }
  }, [coordinates, error]);

  const handleClick = () => {
    console.log("To be implemented");
  };

  return (
    <div className="App">
      <Title />
      {error ? (
        <ErrorMsg text="Please turn on location services" />
      ) : (
        <Fragment>
          <Coordinates
            latitude={coordinates.latitude}
            longitude={coordinates.longitude}
          />
          <Button title="Search Location" handleClick={handleClick} />
          {loading ? (
            <Loader text="Searching for venues near you..." />
          ) : (
            <Fragment>
              {photos.length <= 0 ? (
                <ErrorMsg text="No photos available" />
              ) : (
                <PhotosList photos={photos} />
              )}
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  );
}

export default App;
