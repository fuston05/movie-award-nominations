// ** SEARCH COMPONENT TEST FILE **
import React from "react";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
// components
import { Search } from "./Search";

describe("Search", () => {
  let searchResults;
  let setSearchResults;
  let searchTerm;
  let setSearchTerm;
  let isLoading;
  let setIsLoading;
  let page;
  let setPage;
  let totalPages;
  let setTotalPages;

  beforeAll(() => {
    searchResults = [
      { imdbID: 1, Title: "testTitle", Year: "1978" },
      { imdbID: 2, Title: "testTitle2", Year: "2020" },
    ];
    setSearchResults = (results) => {
      return (searchResults = results);
    };
    searchTerm = "Ram";
    setSearchTerm = (term) => {
      return (searchTerm = term);
    };
    isLoading = false;
    setIsLoading = (load) => {
      return (isLoading = load);
    };
    page = 1;
    setPage = (pageNum) => {
      return (page = pagenum);
    };
    totalPages = null;
    setTotalPages = () => {};
  });

  it("renders without crashing", () => {
    const { getByTestId } = render(<Search searchResults={searchResults} />);

    expect(getByTestId('searchCont')).toBeInTheDocument();
  });

  it("renders a label for the search field", () => {
    const { getByLabelText } = render(<Search searchResults={searchResults} />);

    expect(getByLabelText('Movie Title')).toBeInTheDocument();
  });

  it("renders a search input field", () => {
    const { getByPlaceholderText } = render(<Search searchResults={searchResults} />);

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it("seach input updates searchTerm when typed into", () => {
    const { getByPlaceholderText } = render(<Search setSearchTerm={setSearchTerm} searchResults={searchResults} />);
    
    const searchInput = getByPlaceholderText('Search');
    userEvent.type(searchInput, 'test');

    expect(getByPlaceholderText('Search')).toHaveValue('test')
  });

});
