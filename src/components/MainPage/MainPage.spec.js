import React from "react";
import { render } from "@testing-library/react";
import MainPage from "./MainPage";
import { BrowserRouter } from "react-router-dom";

describe("MainPage component", () => {
  it("renders the page", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <MainPage
          champions={[
            {
              givenName: "jake",
              familyName: "the dog",
              championshipYear: "2005",
            },
          ]}
        />
      </BrowserRouter>
    );
    expect(getByTestId("landing-page")).toBeInTheDocument();
  });
});
