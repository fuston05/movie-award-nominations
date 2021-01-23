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
  setPage,
  setTotalPages,
}) => {
  const [submitDelay, setSubmitDelay] = useState(true);

  const searchChange = (e) => {
    // start the loading spinner if there's a searchTerm
    setSubmitDelay(true);
    setSearchTerm(e.target.value);
    // delayed auto-submit
    window.setTimeout(() => {
      setSubmitDelay(false);
      setPage(1)
      // stop the loading spinner
    }, 800);
  };

  useEffect(() => {
    if (!submitDelay) {
      setIsLoading(true);
      fetchData(searchTerm, page)
        .then((res) => {
          if (res.data.Search && res.data.Search.length) {
            setTotalPages(res.data.totalResults);
            setSearchResults(res.data.Search);
            // stop the loading spinner
          } else {
            setSearchResults([])
          }
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log("Error: ", err);
        });
    }
  }, [
    searchTerm,
    submitDelay,
    setIsLoading,
    setSearchResults,
    page,
    setTotalPages,
  ]);

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
