import React, { useState, useEffect } from "react";

// components
import { Loader, Search, Results, Nominations } from "./components";

// utils
import { updateResAndSession } from "./utils";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // persist nominations in localstorage if exists
  const [nominations, setNominations] = useState(
    window.localStorage.getItem("nominations").length
      ? window.JSON.parse(localStorage.getItem("nominations"))
      : []
  );
  const [searchResults, setSearchResults] = useState([]);

  const nominateMovie = (movie) => {
    // update nominations
    movie.nom = true;
    setNominations([...nominations, movie]);

    // update the search results to reflect if nominated or not
    updateResAndSession(searchTerm, movie, true);
  };

  const removeNominee = (nominee) => {
    // update nominations
    let temp = nominations.filter((nomItem) => {
      return nomItem.imdbID !== nominee.imdbID;
    });
    setNominations(temp);

    // update the search results to reflect if nominated or not
    updateResAndSession(searchTerm, nominee, false);
  };

  useEffect(() => {
    window.localStorage.setItem("nominations", JSON.stringify(nominations));
  }, [nominations]);

  return (
    <div className="App">
      <h1>Movie Awards Nominator</h1>

      {isLoading && <Loader />}
      <Search
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
