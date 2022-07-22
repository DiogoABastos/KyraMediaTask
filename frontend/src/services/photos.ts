import { CoordinatesEntity, PhotoEntity } from "../models";

export const getPhotos = (
  coordinates: CoordinatesEntity
): Promise<PhotoEntity[]> => {
  const url = new URL("http://localhost:5000/places");

  const params = new URLSearchParams();
  params.append("latitude", coordinates.latitude.toString());
  params.append("longitude", coordinates.longitude.toString());

  url.search = params.toString();

  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      throw res;
    })
    .catch((err) => {
      console.error(err);
    });
};
