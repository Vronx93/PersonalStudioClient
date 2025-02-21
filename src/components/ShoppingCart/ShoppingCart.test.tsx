import { MemoryRouter } from "react-router-dom";
import { render } from "../../test/test-utils";
import ShoppingCart from "./ShoppingCart";

describe("ShoppingCart component WITH items", () => {
  test("should render ShoppingCart", () => {
    render(
      <MemoryRouter>
        <ShoppingCart />
      </MemoryRouter>
    );
  });
});
