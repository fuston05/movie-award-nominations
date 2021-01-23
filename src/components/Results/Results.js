// ** RESULTS COMPONENT **

import React from "react";

export const Results = ({
  searchTerm,
  nominations,
  nominateMovie,
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
                <span className="movieInfo">{movie.Title} - </span>
                <span className="movieInfo movieYear">{movie.Year}</span>
                {nominations && JSON.stringify(nominations).includes(JSON.stringify(movie))
                  ? (
                    <button disabled>Nominate</button>
                  )
                  : <button onClick= {() => nominateMovie(movie)}>Nominate</button>
                }
              </div>
            );
          })}
      </div>
    </div>
  );
};
