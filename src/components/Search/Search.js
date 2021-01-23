// ** SEARCH COMPONENT **

import React, { useState, useEffect } from "react";

// api
import { fetchData } from "../../api/fetchData";

export const Search = ({
  setSearchResults,
  searchTerm,
  setSearchTerm,
  setIsLoading,
  page,
}) => {
  const [submitDelay, setSubmitDelay] = useState(true);

  const searchChange = (e) => {
    // start the loading spinner if there's a searchTerm
    searchTerm.length && setIsLoading(true);
    setSubmitDelay(true);
    setSearchTerm(e.target.value);
    // delayed auto-submit
    window.setTimeout(() => {
      setSubmitDelay(false);
      // stop the loading spinner
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    if (!submitDelay) {

      fetchData(searchTerm, page)
        .then((res) => {
          // stop the loading spinner
          setIsLoading(false);
          if (res.data.Search && res.data.Search.length) {
            setSearchResults(res.data.Search);
          }
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    }
  }, [searchTerm, submitDelay, setIsLoading, setSearchResults, page]);

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
