import React, { useState } from "react";

function Error() {
  const [error, setError] = useState(false);
  const handleErrorClick = () => {
    setError(true);
  };

  if (error) {
    throw Error;
  } else {
    return (
      <fieldset className="Error">
        <div className="Error-text">No error</div>
        <button className="Error-errorButton" onClick={handleErrorClick}>
          Throw error
        </button>
      </fieldset>
    );
  }
}

export default Error;
