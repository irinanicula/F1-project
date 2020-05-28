import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TableRow from "./TableRow";

const handleClick = jest.fn();

describe("renders TableRow component", () => {
  it("renders data cells with data from props", () => {
    const { getByText } = render(<TableRow row={["jake", "finn", "BMO"]} />);
    const firstDataCell = getByText("jake");
    expect(firstDataCell).toBeInTheDocument();

    const secondDataCell = getByText("finn");
    expect(secondDataCell).toBeInTheDocument();

    const thirdDataCell = getByText("BMO");
    expect(thirdDataCell).toBeInTheDocument();
  });

  it("does not fire click event without prop", () => {
    const { getByRole } = render(<TableRow row={["jake"]} champion={true} />);

    fireEvent.click(getByRole("table-data"));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it("does not fire click event without prop", () => {
    const { getByRole } = render(
      <TableRow row={["jake"]} champion={true} handleClick={handleClick} />
    );

    fireEvent.click(getByRole("table-data"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
