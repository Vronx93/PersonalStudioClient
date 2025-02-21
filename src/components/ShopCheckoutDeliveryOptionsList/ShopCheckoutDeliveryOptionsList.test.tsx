import { screen, render } from "../../test/test-utils";
import ShopCheckoutDeliveryOptionsList from "./ShopCheckoutDeliveryOptionsList";

describe("ShopCheckoutDeliveryOptionsList component", () => {
  test("should render list", () => {
    render(<ShopCheckoutDeliveryOptionsList />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
