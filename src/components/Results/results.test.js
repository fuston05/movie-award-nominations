// ** RESULTS COMPONENT TEST FILE **

import React from "react";

// components
import { Results } from "./Results";
import { render } from "@testing-library/react";

describe("Results", () => {
  let searchTerm;
  let nominations;
  let nominateMovie;
  let searchResults;
  let page;
  let setPage;
  let totalPages;
  let isNomLimit;

  beforeAll(() => {
    // set up props
    searchTerm = "Ram";
    nominations = [{ imdbID: 1, Title: "testTitle", Year: "1978" }];
    nominateMovie = (movie) => {
      [...nominations, movie];
    };
    searchResults = [
      { imdbID: 1, Title: "testTitle", Year: "1978" },
      { imdbID: 2, Title: "testTitle2", Year: "2020" },
    ];
    page = 1;
    setPage = (pageNum) => {
      return (page = pageNum);
    };
    totalPages = 143;
    isNomLimit = false;
  });

  it("renders without crashing", () => {
    const { getByTestId } = render(
      <Results
        searchTerm={searchTerm}
        nominations={nominations}
        nominateMovie={nominateMovie}
        searchResults={searchResults}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        isNomLimit={isNomLimit}
      />
    );

    expect(getByTestId("resultsCont")).toBeInTheDocument();
  });

  it("renders the H2 heading", () => {
    const { getByTestId } = render(
      <Results
        searchTerm={searchTerm}
        nominations={nominations}
        nominateMovie={nominateMovie}
        searchResults={searchResults}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        isNomLimit={isNomLimit}
      />
    );

    expect(getByTestId("h2")).toBeInTheDocument();
  });

  it("renders the H2 with proper text based on empty searchTerm", () => {
    searchTerm = "";
    const { getByTestId } = render(
      <Results
        searchTerm={searchTerm}
        nominations={nominations}
        nominateMovie={nominateMovie}
        searchResults={searchResults}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        isNomLimit={isNomLimit}
      />
    );

    expect(getByTestId("h2")).toHaveTextContent("Results for ...");
  });

  it("renders results for the searchTerm entered", () => {
    searchTerm = "Ram";

    const { getByTestId } = render(
      <Results
        searchTerm={searchTerm}
        nominations={nominations}
        nominateMovie={nominateMovie}
        searchResults={searchResults}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        isNomLimit={isNomLimit}
      />
    );

    expect(getByTestId("h2")).toHaveTextContent(`Results for '${searchTerm}'`);
  });

  it('renders the "moviesCont" div', () => {
    const { getByTestId } = render(
      <Results
        searchTerm={searchTerm}
        nominations={nominations}
        nominateMovie={nominateMovie}
        searchResults={searchResults}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        isNomLimit={isNomLimit}
      />
    );
    expect(getByTestId("moviesCont")).toBeInTheDocument();
  });

  it("renders Pagination child component", () => {
    const { getByTestId } = render(
      <Results
        searchTerm={searchTerm}
        nominations={nominations}
        nominateMovie={nominateMovie}
        searchResults={searchResults}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        isNomLimit={isNomLimit}
      />
    );
    expect(getByTestId("moviesCont")).toContainElement(
      getByTestId("paginationCont")
    );
  });

  it('renders a "movieCard" for each result (2)', () => {
    const { getAllByTestId } = render(
      <Results
        searchTerm={searchTerm}
        nominations={nominations}
        nominateMovie={nominateMovie}
        searchResults={searchResults}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        isNomLimit={isNomLimit}
      />
    );
    expect(getAllByTestId("movieCard")).toHaveLength(searchResults.length);
  });

  it('renders a "movieTitle" for each result', () => {
    const { getAllByTestId } = render(
      <Results
        searchTerm={searchTerm}
        nominations={nominations}
        nominateMovie={nominateMovie}
        searchResults={searchResults}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        isNomLimit={isNomLimit}
      />
    );

    expect(getAllByTestId("movieTitle")).toHaveLength(searchResults.length);
  });

  it('renders a "movieYear" for each result', () => {
    const { getAllByTestId } = render(
      <Results
        searchTerm={searchTerm}
        nominations={nominations}
        nominateMovie={nominateMovie}
        searchResults={searchResults}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        isNomLimit={isNomLimit}
      />
    );

    expect(getAllByTestId("movieYear")).toHaveLength(searchResults.length);
  });

  it('renders a "nomButton" for each result', () => {
    const { getAllByTestId } = render(
      <Results
        searchTerm={searchTerm}
        nominations={nominations}
        nominateMovie={nominateMovie}
        searchResults={searchResults}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        isNomLimit={isNomLimit}
      />
    );

    expect(getAllByTestId("nomButton")).toHaveLength(searchResults.length);
  });
});
