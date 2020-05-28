import React from "react";
import { render } from "@testing-library/react";
import SeasonWinners from "./SeasonWinners";

let component;
let getByTestId;

beforeEach(() => {
  component = render(
    <SeasonWinners
      winners={[
        { givenName: "jake", familyName: "the dog", points: "145", wins: "9" },
      ]}
    />
  );
  getByTestId = component.getByTestId;
});

describe("SeasonWinner component", () => {
  it("renders the page", () => {
        let element = getByTestId('season-winners-page');
        expect(element).toBeTruthy();
  });

  it("renders the page title", () => {
        let element = getByTestId('page-title');
        expect(element).toBeTruthy();
    });

    it("renders the table", () => {
        let element = getByTestId('season-winners-table');
        expect(element).toBeTruthy();
    });
});
