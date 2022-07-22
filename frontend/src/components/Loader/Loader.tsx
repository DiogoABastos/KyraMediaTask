import * as React from "react";
import "./Loader.css";

interface LoaderProps {
  text: string;
}

function Loader({ text }: LoaderProps) {
  return (
    <React.Fragment>
      {text ? (
        <p className="app-loader">{text}</p>
      ) : (
        <p className="app-loader">Loading...</p>
      )}
    </React.Fragment>
  );
}

export default Loader;
