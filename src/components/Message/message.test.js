// ** MESSAGE COMPONENT TEST FILE **

import React from "react";
import { render, fireEvent } from "@testing-library/react";
// components
import { Message } from "./Message";

describe("Message component", () => {
  it("renders in the DOM", () => {
    const { getByTestId } = render(
      <Message message="test message" setIsMessage={() => true} />
    );
    expect(getByTestId("messageCont")).toBeInTheDocument();
  });

  it("renders text passed in props", () => {
    const { getByTestId } = render(
      <Message message="test message" setIsMessage={() => true} />
    );
    expect(getByTestId("messageCont")).toHaveTextContent("test");
  });

  it('changes "isMessage" var when "X" button is clicked', () => {
    // mock our state
    let isMessage = true;
    const setIsMessage = () => isMessage= false;

    const { getByTestId } = render(
      <Message message="test" setIsMessage={setIsMessage} />
    );
    const btn = getByTestId("closeBtn");
    expect(btn).toHaveTextContent("X");
    // click the 'X', close button
    fireEvent.click(btn);
    expect(isMessage).toEqual(false);
  });
});
