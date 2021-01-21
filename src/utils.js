// ** UTILITY/HELPER FUNCTIONS **

const updateResAndSession = (cachedResults, setCachedResults, movieToUpdate, isAddingNomination, page) => {
  // movieToUpdate: the movie we are adding or removing the 'nom' property on
  // isAddingNomination: bool => adding or removing a nomination?

  // add or remove the 'nom' prop from movie object
  let newCache = cachedResults && cachedResults[page].map((result) => {
    if (result.imdbID === movieToUpdate.imdbID) {
      isAddingNomination ? result.nom = true : delete result.nom;
    }
    return result;
  });
  console.log('result from utils: ', newCache)
  // update new session data
  setCachedResults({[page]: newCache})
};

export { updateResAndSession };
