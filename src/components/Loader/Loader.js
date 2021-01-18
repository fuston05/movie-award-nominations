import React from "react";

// takes optional text to display under the spinner
export const Loader = ({text}) => {
  return (
    <div className="loaderCont">
      <img src="/images/loader.gif" alt="loading spinner" />

      {text && <p>{text}</p>}
    </div>
  );
};
