import { render, screen } from "../../test/test-utils";
import AdminOnlineOptionsList from "./AdminOnlineOptionsList";

const option = {
  name: "Pakiet 3-miesięczny",
  price: 300,
  taxInPercent: 23,
  monthCount: 3,
  totalPrice: 369,
};

describe("AdminOnlineOptionsList component with 3 list items", () => {
  test("should render list, 3 list items", () => {
    render(<AdminOnlineOptionsList options={[option, option, option]} />);
    const list = screen.getByRole("list");
    const listItems = screen.getAllByRole("listitem");
    expect(list).toBeVisible();
    expect(listItems).toHaveLength(3);
  });
});
