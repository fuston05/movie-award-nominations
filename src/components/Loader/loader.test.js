// ** LOADER COMPONENT TEST FILE **
import React from "react";
import { render } from "@testing-library/react";
// components
import { Loader } from "./Loader";

describe("Loader component", () => {
  it("renders the text passed in as props", () => {
    const text = "test";
    const { getByText } = render(<Loader text={text} />);
    expect(getByText(text)).toBeInTheDocument();
  });

  it("renders an image", () => {
    const { queryByTestId } = render(<Loader text="test" />);
    expect(queryByTestId("loaderImg")).toBeInTheDocument();
  });
});
