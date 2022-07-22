import * as React from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  handleClick: () => void;
}

function Button({ title, handleClick }: ButtonProps) {
  return (
    <div className="app-search-button" onClick={handleClick}>
      <span>{title}</span>
    </div>
  );
}

export default Button;
