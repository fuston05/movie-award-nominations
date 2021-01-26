// ** PAGINATION COMPONENT **
import React from "react";

export const Pagination = ({ page, setPage, totalPages }) => {
  
  return (
    <div data-testid="paginationCont" className="paginationCont">
      <p
        data-testid="prevArrow"
        className={`paginationButton ${page === 1 ? "isDisabled" : null}`}
        onClick={() => (page -1 > 0) ? setPage(page-1) : null}
      >
        &laquo; Prev
      </p>
      <p data-testid="page"> {page} </p>
      <p
        data-testid="nextArrow"
        className={`paginationButton ${
          page + 1 === Math.ceil(totalPages / 10) ? "isDisabled" : null
        }`}
        onClick={() => (page + 1 < Math.ceil(totalPages / 10) ? setPage(page+1) : null)}
      >
        Next &raquo;
      </p>
    </div>
  );
};
