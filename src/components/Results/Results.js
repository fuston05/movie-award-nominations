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
      {console.log('searchResults: ', searchResults)}
      <div className="moviesCont">
        {searchResults &&
          searchResults.map((movie) => {
            return (
              <div className="movieCard" key={movie.imdbID}>
                <span className="movieInfo">{movie.Title} - </span>
                <span className= 'movieInfo movieYear'>{movie.Year}</span>
                <button onClick= {() => nominateMovie(movie)} className= 'nominateBtn' disabled={nominations && movie.nom === true}>Nominate</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
