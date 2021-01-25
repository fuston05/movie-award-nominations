// ** NOMINATIONS TEST FILE **
import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// components
import { Nominations } from "./Nominations";

describe("Nominations", () => {
  it("renders without crashing", () => {
    const nominations = [
      { imdbID: 1, Title: "testTitle1", Year: "1978" },
      { imdbID: 2, Title: "testTitle2", Year: "2020" },
    ];
    const nominee = { Title: "testTitle2", Year: "2020" };

    const { getByTestId } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );
    expect(getByTestId("resultsCont")).toBeInTheDocument();
  });

  it("renders an H2 title", () => {
    const nominations = [
      { imdbID: 1, Title: "testTitle1", Year: "1978" },
      { imdbID: 2, Title: "testTitle2", Year: "2020" },
    ];
    const nominee = { Title: "testTitle2", Year: "2020" };

    const { getByText } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );
    expect(getByText("Nominations")).toBeInTheDocument();
  });

  it("renders 'movieCont' ", () => {
    const nominations = [
      { imdbID: 1, Title: "testTitle1", Year: "1978" },
      { imdbID: 2, Title: "testTitle2", Year: "2020" },
    ];
    const nominee = { Title: "testTitle2", Year: "2020" };

    const { getByTestId } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );
    expect(getByTestId("moviesCont")).toBeInTheDocument();
  });

  it("renders a 'movieCard' for each movie passed in ", () => {
    const nominations = [
      { imdbID: 1, Title: "testTitle1", Year: "1978" },
      { imdbID: 2, Title: "testTitle2", Year: "2020" },
    ];
    const nominee = { Title: "testTitle2", Year: "2020" };

    const { queryAllByTestId } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );

    const result = queryAllByTestId("movieCard");
    expect(result).toHaveLength(2);
  });

  it("renders a 'movieTitle' for each movie passed in ", () => {
    const nominations = [
      { imdbID: 1, Title: "testTitle1", Year: "1978" },
      { imdbID: 2, Title: "testTitle2", Year: "2020" },
    ];
    const nominee = { Title: "testTitle2", Year: "2020" };

    const { queryAllByTestId } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );

    const result = queryAllByTestId("movieTitle");
    expect(result).toHaveLength(2);
  });

  it("renders a 'movieYear' for each movie passed in ", () => {
    const nominations = [
      { imdbID: 1, Title: "testTitle1", Year: "1978" },
      { imdbID: 2, Title: "testTitle2", Year: "2020" },
    ];
    const nominee = { Title: "testTitle2", Year: "2020" };

    const { queryAllByTestId } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );

    const result = queryAllByTestId("movieYear");
    expect(result).toHaveLength(2);
  });

  it("renders a 'Remove' button for each movie passed in ", () => {
    const nominations = [
      { imdbID: 1, Title: "testTitle1", Year: "1978" },
      { imdbID: 2, Title: "testTitle2", Year: "2020" },
    ];
    const nominee = { Title: "testTitle2", Year: "2020" };

    const { getAllByText } = render(
      <Nominations nominations={nominations} nominee={nominee} />
    );

    const result = getAllByText("Remove");
    expect(result).toHaveLength(2);
  });

  it("removes nominee from list when the 'Remove' button is clicked", () => {
    let nominations = [{ imdbID: 1, Title: "testTitle1", Year: "1978" }];

    const removeNominee = (nominee) => {
      // update nominations
      let temp = nominations.filter((nomItem) => {
        return nomItem.imdbID !== nominee.imdbID;
      });
      return (nominations = temp);
    };
    const { getByText } = render(
      <Nominations nominations={nominations} removeNominee={removeNominee} />
    );
    const button = getByText("Remove");
    // click the Remove button
    userEvent.click(button);
    expect(nominations).toHaveLength(0);
  });
});
