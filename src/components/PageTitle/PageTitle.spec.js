import React from "react";
import { render } from "@testing-library/react";
import logo from "../../assets/logo.png";
import PageTitle from "./PageTitle";

describe("renders page title correctly", () => {
  it("renders correct page title when there is no logo", () => {
    const { getByText } = render(
      <PageTitle title="champions from 2005 to present"/>
    );
    const titleElement = getByText(/champions from 2005 to present/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders logo when there is a logo", () => {
    const { getByTestId } = render(
      <PageTitle title="champions from 2005 to present" logo={logo}/>
    );
    const logoElement = getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
  })
});

