import React, { useState } from "react";

// components
import { Loader, Search, Results, Nominations } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [nominations, setNominations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const nominateMovie = (movie) => {
    movie.nom = true;
    setNominations([...nominations, movie]);

    // update cached search results 'nom' prop
    let cachedResults = JSON.parse(window.sessionStorage.getItem(searchTerm));
    let newCache = cachedResults.map((result) => {
      if (result.imdbID === movie.imdbID) {
        result.nom = true;
      }
      return result;
    });
    // update session search results cache
    window.sessionStorage.setItem(searchTerm, JSON.stringify(newCache));
  };

  const removeNominee = (nominee) => {
    let temp = nominations.filter((nomItem) => {
      return nomItem.imdbID !== nominee.imdbID;
    });
    setNominations(temp);
    
    // update 'nom' property in search results
    let cachedResults = JSON.parse(window.sessionStorage.getItem(searchTerm));
    let newCache= cachedResults.map((result) => {
      if (result.imdbID === nominee.imdbID) {
        delete result.nom;
      }
      return result;
    });
    // update session search results cache
    window.sessionStorage.setItem(searchTerm, JSON.stringify(newCache));
  };

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
