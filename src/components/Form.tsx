import React, { useRef, SyntheticEvent, useContext } from "react";
import { ThemeContext } from "../context";

interface Props {
  showNotification?: (text: string) => void;
}

function Form(props: Props = {}) {
  const textArea = useRef(null);
  const theme = useContext(ThemeContext);
  const { showNotification } = props;
  const handleSendClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    //@ts-ignore
    const text = textArea.current.value;

    if (showNotification) {
      showNotification(text);
    } else {
      alert(text);
    }
    e.preventDefault();
  };

  return (
    <form className="Form">
      <fieldset className="Form-fieldset">
        <textarea
          ref={textArea}
          className="Form-textArea"
          placeholder="Enter a message"
        ></textarea>
        <button
          onClick={handleSendClick}
          className="Form-sendButton"
          style={{ background: theme }}
        >
          Send
        </button>
      </fieldset>
    </form>
  );
}

export default Form;
