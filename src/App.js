import React, { useState } from "react";

// components
import { Loader, Search, Results, Nominations } from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [nominations, setNominations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const resultsCache = {};
  return (
    <div className="App">
      <h1>Movie Awards Nominator</h1>

      {isLoading && <Loader />}
      <Search
        setSearchResults={setSearchResults}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        resultsCache= {resultsCache}
      />
      {/* lower container */}
      <section className="results-noms-cont">
        <Results
          nominaitons={nominations}
          setNominations={setNominations}
          searchTerm={searchTerm}
          searchResults={searchResults}
        />

        <Nominations nominations={nominations} />
      </section>
    </div>
  );
}

export default App;
