import React from "react";
import { ListNames } from "@/types";
import { CountryItem } from "./CounteryItem";
import { render } from "@testing-library/react";

describe("CountryItem test", () => {
  const componentProps = {
    title: "USD",
    list: ["USA", "Canada"],
    listName: ListNames.currencyList,
  };

  test("CountryItem is rendering", () => {
    const { container } = render(<CountryItem {...componentProps} />);
    expect(container).toMatchSnapshot();
  });

  test("CountryItem contains correct information", () => {
    const { getByText } = render(<CountryItem {...componentProps} />);

    expect(getByText("USD")).toBeTruthy();
    expect(getByText("USA")).toBeTruthy();
    expect(getByText("Canada")).toBeTruthy();
    expect(getByText("off")).toBeTruthy();
  });
});
