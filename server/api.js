import fetch from "node-fetch";
import { URL, URLSearchParams } from "url";

const baseURL = process.env.BASE_URL + "/places";

const searchPlaces = (latitude, longitude) => {
  const url = new URL("https://api.foursquare.com/v3/places/search");

  const params = new URLSearchParams();
  params.append("ll", `${latitude},${longitude}`);

  url.search = params;

  return fetch(url, {
    headers: {
      Authorization: "fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE=",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

const getPlacePhotos = (placeId, name) => {
  const url = new URL(`https://api.foursquare.com/v3/places/${placeId}/photos`);

  return fetch(url, {
    headers: {
      Authorization: "fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE=",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const finalData = {
        photos: data,
        name,
      };

      return finalData;
    })
    .catch((err) => console.log(err));
};

export default {
  searchPlaces,
  getPlacePhotos,
};
