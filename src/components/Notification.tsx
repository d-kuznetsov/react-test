import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ThemeContext } from "../context";

interface Props {
  text: string;
}

function Notification({ text }: Props) {
  const theme = useContext(ThemeContext);
  const notificationNode = document.querySelector(".App-notification");
  if (notificationNode) {
    return ReactDOM.createPortal(
      <div className="Notification" style={{ background: theme }}>
        {text}
      </div>,
      notificationNode
    );
  } else {
    return null;
  }
}

export default Notification;
