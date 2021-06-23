import { render, screen } from "@testing-library/react";
import PersonnelList from "./PersonnelList";

import "@testing-library/jest-dom";

test("Tes Halaman Personnel List", () => {
  render(<PersonnelList />);

  const addBtn = screen.getByRole("addButton");
  const pageTitle = screen.getByRole("pageTitle");
  expect(addBtn).toHaveTextContent("Add Personnel");
  expect(pageTitle).toHaveClass("MuiTypography-h4");
});
