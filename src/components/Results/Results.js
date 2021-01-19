// ** RESULTS COMPONENT **

import React from 'react'

export const Results = ({searchTerm}) => {
  return (
    <div>
      <h2>{`Results for ${searchTerm || "..."}`}</h2>
    </div>
  )
}
