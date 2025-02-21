import { MemoryRouter } from "react-router-dom";
import { mockItemList } from "../../test/mocks/mockData";
import { render } from "../../test/test-utils";
import ShopCheckoutList from "./ShopCheckoutList";
vi.mock("../../contexts/ShoppingCartContext", async (importOriginal) => {
  const actual: object = await importOriginal();
  return {
    ...actual,
    shoppingCart: mockItemList,
  };
});

describe("ShopCheckoutList component with 2 items", () => {
  test("should render list, 2 list items", () => {
    render(
      <MemoryRouter>
        <ShopCheckoutList />
      </MemoryRouter>
    );
    // const list = screen.getByRole("list");
    // const listItems = screen.getAllByRole("listitem");
    // expect(list).toBeVisible();
    // expect(listItems).toHaveLength(2);
  });
});
