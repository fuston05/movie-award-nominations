// ** SEARCH COMPONENT **

import React, { useState, useEffect } from "react";

// api
import { fetchData } from "../../api/fetchData";

export const Search = ({ setSearchResults, searchTerm, setSearchTerm, isLoading, setIsLoading }) => {
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
      setIsLoading(true);
      fetchData({ searchTerm })
        .then(res => {
          console.log('res: ', res.data.Search);
          setSearchResults(res.data.Search);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
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
