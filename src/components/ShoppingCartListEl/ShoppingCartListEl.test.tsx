import { MemoryRouter } from "react-router-dom";
import { mockItem1 } from "../../test/mocks/mockData";
import { render, screen } from "../../test/test-utils";
import ShoppingCartListEl from "./ShoppingCartListEl";

describe("ShoppingCartEl component", () => {
  test("should render as list item with title", () => {
    render(
      <MemoryRouter>
        <ShoppingCartListEl item={mockItem1} />
      </MemoryRouter>
    );
    const listElement = screen.getByRole("listitem");
    const title = screen.getByRole("heading");
    expect(listElement).toBeVisible();
    expect(title).toBeVisible();
  });
});
