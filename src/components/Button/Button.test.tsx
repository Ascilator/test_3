import React from "react";
import { Button } from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button test", () => {
  test("Button is rendering", () => {
    const { container } = render(
      <Button text="text" onClick={() => {}}></Button>
    );
    expect(container).toMatchSnapshot();
  });

  test("Button is clicking and displaing in the correct way", () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <Button text="text" onClick={handleClick}></Button>
    );

    const buttonElement = getByText("text");
    fireEvent.click(buttonElement);

    expect(getByText("text")).toBeTruthy();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
