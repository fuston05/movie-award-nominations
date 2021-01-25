// ** NOMINATIONS COMPONENT **

import React from "react";

export const Nominations = ({ nominations, removeNominee }) => {
  return (
    <div className="resultsCont" data-testid="resultsCont">
      <h2>Nominations</h2>
      <div className="moviesCont" data-testid="moviesCont">
        {nominations &&
          nominations.map((nominee) => {
            return (
              <div data-testid= 'movieCard' className="movieCard" key={nominee.imdbID}>
                <span data-testid= 'movieTitle' className="movieInfo">{nominee.Title} - </span>
                <span data-testid= 'movieYear' className="movieInfo movieYear">{nominee.Year}</span>
                <button onClick={() => removeNominee(nominee)}>Remove</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
