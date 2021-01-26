// ** RESULTS COMPONENT **

import React from "react";
// components
import { Pagination } from "../Pagination/Pagination";

export const Results = ({
  searchTerm,
  nominations,
  nominateMovie,
  searchResults,
  page,
  setPage,
  totalPages,
  isNomLimit,
}) => {
  return (
    <div data-testid= 'resultsCont' className="resultsCont">
      <h2 data-testid= 'h2'>
        Results for
        {searchTerm ? ` '${searchTerm}'` : " ..."}
      </h2>
      <div data-testid= 'moviesCont' className="moviesCont">
        {searchResults.length > 0 && (
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        )}

        {searchResults &&
          searchResults.map((movie) => {
            return (
              <div data-testid= 'movieCard' className="movieCard" key={movie.imdbID}>
                <span data-testid= 'movieTitle' className="movieInfo">{movie.Title} - </span>
                <span data-testid= 'movieYear' className="movieInfo movieYear">{movie.Year}</span>
                {(nominations &&
                  JSON.stringify(nominations).includes(
                    JSON.stringify(movie)
                  )) ||
                isNomLimit ? (
                  <button data-testid= 'nomButton' disabled>Nominate</button>
                ) : (
                  <button data-testid= 'nomButton' onClick={() => nominateMovie(movie)}>Nominate</button>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
