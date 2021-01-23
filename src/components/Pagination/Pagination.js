// ** PAGINATION COMPONENT **
import React from "react";

export const Pagination = ({ page, setPage, totalPages }) => {

  const prevPage = () => {
    if ((page - 1) > 0) {
      setPage(page-1)
    }
  }

  const nextPage = () => {
    if ((page + 1) < Math.ceil(totalPages/10)) {
      setPage(page +1);
    }
  }

  return (
    <div className="paginationCont">
      <p className= 'paginationButton' onClick= {() => prevPage()}>&laquo; Prev</p>
      <p> {page} </p>
      <p className= 'paginationButton' onClick= {() => nextPage()}>Next &raquo;</p>
    </div>
  );
};
