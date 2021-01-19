// ** SEARCH COMPONENT **

import React, { useState, useEffect } from "react";

// api
import { fetchData } from "../../api/fetchData";

export const Search = ({
  setSearchResults,
  searchTerm,
  setSearchTerm,
  setIsLoading,
}) => {
  const [submitDelay, setSubmitDelay] = useState(true);

  const searchChange = (e) => {
    setSubmitDelay(true);
    setSearchTerm(e.target.value);
    // delayed auto-submit
    window.setTimeout(() => {
      setSubmitDelay(false);
    }, 2000);
  };

  useEffect(() => {
    if (searchTerm.length && !submitDelay) {
      setIsLoading(true);
      fetchData({ searchTerm })
        .then((res) => {
          console.log("res: ", res.data.Search);
          setSearchResults(res.data.Search);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    }
  }, [searchTerm, submitDelay, setIsLoading, setSearchResults]);

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
