// ** SEARCH COMPONENT **

import React, { useState, useEffect } from "react";

export const Search = ({ searchTerm, setSearchTerm }) => {
  const [submitDelay, setSubmitDelay] = useState(true);

  const searchChange = (e) => {
    setSubmitDelay(true);
    setSearchTerm(e.target.value);
    window.setTimeout(() => {
      setSubmitDelay(false);
    }, 2000);
  };

  useEffect(() => {
    if (searchTerm.length && !submitDelay) {
      console.log("submitted!");
      // axios call goes here
    }
  }, [searchTerm, submitDelay]);

  return (
    <div className="searchCont">
      <label htmlFor="searchInput">Movie Title</label>

      <input
        value={searchTerm}
        onChange={(e) => searchChange(e)}
        placeholder="Search"
        id="searchInput"
      />
    </div>
  );
};
