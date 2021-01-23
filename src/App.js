import React, { useState, useEffect } from "react";

// components
import { Loader, Search, Results, Nominations } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // persist nominations in localstorage if exists
  const [nominations, setNominations] = useState(
    window.localStorage.getItem("nominations") &&
      window.localStorage.getItem("nominations").length
      ? window.JSON.parse(localStorage.getItem("nominations"))
      : []
  );
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const nominateMovie = (movie) => {
    // update nominations
    setNominations([...nominations, movie]);
  };

  const removeNominee = (nominee) => {
    // update nominations
    let temp = nominations.filter((nomItem) => {
      return nomItem.imdbID !== nominee.imdbID;
    });

    setNominations(temp);
  };

  useEffect(() => {
    nominations &&
      window.localStorage.setItem("nominations", JSON.stringify(nominations));
  }, [nominations]);

  return (
    <div className="App">
      <h1>Movie Awards Nominator</h1>
      {isLoading && <Loader />}
      <Search
        page={page}
        setPage= {setPage}
        setTotalPages={setTotalPages}
        nominations={nominations}
        setSearchResults={setSearchResults}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      {/* lower container */}
      <section className="results-noms-cont">
        <Results
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          nominateMovie={nominateMovie}
          nominations={nominations}
          setNominations={setNominations}
          searchTerm={searchTerm}
          searchResults={searchResults}
        />

        <Nominations
          removeNominee={removeNominee}
          nominations={nominations}
          setNominations={setNominations}
        />
      </section>
    </div>
  );
}

export default App;
