import * as React from "react";
import "./ErrorMsg.css";

interface ErrorMsgProps {
  text: string;
}

function ErrorMsg({ text }: ErrorMsgProps) {
  return (
    <React.Fragment>
      {text ? (
        <p className="app-error-msg">{text}</p>
      ) : (
        <p className="app-error-msg">Whoops... there seems to be an error</p>
      )}
    </React.Fragment>
  );
}

export default ErrorMsg;
