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
  };

  const removeNominee = (nominee) => {
    let temp = nominations.filter((nomItem) => {
      return nomItem.imdbID !== nominee.imdbID;
    });
    setNominations(temp);
    // update nom property on results list
    searchResults.map(result => {
      if (result.imdbID === nominee.imdbID) {
        delete result.nom;
      }
    })
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
