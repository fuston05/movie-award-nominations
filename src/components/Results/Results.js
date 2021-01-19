// ** RESULTS COMPONENT **

import React from "react";

export const Results = ({
  searchTerm,
  nominations,
  setNominations,
  searchResults,
}) => {
  return (
    <div className="resultsCont">
      <h2>
        Results for
        {searchTerm ? ` '${searchTerm}'` : " ..."}
      </h2>

      <div className="moviesCont">
        {searchResults &&
          searchResults.map((movie) => {
            return (
              <div className="movieCard" key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                {nominations && nominations.includes(movie) ? (
                  <button disabled>Nominate</button>
                ) : (
                  <button>Nominate</button>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
