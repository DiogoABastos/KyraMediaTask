import * as React from "react";
import "./Coordinates.css";

interface CoordinatesProps {
  latitude: number;
  longitude: number;
}

function Coordinates({ latitude, longitude }: CoordinatesProps) {
  return (
    <React.Fragment>
      {latitude && longitude ? (
        <p className="app-coordinates">
          ({latitude}, {longitude})
        </p>
      ) : (
        <p className="app-coordinates">(Searching..., Searching...)</p>
      )}
    </React.Fragment>
  );
}

export default Coordinates;
