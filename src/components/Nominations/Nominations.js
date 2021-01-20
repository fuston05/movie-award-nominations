// ** NOMINATIONS COMPONENT **

import React from "react";

export const Nominations = ({searchTerm, nominations, setNominations }) => {
  const removeNominee = (movie) => {
    let temp = nominations.filter((nominee) => {
      if (nominee.imdbID !== movie.imdbID) {
        delete nominee.nominations
      }
      return nominee.imdbID !== movie.imdbID
    });
    console.log('temp: ', temp)
    window.sessionStorage.setItem(searchTerm, JSON.stringify(temp))
    setNominations(temp);
  };

  return (
    <div className="resultsCont">
      <h2>Nominations</h2>
      {console.log('nominations: ', nominations)}
      <div className="moviesCont">
        {nominations &&
          nominations.map((nominee) => {
            return (
              <div className="movieCard" key={nominee.imdbID}>
                <span className="movieInfo">{nominee.Title} - </span>
                <span className="movieInfo movieYear">{nominee.Year}</span>
                <button onClick={() => removeNominee(nominee)}>Remove</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
