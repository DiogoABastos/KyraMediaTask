import dotenv from "dotenv";
dotenv.config();

import express from "express";
import routes from "./routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/places", routes);

app.use(async (req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;

  next(err);
});

app.use(async (err, req, res, next) => {
  res.status(err.status || 500);

  res.send({
    error: {
      status: err.status || 500,
      error: err.message,
    },
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
