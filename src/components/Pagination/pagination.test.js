// ** pagination test file **

import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// components
import { Pagination } from "./Pagination";

describe("pagination", () => {
  let page;
  let setPage;
  let totalPages;
  beforeAll(() => {
    page = 1;
    totalPages = 143;
    setPage = (pageNum) => {
      return (page = pageNum);
    };
  });

  it("renders without crashing", () => {
    const { getByTestId } = render(
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    );

    expect(getByTestId("paginationCont")).toBeInTheDocument();
  });

  it('renders "prev" arrow', () => {
    const { getByTestId } = render(
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    );

    expect(getByTestId("prevArrow")).toBeInTheDocument();
  });

  it("renders page number", () => {
    const { getByTestId } = render(
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    );

    expect(getByTestId("page")).toHaveTextContent(1);
  });

  it('renders "next" arrow', () => {
    const { getByTestId } = render(
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    );

    expect(getByTestId("nextArrow")).toBeInTheDocument();
  });

  it('renders NEXT page num when "next" button is clicked', () => {
    const { getByTestId } = render(
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    );

    const next = getByTestId('nextArrow');
    userEvent.click(next);
    expect(page).toEqual(2);
  });

  it('renders PREV page num when "prev" button is clicked', () => {
    const { getByTestId } = render(
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    );

    const prev = getByTestId('prevArrow');
    userEvent.click(prev);
    expect(page).toEqual(1);
  });
});
