// ** NOMINATIONS TEST FILE **
import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// components
import { Nominations } from "./Nominations";

describe("Nominations", () => {
  // set up global vars for use in all tests
  let nominations;
  let nominee;
  beforeAll(() => {
    nominations = [
      { imdbID: 1, Title: "testTitle1", Year: "1978" },
      { imdbID: 2, Title: "testTitle2", Year: "2020" },
    ];
    nominee = { Title: "testTitle2", Year: "2020" };
  });

  it("renders without crashing", () => {
    const { getByTestId } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );
    expect(getByTestId("resultsCont")).toBeInTheDocument();
  });

  it("renders an H2 title", () => {
    const { getByText } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );
    expect(getByText("Nominations")).toBeInTheDocument();
  });

  it("renders 'movieCont' ", () => {
    const { getByTestId } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );
    expect(getByTestId("moviesCont")).toBeInTheDocument();
  });

  it("renders a 'movieCard' for each movie passed in ", () => {
    const { queryAllByTestId } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );

    const result = queryAllByTestId("movieCard");
    expect(result).toHaveLength(2);
  });

  it("renders a 'movieTitle' for each movie passed in ", () => {
    const { queryAllByTestId } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );

    const result = queryAllByTestId("movieTitle");
    expect(result).toHaveLength(2);
  });

  it("renders a 'movieYear' for each movie passed in ", () => {
    const { queryAllByTestId } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );

    const result = queryAllByTestId("movieYear");
    expect(result).toHaveLength(2);
  });

  it("renders a 'Remove' button for each movie passed in ", () => {
    const { getAllByText } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );

    const result = getAllByText("Remove");
    expect(result).toHaveLength(2);
  });

  it("removes nominee from list when the 'Remove' button is clicked", () => {
    const removeNominee = (nominee) => {
      // update nominations
      let temp = nominations.filter((nomItem) => {
        return nomItem.imdbID !== nominee.imdbID;
      });
      return (nominations = temp);
    };
    const { queryAllByText } = render(
      <Nominations nominations={nominations} removeNominee={removeNominee} />
    );
    const buttons = queryAllByText("Remove");
    // click the Remove button
    userEvent.click(buttons[0]);
    expect(nominations).toHaveLength(1);
  });
});
