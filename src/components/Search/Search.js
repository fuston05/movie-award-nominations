// ** SEARCH COMPONENT **

import React, { useState, useEffect } from "react";

// api
import { fetchData } from "../../api/fetchData";

export const Search = ({
  setSearchResults,
  searchTerm,
  setSearchTerm,
  setIsLoading,
  nominations
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
      // if searchTerm in session cache, use cached data instead
      if (window.sessionStorage.getItem(searchTerm)) {
        setIsLoading(false);
        return setSearchResults(
          JSON.parse(window.sessionStorage.getItem(searchTerm))
        );
      }

      fetchData(searchTerm)
        .then((res) => {
          console.log('res: ', res.data.Search)
          // stop the loading spinner
          setIsLoading(false);
          if (res.data.Search && res.data.Search.length) {
            setSearchResults(res.data.Search);
            // cache results for searchTerm in a session
            window.sessionStorage.setItem(
              searchTerm,
              JSON.stringify(res.data.Search)
            );
          } else {
            setSearchResults([]);
          }
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
