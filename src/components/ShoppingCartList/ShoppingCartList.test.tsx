import { MemoryRouter } from "react-router-dom";
import { useShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { mockItemList } from "../../test/mocks/mockData";
import { screen, render } from "../../test/test-utils";
import ShoppingCartList from "./ShoppingCartList";

describe("ShoppingCartList component with 2 items", () => {
  vi.mock("../../contexts/ShoppingCartContext", () => ({
    ShoppingCartProvider: vi.fn(({ children }) => {
      return <div>{children}</div>;
    }),
    useShoppingCartContext: vi.fn(() => {
      return {
        shoppingCart: mockItemList,
        setShoppingCart: vi.fn(),
        handleQuantityChange: vi.fn(),
        resetCart: vi.fn(),
        countTotalPrice: vi.fn(),
      };
    }),
  }));
  test("should render list, 2 list items", async () => {
    render(
      <MemoryRouter>
        <ShoppingCartList />
      </MemoryRouter>
    );
    const list = await screen.findByRole("list");
    const listItems = await screen.findAllByRole("listitem");
    expect(list).toBeVisible();
    expect(listItems).toHaveLength(2);
  });
});

describe("ShoppingCartList component WITHOUT items", () => {
  test("should render message about empty cart", () => {
    vi.mocked(useShoppingCartContext).mockReturnValueOnce({
      shoppingCart: [],
      setShoppingCart: vi.fn(),
      addToCart: vi.fn(),
      removeFromCart: vi.fn(),
      handleQuantityChange: vi.fn(),
      resetCart: vi.fn(),
      countTotalPrice: vi.fn(),
    });
    render(
      <MemoryRouter>
        <ShoppingCartList />
      </MemoryRouter>
    );
    const message = screen.getByText(/Twój koszyk jest pusty./i);
    expect(message).toBeVisible();
  });
});
