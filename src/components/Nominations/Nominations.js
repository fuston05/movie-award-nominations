// ** NOMINATIONS COMPONENT **

import React from "react";

export const Nominations = ({ nominations }) => {
  return (
    <div className="resultsCont">
      <h2>Nominations</h2>

      <div className="moviesCont">
        {nominations &&
          nominations.map((nominee) => {
            return (
              <div className="movieCard" key={nominee.imdbID}>
                <span className="movieInfo">{nominee.Title} - </span>
                <span className="movieInfo movieYear">{nominee.Year}</span>
                <button>
                  Remove
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
