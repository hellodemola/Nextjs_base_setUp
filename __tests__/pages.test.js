import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("main page shows", () => {
  test("should render the main page", () => {
    render(<Home />);
  });
});
