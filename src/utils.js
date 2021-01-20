// ** UTILITY/HELPER FUNCTIONS **

const updateResSession = (sessionName, movieToUpdate, isAddingNomination) => {
  // sessionName: name of the session to update
  // movieToUpdate: the movie we are adding or removing the 'nom' property on
  // isAddingNomination: bool => adding or removing a nomination?

  // grab the current session data
  let oldCache = JSON.parse(window.sessionStorage.getItem(sessionName));

  // add or remove the 'nom' prop from movie object
  let newCache = oldCache.map((result) => {
    if (result.imdbID === movieToUpdate.imdbID) {
      isAddingNomination ? result.nom = true : delete result.nom;
    }
    return result;
  });
  // update new session data
  return window.sessionStorage.setItem(sessionName, JSON.stringify(newCache));
};

export { updateResSession };
