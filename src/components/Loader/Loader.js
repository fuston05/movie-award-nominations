import React from "react";

// takes optional text to display under the spinner
export const Loader = ({ text }) => {
  return (
    <div className="loaderCont">
      <div className="imgCont">
        <img data-testid= 'loaderImg' src="/images/loader.gif" alt="loading spinner" />
      </div>

      {text && <p>{text}</p>}
    </div>
  );
};
