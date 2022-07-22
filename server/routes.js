import express from "express";
import API from "./api.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    const err = new Error("Latitude or longitude not present");
    err.status = 400;

    return next(err);
  }

  try {
    const places = await API.searchPlaces(latitude, longitude);

    const placesMapped = places.results.map((res) => {
      return {
        id: res.fsq_id,
        name: res.name,
      };
    });

    const placesPhotosCall = placesMapped.map((res) =>
      API.getPlacePhotos(res.id, res.name)
    );

    const placesPhotos = await Promise.all(placesPhotosCall);

    const placesFirstPhoto = placesPhotos.map((res) => {
      const firstPhoto = res.photos[0];

      return {
        id: firstPhoto.id,
        imagePath: firstPhoto.prefix + "250x250" + firstPhoto.suffix,
        name: res.name,
      };
    });

    return res.json(placesFirstPhoto);
  } catch (err) {
    return next(err);
  }
});

export default router;
