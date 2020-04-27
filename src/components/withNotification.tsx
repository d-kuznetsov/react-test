import React, { useState } from "react";
import Notification from "./Notification";

export interface Props {
  showNotification?: (text: string) => void | undefined;
  [propName: string]: any;
}

const TIME_TO_SHOW = 3000;

function withNotifacation(Component: React.FunctionComponent<Props>) {
  return function (props: { [propName: string]: any }) {
    //@ts-ignore
    const [notification, showNotification] = useState("");
    const showTemporaryNotification = (text: string) => {
      showNotification(text);
      setTimeout(() => {
        showNotification("");
      }, TIME_TO_SHOW);
    };
    return (
      <React.Fragment>
        <Component {...props} showNotification={showTemporaryNotification} />
        {notification && <Notification text={notification} />}
      </React.Fragment>
    );
  };
}

export default withNotifacation;
